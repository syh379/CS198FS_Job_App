"use client";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/nextjs";

import { useRouter } from "next/navigation";

const AdditionalUpdate = () => {
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

  const onSubmit = (data: any) => {
    try {
      console.log("Before user update", user);
      const updateUserResult = user.update({
        // firstName: data.firstName,
        // lastName: data.lastName,
        // unsafeMetadata: {
        //   customName: data.customName,
        //   customBio: data.customBio,
        // },
        firstName: "hello",
        lastName: "world",
      });
      console.log("After user update", updateUserResult);
      router.push("/viewprofile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-10">
      <h1 className="text-2xl font-bold py-4">Update Additional Information</h1>
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
            {...register("firstName", {
              required: true,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.firstName && (
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
            {...register("lastName", {
              required: true,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.lastName && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="customName"
          >
            Custom Name
          </label>
          <input
            defaultValue={
              user.unsafeMetadata.customName
                ? (user.unsafeMetadata.customName as string)
                : ""
            }
            {...register("customName", {
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
            Custom Bio
          </label>
          <textarea
            rows={6}
            defaultValue={
              user.unsafeMetadata.customBio
                ? (user.unsafeMetadata.customBio as string)
                : ""
            }
            {...register("customBio", {
              required: false,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white font-bold py-2 px-4 mt-4 hover:bg-purple-800 transition-all"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default AdditionalUpdate;
