"use client";

import { Input, TextArea } from "@/components";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import React from "react";

export default function SignupPage() {
  const handelSubmit = () => {};

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <ScrollArea className="w-full min-h-screen flex flex-col justify-center lg:justify-center md:justify-start items-center gap-1 lg:p-4 md:p-4">
        <div className="h-full w-full flex flex-col items-center justify-center p-10 rounded-lg">
          <h1 className="text-2xl font-semibold pb-5">Sign up</h1>
          <div className="w-full">
            <form
              onSubmit={handelSubmit}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <div className="pb-5 flex flex-col items-center justify-center">
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 md:gap-2">
                  <Input label="fullname" description="Enter your fullname" />
                  <Input label="username" description="Enter your username" />
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 md:gap-2">
                  <Input label="email" description="Enter your email address" />
                  <Input label="password" description="Enter your password" />
                </div>
                <TextArea
                  rows="2"
                  label="bio"
                  description="Set a profile bio"
                />
              </div>
              <Button type="submit" size="lg">
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
