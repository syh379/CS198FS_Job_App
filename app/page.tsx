import { redirect } from "next/navigation";
import Description from "./Description";
import Top from "./Top";
import Bottom from "./Bottom";

export default function Home() {
  return (
    <>
      <Top />
      <Description />
      <Bottom />
    </>
  );
}
