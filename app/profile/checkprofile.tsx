// Admin panel
"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";
import ViewProfile from "./viewprofile";

export default function CheckProfile(appliedJobs: any) {

  console.log("redirected to profile page")

  const { isLoaded, isSignedIn, user } = useUser();

  console.log("sucessfully loaded user")
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  let email = null;
  email = user.emailAddresses.map((e) => (
    e.emailAddress
  ))
  email = email[0]
  return (
    <>
    <ViewProfile 
    appliedJobs={appliedJobs}
    firstname={user.firstName as string} 
    lastname={user.lastName as string} 
    email={email} 
    customname={user.unsafeMetadata.customName? user.unsafeMetadata.customName.toString(): ""} 
    custombio={user.unsafeMetadata.customBio? user.unsafeMetadata.customBio.toString(): ""}/>
    </>
  );
}
