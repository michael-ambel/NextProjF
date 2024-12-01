import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  // request:{
  //     method: "GET", // The HTTP method (e.g., GET, POST, etc.)
  //     url: "http://example.com/api/route?code=12345", // Full URL of the request
  //     headers: { ... }, // Headers sent with the request
  //     body: null, // For GET requests, body is typically null
  //     cookies: { ... } // (If available) Parsed cookies from the request
  //   }
  const url = new URL(request.url);
  //   url: {
  //     href: "http://example.com/api/route?code=12345", // Full URL as a string
  //     origin: "http://example.com", // Protocol + hostname
  //     pathname: "/api/route", // Path of the URL
  //     search: "?code=12345", // Query string
  //     searchParams: URLSearchParams { ... } // A Map-like object to interact with query parameters
  //   }
  const code = url.searchParams.get("code");
  // code:
  // If the request URL is "http://example.com/api/route?code=12345"
  // const code = url.searchParams.get("code"); // "12345"

  // If the request URL is "http://example.com/api/route" (no code parameter)
  // const code = url.searchParams.get("code"); // null

  if (code) {
    const supabase = createRouteHandlerClient({ cookies }); //Initializes a Supabase client with cookie management enabled.
    await supabase.auth.exchangeCodeForSession(code); //Exchanges the code for an authenticated session in Supabase.
  }

  return NextResponse.redirect(url.origin); //Redirects the user to the base URL
}
