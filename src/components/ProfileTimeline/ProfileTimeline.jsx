"use client";

import React, { useEffect, useState } from "react";
import { PostCard } from "..";
import axios from "axios";

export default function ProfileTimeline() {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const userId = window.location.pathname.split("=")[1];
      const response = await axios.get(
        `/api/post/getalluserposts?userId=${userId}`
      );
      setUserPosts(response.data.data);
    })();
  }, [setUserPosts]);

  return (
    <div className="py-4">
      <div className="bg-slate-900/30 backdrop-blur-md flex flex-col w-full rounded-lg py-12">
        <h1 className="pb-10 px-10 text-4xl font-semibold">Timeline</h1>
        <div className="flex flex-wrap gap-5 items-center justify-evenly">
          {userPosts.map((post) => (
            <PostCard key={post._id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
