"use client";

import React from "react";

import Link from "next/link";
import { Home, Plus, Users, User, LogOut, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Leftbar() {
  const userData = useSelector((state) => state.auth.userData);
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.post("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="border-r-[1px] border-slate-500 w-full h-full flex flex-col justify-between py-10 px-3">
      <div className="flex flex-col gap-2 w-full">
        <Link
          className="bg-slate-900 py-2 px-3 rounded-md flex items-center justify-start gap-1 text-sm hover:bg-slate-700 duration-300"
          href={"/"}
        >
          <Home width={15} /> Home
        </Link>
        <Link
          className="bg-slate-900 py-2 px-3 rounded-md flex items-center justify-start gap-1 text-sm hover:bg-slate-700 duration-300"
          href={"/addpost"}
        >
          <Plus width={15} /> Add post
        </Link>
        <Link
          className="bg-slate-900 py-2 px-3 rounded-md flex items-center justify-start gap-1 text-sm hover:bg-slate-700 duration-300"
          href={"/groups"}
        >
          <Users width={15} /> Groups
        </Link>
        <Link
          className="bg-slate-900 py-2 px-3 rounded-md flex items-center justify-start gap-1 text-sm hover:bg-slate-700 duration-300"
          href={`/profile/id=${userData?._id}`}
        >
          <User width={15} /> Profile
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Link
          onClick={logout}
          className="bg-slate-900 py-2 px-3 rounded-md flex items-center justify-start gap-1 text-sm hover:bg-slate-700 duration-300"
          href={"#"}
        >
          <LogOut width={15} /> Logout
        </Link>
        <Link
          className="bg-slate-900 py-2 px-3 rounded-md flex items-center justify-start gap-1 text-sm hover:bg-slate-700 duration-300"
          href={"/settings"}
        >
          <Settings width={15} />
          Settings
        </Link>
      </div>
    </div>
  );
}
