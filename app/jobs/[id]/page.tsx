import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import {ApplyButton} from "@/components/applyButton";
import SubmitButton from "@/components/submit-button";
import toast from "react-hot-toast";
import updateJob from "@/actions/update-job";
import {ApplyJobButton} from "./apply";


export default async function JobPage({ params }: { params: { id: string } }) {
  const job = await prisma.jobListing.findUnique({
    where: {
      id: params.id,
    },
  });

  console.log(job?.id);

  return (
    <div className="w-4/5">
      <div className="container p-12 space-y-7">
        <h1 className="text-[4rem]">{job?.title}</h1>
        <div>{job?.isApplied? (
          <p className="bg-teal-100 text-black font-bold inline p-3 px-5 rounded-full">
            Status: Applied
          </p>) : (
          <p className="bg-gray-100 text-black font-bold inline p-3 px-5 rounded-full">
            Status: Not Applied
          </p>
          )}
        </div>

        <div className="flex gap-4 items-center">
          <p className="text-[1.2rem]">{job?.companyName}</p>
          <p className=" text-neutral-500">{job?.location}</p>
          <p className=" text-neutral-500">{job?.type}</p>
          <p className="bg-white text-black inline p-3 px-5 rounded-full">
            $ {job?.salary}
          </p>
        </div>

        <div>
          <p className=" font-bold">
            Please apply using apply button and if you want to go listings, use
            the back button
          </p>
          <p className="py-6 font-normal">{job?.description}</p>

          <div className="flex items-center gap-4 py-4">
            <Link
              href="/jobs"
              className="py-2 px-5 bg-neutral-200 rounded-sm"
            >
              Back
            </Link>
            <ApplyJobButton job={job}/>
          </div>
        </div>
      </div>
    </div>
  );
}
