
"use client";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import { currentUser } from "@clerk/nextjs";


export const ApplyButton = () =>{

  const [apply, setApply] = React.useState(false);

  function onClick() {
    setApply(!apply);
    if (!apply) {
        alert("You have applied for this job!");
    }
  } 

  return (
    <>
    {apply? (
        <button
        onClick={onClick}
        className="py-2 px-5 bg-teal-500 text-zinc-800 rounded-full"
      >
        Already Applied
      </button>) :
    (<button
        onClick={onClick}
        className="py-2 px-5 bg-neutral-200 text-zinc-800 rounded-full"
      >
        Apply
      </button>)}
      </>
  );
}

