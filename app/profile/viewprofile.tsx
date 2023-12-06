

import { useEffect, useState } from "react";
import { PrismaClient, Employee } from "@prisma/client";
import { prisma } from "@/lib/db";
import Image from "next/image";

import Link from "next/link";

type userInfo = { 
  firstname: string; lastname: string; email: string; customname: string; custombio: string;
};

export const ViewProfile: React.FC<userInfo>  = ({firstname, lastname, email, customname, custombio}) => {


  return (
    <div className="container mx-auto m-10">
      <div className="flex">
        <div className="mx-4">
          <Image
            src={
              "https://i.pinimg.com/564x/a9/75/93/a975934bb378afc4ca8c133df451f56e.jpg"
            }
            width={250}
            height={250}
            alt={"User Profile Image"}
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
                      {firstname}
                    </td>
                  </tr>
                  {/* Last Name */}
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Last Name
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {lastname}
                    </td>
                  </tr>
                  {/* Emails */}
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Email
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {email} 
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Skills & Experiences
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {customname}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Personal Bio
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {custombio}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/updateprofile">
              <button className="bg-teal-500 text-black rounded-md font-medium py-2 px-4 mt-4 hover:bg-teal-700 transition-all">
                Update Personal Profile
              </button>
              </Link>
          </div>
        </div>
        <div className="ml-20 w-1/2">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block w-full shadow-md rounded-lg overflow-hidden">
              <table className="w-full leading-normal">
                <tbody>
                  {/* Firstname */}
                  <tr>
                    <td className="px-5 py-5 font-bold border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap">
                      Jobs I applied to
                    </td>
                    <td className="px-5 py-5 font-bold border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap">
                      Current Status
                    </td>
                  </tr>
                  {/* Last Name */}
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Job 1
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      ...
                    </td>
                  </tr>
                  {/* Emails */}
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Job 2
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      ...
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Job 3
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      ...
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Job 4
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      ...
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Job 5
                    </td>
                    <td className="text-gray-900 whitespace-no-wrap px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      ...
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

