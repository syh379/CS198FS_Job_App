"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function updateJobs(data: FormData) {
  const jobId = data.get("jobId") as string;

  console.log(jobId);
  const job = await prisma.jobListing.findFirst({
    where: {
      id: jobId,
    },
  });

  const isApplied = job?.isApplied;
  await prisma.jobListing.update({
    where: {
      id: jobId,
    },
    data: {
      isApplied: !isApplied,
    },
  });
  revalidatePath("/jobs");
}
