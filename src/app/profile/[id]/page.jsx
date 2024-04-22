"use client";

import React, { useState } from "react";

import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Leftbar, Navbar, ProfileAbout, ProfileFriends, ProfileTimeline } from "@/components";

export default function ProfilePage() {
  const [tab, setTab] = useState("timeline");

  const changeTab = (clickedTab) => {
    setTab(clickedTab);
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-[89vh] flex items-center justify-center lg:items-stretch md:items-stretch">
        <div className="w-2/12 hidden lg:block md:block">
          <Leftbar />
        </div>
        <div className="w-full lg:w-10/12 md:w-10/12 h-[calc(100vh-56px)] p-3 overflow-hidden">
          <ScrollArea className="h-[calc(100vh-56px)] w-full">
            <div className="relative h-[26rem] w-full flex flex-col gap-2 overflow-hidden">
              <div className="bg-slate-800 w-52 h-52 absolute rounded-full translate-x-[50%] translate-y-[50%] bottom-[50%] right-[50%] lg:bottom-[35%] md:bottom-[50%] lg:right-[83%] md:right-[50%] z-10 border-2 border-slate-500 overflow-hidden">
                <Image
                  objectFit="cover"
                  width={208}
                  height={208}
                  src={"/assets/image/pexels-agafonova-photo-5477855.jpg"}
                  alt="profile image"
                />
              </div>
              <div className="h-5/6 w-full flex justify-center rounded-lg overflow-hidden">
                <Image
                  objectFit="cover"
                  width={1920}
                  height={1080}
                  src={"/assets/image/pexels-maxime-francis-2246476 (1).jpg"}
                  alt="cover image"
                />
              </div>
              <div className="h-1/6 w-full overflow-hidden">
                <ul className="bg-slate-800/50 backdrop-blur-md w-full h-full flex justify-center items-center gap-5 rounded-lg">
                  <li
                    onClick={() => changeTab("timeline")}
                    className="cursor-pointer font-semibold bg-slate-800 hover:bg-slate-700 duration-300 lg:py-6 lg:px-5 p-5"
                  >
                    Timeline
                  </li>
                  <li
                    onClick={() => changeTab("about")}
                    className="cursor-pointer font-semibold bg-slate-800 hover:bg-slate-700 duration-300 lg:py-6 lg:px-5 p-5"
                  >
                    About
                  </li>
                  <li
                    onClick={() => changeTab("friends")}
                    className="cursor-pointer font-semibold bg-slate-800 hover:bg-slate-700 duration-300 lg:py-6 lg:px-5 p-5"
                  >
                    Friends
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-full">
              {tab === "timeline" && <ProfileTimeline />}
              {tab === "about" && <ProfileAbout />}
              {tab === "friends" && <ProfileFriends />}
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
