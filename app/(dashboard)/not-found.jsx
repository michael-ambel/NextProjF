import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Whoops! This page doesn’t exist.</h2>
      <p>The page you are looking for could not found</p>
      <p>
        Return to <Link href="./">Home </Link>
      </p>
    </main>
  );
}
