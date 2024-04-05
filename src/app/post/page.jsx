import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import Image from "next/image";
import { Navbar } from "@/components";

export default function PostPage() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[89vh] flex items-center justify-center lg:items-stretch md:items-stretch py-10">
        <ScrollArea className="h-[calc(100vh-56px)] w-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-1 p-4">
            <div className="w-full flex items-center justify-center bg-slate-800 rounded-lg overflow-hidden">
              <Image
                objectFit="contain"
                width={400}
                height={720}
                src={"/assets/image/pexels-amaan-shaikh-19946465.jpg"}
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center bg-slate-800/50 backdrop-blur-md rounded-lg px-5 py-3">
              <div>
                <span className="font-semibold text-xl">Title: </span>
                <span className="font-light text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, recusandae!
                </span>
              </div>
              <div>
                <span className="text-sm text-slate-400 font-semibold">
                  Author:
                </span>

                <span className="font-light text-base"> Agent_006</span>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-center bg-slate-800/50 backdrop-blur-md rounded-lg px-5 py-3">
              <p className="font-light ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                obcaecati animi in autem ab esse explicabo eligendi perspiciatis
                consectetur amet, voluptas, magnam debitis praesentium? Nemo
                quia sunt et veniam eius maxime cum laboriosam velit minima sit,
                odit saepe quos ut consectetur, fugiat dolorum soluta debitis
                exercitationem maiores ad voluptates. Vero dolore deserunt
                dignissimos facilis perspiciatis voluptatum similique voluptates
                assumenda rem, cumque, itaque recusandae sapiente tempore
                quibusdam voluptatem at reprehenderit est, ducimus dolores iusto
                voluptas ratione labore consequatur! Mollitia vitae, quasi, modi
                quaerat reiciendis commodi quidem eaque illum explicabo
                similique sequi quas provident iure enim adipisci maiores hic
                esse magni, rerum numquam ipsa consequatur quos inventore. Error
                fuga aperiam cupiditate quas minus libero. Minus deserunt ipsam
                suscipit unde, ad nobis libero debitis deleniti soluta expedita
                possimus veritatis illum officiis sint recusandae? Sint vel
                itaque beatae ipsam reiciendis eos consectetur veritatis ea id
                possimus quisquam sequi, dolorem eius recusandae iste quibusdam
                accusantium.
              </p>
            </div>
            <div className="w-full flex flex-col items-start justify-center bg-slate-800/50 backdrop-blur-md rounded-lg px-5 py-3">
              tag
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
