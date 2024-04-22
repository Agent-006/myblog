"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ProfileAbout() {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <div className="min-h-screen w-full py-4">
      <div className="bg-slate-900/30 backdrop-blur-md flex flex-col w-full rounded-lg py-12">
        <h1 className="pb-10 px-10 text-4xl font-semibold">About</h1>
        <div className="flex flex-col gap-5 items-start justify-start px-2 lg:px-10 md:px-10">
          <div className="bg-slate-700/50 backdrop-blur-md p-5 text-xl rounded-md w-full flex flex-col lg:flex-row md:flex-row items-start lg:items-center md:items-center justify-start gap-2">
            <span className="font-semibold">Bio:</span>
            <span className="text-lg font-light">{userData?.bio}</span>
          </div>
          <div className="flex flex-wrap justify-between gap-2 w-full">
            <div className="bg-slate-700/50 backdrop-blur-md py-3 px-5 text-xl rounded-md w-[88vw] lg:w-[36.5rem] flex flex-wrap items-center justify-start gap-2">
              <span className="font-semibold">Fullname:</span>
              <span className="text-lg font-light">{userData?.fullname}</span>
            </div>
            <div className="bg-slate-700/50 backdrop-blur-md py-3 px-5 text-xl rounded-md w-[88vw] lg:w-[36.5rem] flex flex-wrap items-center justify-start gap-2">
              <span className="font-semibold">Username:</span>
              <span className="text-lg font-light">{userData?.username}</span>
            </div>
            <div className="bg-slate-700/50 backdrop-blur-md py-3 px-5 text-xl rounded-md w-[88vw] lg:w-[36.5rem] flex flex-wrap items-center justify-start gap-2">
              <span className="font-semibold">Email:</span>
              <span className="text-lg font-light">{userData?.email}</span>
            </div>
            <div className="bg-slate-700/50 backdrop-blur-md py-3 px-5 text-xl rounded-md w-[88vw] lg:w-[36.5rem] flex flex-wrap items-center justify-start gap-2">
              <span className="font-semibold">Verified:</span>
              <span className="text-lg font-light">
                {userData?.isVerified ? "✅" : "❌"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
