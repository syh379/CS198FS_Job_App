"use client";
import updateJob from "@/actions/update-job";
import SubmitButton from "@/components/submit-button";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import {useRouter} from "next/navigation";
import { ApplyButton } from "@/components/applyButton";



export function ApplyJobButton({job}: {job: any}) {

//console.log("wowowo", id);
let lb = "Apply";
let lb2 = false;
if (job.isApplied) {
    lb = "Already Applied";
    lb2 = true;
}
return (
<form
action={async (formData) => {
  await updateJob(formData);
  toast.success("Job updated successfully!");
  //redirect("/jobs");
}}
>
<input type="hidden" name="jobId" value={job.id} id="jobId" />
<SubmitButton label={lb} />
</form>
)
}