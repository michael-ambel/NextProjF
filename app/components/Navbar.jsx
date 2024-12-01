import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src="/helpd.png"
        alt="=I helpdesk logo"
        width={40}
        height={40}
        quality={100}
        // placeholder="blur"
        // blurDataURL=""
      />
      <h1>Help Desk</h1>
      <Link href="/">Dashbord</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
