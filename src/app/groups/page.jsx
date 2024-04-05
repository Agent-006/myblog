import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Leftbar, Navbar } from "@/components";

export default function GroupsPage() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[89vh] flex items-center justify-center lg:items-stretch md:items-stretch">
        <div className="w-2/12 hidden lg:block md:block">
          <Leftbar />
        </div>
        <div className="w-10/12 h-[calc(100vh-56px)] p-3 overflow-hidden">
          <ScrollArea className="h-[calc(100vh-56px)] w-full">
            <div className="flex flex-col justify-center items-center h-96 w-full">
              Group feature will be soon available
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
