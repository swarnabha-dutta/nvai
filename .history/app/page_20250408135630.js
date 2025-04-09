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
        <div>
          <div>
            <Image className="rotate-180 " src={assets.menu_icon} alt="" />
            <Image className="opacity-70" src={assets.menu_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
