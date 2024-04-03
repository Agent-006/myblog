import React from "react";
import { PostCard } from "..";

export default function ProfileTimeline() {
  return (
    <div className="py-4">
      <div className="bg-slate-900/30 backdrop-blur-md flex flex-col w-full rounded-lg py-12">
        <h1 className="pb-10 px-10 text-4xl font-semibold">Timeline</h1>
        <div className="flex flex-wrap gap-5 items-center justify-evenly">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
}
