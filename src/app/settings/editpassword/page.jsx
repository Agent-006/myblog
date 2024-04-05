"use client";

import React from "react";

import { Input } from "@/components";
import { Button } from "@/components/ui/button";

export default function EditPasswordPage() {
  const handleSubmit = () => {};

  return (
    <div className="flex flex-col justify-start items-center w-full gap-10">
      <div className="w-full flex flex-col items-start justify-cemter text-2xl font-semibold rounded-lg lg:px-10 md:px-10 mt-2">
        <h1 className="w-full h-16 flex items-center justify-between text-2xl font-semibold">
          Password
        </h1>
        <p className="text-sm text-slate-400 pb-2">
          Please enter your current password to change your password.
        </p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <form
          className="w-full h-full items-start justify-center py-10 lg:p-10 md:p-10"
          onSubmit={handleSubmit}
        >
          <div className="pb-3">
            <Input label="Current password" type="password" />
            <Input
              label="New password"
              type="password"
              description="Your new passwrod must be more than 8 characters."
            />
            <Input label="Confirm new password" type="password" />
          </div>
          <Button type="submit">Confirm</Button>
        </form>
      </div>
    </div>
  );
}
