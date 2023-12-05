"use client";
import React from "react";

const Bottom = () => {
  const onClick = () => {
    alert("Your email is saved!");
  };
  return (
    <div className="bg-teal-100">
      <div
        className="max-w-[1240px] mx-auto grid lg:grid-cols-3"
        style={{ padding: "70px" }}
      >
        <div className="lg:col-span-2 my-4">
          <h1 style={{ color: "black" }}>
            Want latest job openings and updates from us?
          </h1>
          <p style={{ color: "black" }}>
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div>
          <form style={{ color: "black" }}>
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <input
              onClick={onClick}
              type="reset"
              value="Notify Me"
              className="bg-teal-500 text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
