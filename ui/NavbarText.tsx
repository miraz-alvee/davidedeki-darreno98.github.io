"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const pageData: Record<string, { title: string; subtitle: string }> = {
  "/overview": {
    title: "Dashboard",
    subtitle: "Welcome back! Here's what's happening today.",
  },
  "/ai-receptionist": {
    title: "AI Receptionist",
    subtitle: "Configure your AI voice agent's personality and behavior.",
  },
  "/calls": {
    title: "Call Logs",
    subtitle: "View and manage all inbound and outbound calls.",
  },
  "/apointments": {
    title: "Appointments",
    subtitle: "Manage bookings made by your AI receptionist.",
  },
  "/chatbot": {
    title: "Chatbot",
    subtitle: "View conversations from your website and WhatsApp chatbot.",
  },
  "/analytics": {
    title: "Analytics",
    subtitle: "Track your AI assistant's performance and ROI.",
  },
  "/team": {
    title: "Team",
    subtitle: "Manage your team members and their permissions.",
  },
  "/billing": {
    title: "Billing",
    subtitle: "Manage your subscription and payment details.",
  },
  "/settings": {
    title: "Settings",
    subtitle: "Manage your business profile and integrations.",
  },
};

function NavbarText() {
  const path = usePathname() || "/";
  const [selectedKey, setSelectedKey] = useState<string>(path);

  useEffect(() => {
    setSelectedKey(path);
  }, [path]);

  const currentPage = pageData[selectedKey] || {
    title: "Dashboard",
    subtitle: "Welcome!",
  };

  return (
    <div className="ml-1 lg:ml-5">
      <h1 className="text-[22px] lg:text-[28px] font-semibold">
        {currentPage.title}
      </h1>
      <h6 className="text-[14px] hidden lg:block">{currentPage.subtitle}</h6>
    </div>
  );
}

export default NavbarText;
