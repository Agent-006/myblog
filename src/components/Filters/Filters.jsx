import React from "react";

export default function Filters() {
  return (
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
  );
}
