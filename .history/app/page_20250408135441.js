'use client';

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
          </div>
        </div>
      </div>
    </div>
  );
}
