import React from "react";

export default function ProfileAbout() {
  return (
    <div className="min-h-screen w-full py-4">
      <div className="bg-slate-900/30 backdrop-blur-md flex flex-col w-full rounded-lg py-12">
        <h1 className="pb-10 px-10 text-4xl font-semibold">About</h1>
        <div className="flex flex-col gap-5 items-start justify-start px-2 lg:px-10 md:px-10">
          <div className="bg-slate-700/50 backdrop-blur-md p-5 text-xl rounded-md w-full flex flex-col lg:flex-row md:flex-row items-start lg:items-center md:items-center justify-start gap-2">
            <span className="font-semibold">Bio:</span>
            <span className="text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos adipisci itaque eum.
            </span>
          </div>
          <div className="flex flex-wrap justify-between gap-2 w-full">
            <div className="bg-slate-700/50 backdrop-blur-md py-3 px-5 text-xl rounded-md w-[88vw] lg:w-[36.5rem] flex flex-wrap items-center justify-start gap-2">
              <span className="font-semibold">Fullname:</span>
              <span className="text-lg font-light">Sagar Ghosh</span>
            </div>
            <div className="bg-slate-700/50 backdrop-blur-md py-3 px-5 text-xl rounded-md w-[88vw] lg:w-[36.5rem] flex flex-wrap items-center justify-start gap-2">
              <span className="font-semibold">Username:</span>
              <span className="text-lg font-light">Agent_006</span>
            </div>
            <div className="bg-slate-700/50 backdrop-blur-md py-3 px-5 text-xl rounded-md w-[88vw] lg:w-[36.5rem] flex flex-wrap items-center justify-start gap-2">
              <span className="font-semibold">Email:</span>
              <span className="text-lg font-light">
                sagarghosh0610@gmail.com
              </span>
            </div>
            <div className="bg-slate-700/50 backdrop-blur-md py-3 px-5 text-xl rounded-md w-[88vw] lg:w-[36.5rem] flex flex-wrap items-center justify-start gap-2">
              <span className="font-semibold">Pasword:</span>
              <span className="text-lg font-light">**************</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
