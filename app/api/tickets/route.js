import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(request) {
  // Parse request body as JSON
  const ticket = await request.json();

  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Insert new ticket into Supabase with user's email
  const { data, error } = await supabase
    .from("tickets")
    .insert({ ...ticket, user_email: session.user.email })
    .select()
    .single();

  // Return response
  return NextResponse.json({ data, error });
}
