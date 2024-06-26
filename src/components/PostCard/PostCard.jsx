import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  _id,
  imageSource,
  title,
  category,
  author,
}) {
  return (
    <Link
      href={`/post?id=${_id}`}
      className="bg-slate-900 w-64 h-96 rounded-md overflow-hidden"
    >
      <div className="w-full h-4/6 flex justify-center">
        <Image
          className="bg-s"
          width={256}
          height={200}
          src={
            imageSource
              ? imageSource
              : "/assets/image/pexels-amaan-shaikh-19946465.jpg"
          }
          alt="Blog Image"
        />
      </div>
      <div className="h-1/6 flex items-center justify-start p-2 border-b-[.5px] border-slate-500 gap-1 mx-1">
        <span className="text-sm font-semibold text-slate-200">{title}</span>
      </div>
      <div className="flex items-center justify-start p-2 border-b-[.5px] border-slate-500 gap-1 mx-1">
        <span className="text-slate-400 text-xs">author:</span>
        <span className="text-sm font-semibold text-slate-200">
          {author.username}
        </span>
      </div>
      <div className="flex items-center justify-start p-2 mx-1">
        <span className="text-xs text-slate-400">category: {category}</span>
      </div>
    </Link>
  );
}
