import React from "react";

import Link from "next/link";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <>
      <div className="w-full h-16 flex items-center justify-between text-2xl font-semibold rounded-lg px-4 mt-2">
        Settings <Settings width={25} />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Link
          className="w-full h-14 flex items-center justify-start text-lg rounded-lg px-4 bg-slate-700/50 backdrop-blur-md"
          href="/settings/editpassword"
        >
          Edit password
        </Link>
        <Link
          className="w-full h-14 flex items-center justify-start text-lg rounded-lg px-4 bg-slate-700/50 backdrop-blur-md"
          href="/settings/editdetails"
        >
          Edit profile details
        </Link>
      </div>
    </>
  );
}
