import React from "react";
import { Filters } from "..";

export default function Rightbar() {
  return (
    <div className="border-l-[1px] border-slate-500 w-full h-full flex flex-col justify-between py-10 px-3 text-sm">
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <h1 className="text-xl font-semibold">Filters</h1>
        <Filters />
      </div>
      <div className="flex flex-col gap-2 w-full">
        pata nahi kuch to hoga yaha
      </div>
    </div>
  );
}
