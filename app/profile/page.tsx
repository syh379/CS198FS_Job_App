
import React from "react";
import { prisma } from "@/lib/prisma";
import CheckProfile from "./checkprofile";

export default async function page({ params }: { params: { title: string } }) {
    const appliedJobs = await prisma.jobListing.findMany({
        where: {
          isApplied: true,
        },
      });
    

  return (
    <CheckProfile appliedJobs={appliedJobs}/>
  );
}
