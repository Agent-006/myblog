import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function GroupsPage() {
  return (
    <div className="flex items-center justify-center w-10/12 h-[calc(100vh-56px)] text-slate-200">
      <ScrollArea className="h-[calc(100vh-56px)] w-full">
        <div className="flex flex-col justify-center items-center h-96 w-full">
          Group feature will be soon available
        </div>
      </ScrollArea>
    </div>
  );
}
