import { redirect } from "next/navigation";
import Description from "./Description";
import Top from "./Top";
import Bottom from "./Bottom";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Top />
      <Description />
      <Bottom />
    </>
  );
}
