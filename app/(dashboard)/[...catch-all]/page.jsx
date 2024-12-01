import { notFound } from "next/navigation";

//This page will handle if route is not found in (dashboard) Rout Groups

export default function NotFound() {
  return notFound();
}
