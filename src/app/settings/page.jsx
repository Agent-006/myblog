import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

export default function SettingsPage() {
  return (
    <div className="w-10/12 h-[calc(100vh-56px)] p-3 overflow-hidden">
      <ScrollArea className="h-[calc(100vh-56px)] w-full">
        <div className="flex flex-col justify-center items-center h-96 w-full">
          Settings feature will be soon available
        </div>
      </ScrollArea>
    </div>
  );
}
