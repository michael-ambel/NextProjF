"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [error, setError] = useState("");

  const submitHandler = async (e, email, password) => {
    e.preventDefault();

    setError("");

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/");
    }
  };
  return (
    <main>
      <h2 className="text-center">Log in</h2>
      <AuthForm submitHandler={submitHandler} />
      {error && <div className="error">{error}</div>}
    </main>
  );
}
