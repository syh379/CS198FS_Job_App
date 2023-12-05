import React from "react";
import ClientJob from "./client-job";
import { prisma } from "@/lib/prisma";

export default async function page() {
  const jobs = await prisma.jobListing.findMany({});

  return (
    <div
      style={{ paddingLeft: "30px", paddingTop: "20px", paddingBottom: "50px" }}
    >
      <h1 className="text-[3rem] container py-4">Find Your Job</h1>

      <div>
        <ClientJob jobs={jobs} />
      </div>
    </div>
  );
}
