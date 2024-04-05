"use client";

import { Input } from "@/components";
import { Button } from "@/components/ui/button";
import React from "react";

export default function LoginPage() {
  const handelSubmit = () => {};

  return (
    <div>
      <div className="h-[calc(100vh-56px)] w-full flex items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center gap-1 p-4">
          <div className="flex flex-col items-center justify-center p-10 rounded-lg">
            <h1 className="text-2xl font-semibold pb-5">Login</h1>
            <div className="w-full">
              <form
                onSubmit={handelSubmit}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <div className="pb-5 flex flex-col items-center justify-center">
                  <Input label="username" description="Enter your username" />
                  <Input label="email" description="Enter your email address" />
                  <Input label="password" description="Enter your password" />
                </div>
                <Button type="submit" size="lg">
                  Login
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
