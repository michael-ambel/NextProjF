import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import DeleteButton from "./DeleteButton";

export const daynamicParams = true; //default allows serving paths not pre-rendered by generateStaticParams().
// export const daynamicParams = false //any path not pre-rendered results in a 404 error

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from("tickets")
    .select()
    .eq("id", params.id)
    .single();

  return { title: `Help Desk | ${data?.title}` || "Ticket not found" };
}

async function getTicket(id) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from("tickets")
    .select()
    .eq("id", id)
    .single();

  if (!data) {
    notFound();
  }
  console.log(data);
  return data;
}
export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {data.session.user.email === ticket.user_email && (
            <DeleteButton id={ticket.id} />
          )}
        </div>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
