import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">We Hit a Brick Wal;</h2>
      <p>The ticket you are looking for could not found</p>
      <p>
        Return to <Link href="./tickets">Tickets </Link>
      </p>
    </main>
  );
}
