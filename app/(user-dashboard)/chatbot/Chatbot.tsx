"use client";
import React, { useState } from "react";
import Conversations, { Conversation } from "./_components/Conversations";
import ChatBox from "./_components/ChatBox";

const conversations: Conversation[] = [
  { id: 1, name: "James Bond", preview: "Thank u ! See you never", channel: "Web", time: "2 min ago" },
  { id: 2, name: "John Doe", preview: "Thank u ! See you never", channel: "WhatsApp", time: "2 min ago", unread: 2 },
  { id: 3, name: "Iman Imon", preview: "Thank u ! See you never", channel: "WhatsApp", time: "2 min ago" },
  { id: 4, name: "Lothario Alvee", preview: "Thank u ! See you never", channel: "WhatsApp", time: "2 min ago" },
  { id: 5, name: "James Bond", preview: "Thank u ! See you never", channel: "WhatsApp", time: "2 min ago" },
];

function Chatbot() {
  const [activeId, setActiveId] = useState<number>(1);
  const [showChat, setShowChat] = useState(false);

  const activeConvo = conversations.find((c) => c.id === activeId) ?? conversations[0];

  const handleSelect = (id: number) => {
    setActiveId(id);
    setShowChat(true);
  };

  return (
    <div className="p-1 lg:p-4 font-sans h-[calc(94vh-64px)] lg:h-[calc(90vh-64px)]">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full flex">

        {/* Sidebar */}
        <div
          className={`w-full lg:w-[380px] lg:border-r border-gray-100 shrink-0 flex flex-col
            ${showChat ? "hidden lg:flex" : "flex"}`}
        >
          <Conversations
            conversations={conversations}
            activeId={activeId}
            onSelect={handleSelect}
          />
        </div>

        {/* Chat Panel */}
        <div
          className={`flex-1 flex flex-col min-w-0 min-h-0
            ${showChat ? "flex" : "hidden lg:flex"}`}
        >
          <ChatBox conversation={activeConvo} onBack={() => setShowChat(false)} />
        </div>

      </div>
    </div>
  );
}

export default Chatbot;