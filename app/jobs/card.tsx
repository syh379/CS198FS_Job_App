"use client";

import deleteJob from "@/actions/delete-job";
import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

type Card = {
  id: string;
  title: string;
  companyName: string;
  location: string;
  salary: string;
  type: string;
  desc: string;
  description: string;
};

export default function Card({
  title,
  id,
  companyName,
  location,
  salary,
  type,
  desc,
  description,
}: Card) {
  const router = useRouter();

  return (
    <div className="w-[400px] min-h-[300px] p-6 shadow-md bg-gray-100 flex flex-col p-4 border-2 rounded-lg">
      <div>
        <h1 className="text-[2rem]">{title}</h1>
        <div className="flex items-center gap-4 text-neutral-500">
          <span>{companyName}</span>
          <span>{location}</span>
        </div>
      </div>

      <div className="my-5 flex items-center gap-5">
        <span className=" rounded-2xl bg-neutral-300 p-2">$ {salary}</span>
        <span className=" rounded-2xl bg-neutral-300 p-2 px-4">{type}</span>
      </div>

      <p className="text-lg">{description}</p>

      <div className="pt-6 ml-auto mr-2 flex gap-4">
        <form
          action={async (formData) => {
            await deleteJob(formData);
            toast.success("Job deleted successfully!");
          }}
        >
          <input type="hidden" name="jobId" value={id} id="jobId" />
          <SubmitButton label="Delete" />
        </form>
        <Button onClick={() => router.push(`/jobs/${id}`)}>View More</Button>
      </div>
    </div>
  );
}
