"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

import Image from "next/image";

import Link from "next/link";

const ViewProfile = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  console.log(user);

  return (
    <div className="container mx-auto m-10">
      <div className="flex">
        <div className="mx-4">
          <Image
            src={
              "https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
            }
            width={250}
            height={250}
            alt={user.fullName ? user.fullName : "User Profile Image"}
            className="rounded-lg"
          />
        </div>
        <div className="ml-4">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block w-full shadow-md rounded-lg overflow-hidden">
              <table className="w-full leading-normal">
                <tbody>
                  {/* Firstname */}
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap">
                      First Name
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap">
                      {user.firstName}
                    </td>
                  </tr>
                  {/* Last Name */}
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Last Name
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.lastName}
                    </td>
                  </tr>
                  {/* Emails */}
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Emails
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.emailAddresses.map((email) => (
                        <div key={email.emailAddress}>
                          {email.emailAddress},{" "}
                        </div>
                      ))}
                    </td>
                  </tr>
                  Additional MetaData
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Custom Name
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.unsafeMetadata.customName as string}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Custom Bio
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.unsafeMetadata.customBio as string}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href={"/updateprofile"}>
              <button className="bg-purple-600 text-white font-bold py-2 px-4 mt-4 hover:bg-purple-800 transition-all">
                Update Additional Information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
