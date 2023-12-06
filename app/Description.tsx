"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Description = () => {
  const router = useRouter();
  return (
    <section className="bg-white">
      <div className="m-10 max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202210/paying-job-sixteen_nine.jpg" />
        <div className="flex flex-col justify-center">
          <p className=" font-bold ">Search Jobs Smartly</p>
          <h1 className="md:font-bold py-2">
            Your Personal Job Application Tool
          </h1>
          <p>
            WHaLes Jobs is a job search engine that helps you find your ideal
            job with ease. With WHaLes Jobs, you can search for jobs by
            location, keywords, company, and more. You can also save your
            searches and receive email alerts when new jobs matching your
            criteria are posted. WHaLes Jobs is the best way to find your next
            job.
          </p>
          <button
            onClick={() => router.push("/profile")}
            className="bg-teal-500 rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
          >
            Go To Your Personal Dashboard!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Description;
