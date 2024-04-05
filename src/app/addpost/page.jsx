"use client";

import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Input, Leftbar, Navbar, TextArea } from "@/components";
import { Button } from "@/components/ui/button";

export default function AddPostPage() {
  const handleSubmit = () => {};

  return (
    <>
      <Navbar />
      <div className="w-full min-h-[89vh] flex items-center justify-center lg:items-stretch md:items-stretch">
        <div className="w-2/12 hidden lg:block md:block">
          <Leftbar />
        </div>
        <div className="w-full lg:w-10/12 md:w-10/12 h-[calc(100vh-56px)] p-4 overflow-hidden">
          <ScrollArea className="h-[calc(100vh-56px)] w-full">
            <div className="flex flex-col justify-center items-center h-full w-full">
              <form
                onSubmit={handleSubmit}
                className="w-full h-full flex flex-col items-start justify-center py-10 lg:p-10 md:p-10"
              >
                <div className="flex flex-col gap-2 w-full h-full pb-5">
                  <Input
                    label="Image:"
                    type="file"
                    description="Upload your image"
                  />
                  <Input label="Title:" description="Enter your post title" />
                  <Input label="Tag:" description="Enter the genre" />
                  {/* TODO: Textarea  */}
                  <TextArea
                    label="Content:"
                    description="Write your content here"
                  />
                </div>
                <Button type="submit" variant="wiz" size="lg">
                  Post
                </Button>
              </form>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
