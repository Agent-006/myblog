import { Rightbar, PostCard } from "@/components";

import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <>
      <div className="w-full lg:w-7/12 md:w-7/12">
        <ScrollArea className="h-[calc(100vh-56px)] w-full">
          <div className="p-8">
            <h4 className="mb-4 text-lg text-slate-200 font-semibold leading-none">
              All Blogs
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </ScrollArea>
      </div>
      <div className="w-3/12 hidden lg:block md:block">
        <Rightbar />
      </div>
    </>
  );
}
