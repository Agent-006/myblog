import React from "react";

export default function Rightbar() {
  return (
    <div className="border-l-[1px] border-slate-500 w-full h-full flex flex-col justify-between py-10 px-3 text-sm">
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <h1 className="text-xl font-semibold">Filters</h1>
        <div className="w-full flex flex-wrap items-start justify-start gap-2 border-b-[1px] border-slate-500 py-5">
          <div className="px-5 py-3 bg-slate-900 rounded-full hover:bg-slate-700 duration-300 cursor-pointer">
            All post
          </div>
          <div className="px-5 py-3 bg-slate-900 rounded-full hover:bg-slate-700 duration-300 cursor-pointer">
            Tech
          </div>
          <div className="px-5 py-3 bg-slate-900 rounded-full hover:bg-slate-700 duration-300 cursor-pointer">
            Nature
          </div>
          <div className="px-5 py-3 bg-slate-900 rounded-full hover:bg-slate-700 duration-300 cursor-pointer">
            Animals
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        pata nahi kuch to hoga yaha
      </div>
    </div>
  );
}
