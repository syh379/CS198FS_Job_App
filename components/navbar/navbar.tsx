"use client";
import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <nav className="bg-gray-600">
      <div className="flex justify-between items-center p-6 container">
        <Link href="/jobs" className="text-[25px] font-bold">
          WHaLes Jobs
        </Link>

        <ul className="flex gap-4 text-[1.2rem] text-md">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/create-job">Create a job</Link>
          </li>
          <li>
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/viewprofile"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
