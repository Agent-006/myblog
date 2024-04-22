"use client";

import { Rightbar, PostCard, Filters, Navbar, Leftbar } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.post("/api/post/getallposts");
      setPost(response.data.data);
    })();
  }, [setPost]);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-[89vh] flex items-center justify-center lg:items-stretch md:items-stretch">
        <div className="w-2/12 hidden lg:block md:block">
          <Leftbar />
        </div>
        <div className="w-full lg:w-7/12 md:w-7/12">
          <ScrollArea className="h-[calc(100vh-56px)] w-full">
            <div className="px-5 flex lg:hidden md:hidden">
              <Filters />
            </div>
            <div className="p-8">
              <h4 className="mb-4 text-lg text-slate-200 font-semibold leading-none">
                All Blogs
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {post.map((post) => (
                  <PostCard key={post._id} {...post} />
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="w-3/12 hidden lg:block md:block">
          <Rightbar />
        </div>
      </div>
    </>
  );
}
