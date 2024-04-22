"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components";
import axios from "axios";

export default function PostPage() {
  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      const postId = window.location.search.split("=")[1];
      const response = await axios.post(`/api/post/getpost?postId=${postId}`);
      setPost(response.data.data);
    })();
  }, [setPost]);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-[89vh] flex items-center justify-center lg:items-stretch md:items-stretch">
        <ScrollArea className="h-[calc(100vh-56px)] w-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-1 p-4">
            <div className="w-full flex items-center justify-center bg-slate-800 rounded-lg overflow-hidden">
              <Image
                objectFit="contain"
                width={400}
                height={720}
                src={
                  post.imageFile
                    ? post.imageFile
                    : "/assets/image/pexels-amaan-shaikh-19946465.jpg"
                }
                alt="post image"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center bg-slate-800/50 backdrop-blur-md rounded-lg px-5 py-3">
              <div>
                {/* <span className="font-semibold text-xl">Title: </span> */}
                <span className="font-semibold text-xl">{post?.title}</span>
              </div>
              <div>
                <span className="text-sm text-slate-400 font-semibold">
                  Author:
                </span>

                <span className="font-light text-base">
                  {" "}
                  {post?.author?.username}
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-center bg-slate-800/50 backdrop-blur-md rounded-lg px-5 py-3">
              <p className="font-light ">{post?.content}</p>
            </div>
            <div className="w-full flex flex-col items-start justify-center bg-slate-800/50 backdrop-blur-md rounded-lg px-5 py-3">
              Tag: {post?.category}
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
