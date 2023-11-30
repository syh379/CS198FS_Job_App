import { redirect } from "next/navigation";

export default function Home() {
  redirect("/jobs");
  // return <div>Home</div>;
}
