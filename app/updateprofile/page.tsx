"use client";
import { useForm } from "react-hook-form";
import { useUser, clerkClient } from "@clerk/nextjs";
import {ViewProfile} from "../profile/viewprofile";
import { useRouter } from "next/navigation";
import { prisma } from "@/lib/db";


// type userInfo = { 
//   firstname: string; lastname: string; customname: string; custombio: string;
// };

// Import the generated Prisma Client
import { PrismaClient } from '@prisma/client';

// Instantiate Prisma Client


const UpdateProfile = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn || !user) {
    return null;
  }



  async function onSubmit(data: any) {
    try {
      console.log(user!.id);
      const updateUserResult = await user?.update({
        firstName: "world",
        lastName: "hello",
        unsafeMetadata: {
          customName: data.customname? data.customname as string: "",
          customBio: data.custombio? data.custombio as string: "",
        },
      });
      console.log("After user update", updateUserResult);
      router.push("/profile");
    } catch (error) {
      router.push("/profile");
      console.log("error", error);
    }
  };

  return (
    <div className="mx-10 my-10">
      <h1 className="text-2xl font-bold py-4">Update Your Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            defaultValue={user.firstName ? user.firstName : ""}
            {...register("firstname", {
              required: true,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.firstname && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            defaultValue={user.lastName ? user.lastName : ""}
            {...register("lastname", {
              required: true,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.lastname && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="customName"
          >
            Skills & Experiences
          </label>
          <input
            defaultValue={
              user.unsafeMetadata.customName
                ? (user.unsafeMetadata.customName as string)
                : ""
            }
            {...register("customname", {
              required: false,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="customBio"
          >
            Personal Bio
          </label>
          <textarea
            rows={6}
            defaultValue={
              user.unsafeMetadata.customBio
                ? (user.unsafeMetadata.customBio as string)
                : ""
            }
            {...register("custombio", {
              required: false,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-teal-500 text-black rounded-md font-medium py-2 px-4 mt-4 hover:bg-teal-700 transition-all"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
