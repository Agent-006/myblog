import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Leftbar, Navbar } from "@/components";
import Link from "next/link";
import { Settings } from "lucide-react";

export default function SettingsPage({ children }) {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[89vh] flex items-center justify-center lg:items-stretch md:items-stretch">
        <div className="w-2/12 hidden lg:block md:block">
          <Leftbar />
        </div>
        <div className="w-full lg:w-10/12 md:w-10/12 h-[calc(100vh-56px)] p-4 overflow-hidden">
          <ScrollArea className="h-[calc(100vh-56px)] w-full">
            {children}
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
