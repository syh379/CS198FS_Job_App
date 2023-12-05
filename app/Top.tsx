"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Top = () => {
  const router = useRouter();
  const imageUrl =
    "https://devtechnosys.com/insights/wp-content/uploads/2022/03/Job-Seeker.gif";
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        width: "100%",
        height: "1000px",
        backgroundSize: "right",
      }}
    >
      <div
        className="flex flex-col justify-center"
        style={{
          paddingTop: "70px",
          position: "relative",
          top: "500px",
          left: "70px",
          width: "600px",
          fontSize: "30px",
        }}
      >
        <p
          className="font-bold"
          style={{ color: "black", marginBottom: "5px" }}
        >
          GROWING WITH WHaLes
        </p>
        <ul>
          <li style={{ color: "black", marginBottom: "2px" }}>
            Find your ideal jobs.
          </li>
          <li style={{ color: "black", marginBottom: "2px" }}>
            Fast, flexible search for jobs
          </li>
          <li style={{ color: "black", marginBottom: "2px" }}>
            Every month, more than 270 million people use WHaLes Jobs to help
            them find jobs, make career decisions, and more.
          </li>
        </ul>
        <button
          onClick={() => router.push("/jobs")}
          className="bg-teal-500 w-[200px] rounded-md font-medium my-6 py-3 text-black"
          style={{ marginBottom: "70px" }}
        >
          Get Started
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Top;
