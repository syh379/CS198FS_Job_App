"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import InputWithLabel from "./input-job";
import { DropDown } from "@/components/dropdown";
import SubmitButton from "@/components/submit-button";
import createJobs from "@/actions/create-job";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";

const initialState = {
  title: "",
  companyName: "",
  location: "",
  salary: "",
  type: "",
  description: "",
};

const jobType = [
  {
    value: "Full-Time",
    label: "Full-Time",
  },
  {
    value: "Part-Time",
    label: "Part-Time",
  },
];

export default function CreateJobClient() {
  const [value, setValue] = useState("");
  const [state, setState] = useState({ ...initialState, type: "" });

  useEffect(() => {
    setState((prev) => ({ ...prev, type: value }));
  }, [value]);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <form
        action={async (formData) => {
          await createJobs(formData);
          toast.success("Created Successfully");
          redirect("/jobs");
        }}
        className="container mx-auto grid gap-6 justify-items-center"
      >
        <InputWithLabel
          type="text"
          id="title"
          placeholder="Title"
          label="title"
          value={state.title}
          onChange={onChange}
          name="title"
        />

        <InputWithLabel
          type="text"
          value={state.companyName}
          id="companyName"
          placeholder="CompanyName"
          label="companyName"
          name="companyName"
          onChange={onChange}
        />

        <InputWithLabel
          type="text"
          id="location"
          placeholder="Location"
          label="location"
          value={state.location}
          onChange={onChange}
          name="location"
        />
        <InputWithLabel
          type="text"
          value={state.salary}
          id="salary"
          placeholder="Salary"
          label="salary"
          onChange={onChange}
          name="salary"
        />
        <InputWithLabel
          type="text"
          value={state.description}
          id="description"
          placeholder="Description"
          label="description"
          onChange={onChange}
          name="description"
        />

        <input type="hidden" value={value} name="type" onChange={onChange} />
        <div style={{ marginTop: "20px" }}>
          <DropDown value={value} setValue={setValue} jobType={jobType} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <SubmitButton label="Create" />
        </div>
      </form>
    </div>
  );
}
