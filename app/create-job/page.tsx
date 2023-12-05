import React from "react";
import CreateJobClient from "./client";
import {
  SignInButton,
  UserButton,
  UserProfile,
  currentUser,
} from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

export default async function page() {
  const user: User | null = await currentUser();
  return (
    <div style={{ marginBottom: "180px" }}>
      {!!user ? (
        <>
          <div className="container py-12">
            <h1 className="text-[4rem]">Create jobs</h1>
          </div>
          <CreateJobClient />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}
