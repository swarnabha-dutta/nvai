'use client';

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#ececf2] text-white relative"
        >
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full"
          >
            <Image
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
              className="rotate-180 " src={assets.menu_icon} alt="" />
            <Image className="opacity-70" src={assets.chat_icon} alt="" />
          </div>

          {messages.length === 0 ? (
            <>
              <div>
                <Image src={assets.nla_logo_icon} alt="" className="h-16" />
                <p className="text-2xl font-medium ">Hi,I'am Neurovision</p>
              </div>
            </>
          ) :
            (<div></div>)
          }
        </div>
      </div>
    </div>
  );
}
