"use client";
import React, { useState } from "react";
import BusinessInfo from "./_components/BusinessInfo";
import Integrations from "./_components/Integrations";
import Notifications from "./_components/Notifications";

type Tab = "Business Info" | "Integrations" | "Notifications";
const tabs: Tab[] = ["Business Info", "Integrations", "Notifications"];

function Settings() {
  const [active, setActive] = useState<Tab>("Business Info");

  return (
    <div className="p-4 lg:p-8 font-sans">
      {/* Tab Bar */}
      <div className="flex items-center gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`cursor-pointer whitespace-nowrap px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
              active === tab
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-500 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {active === "Business Info" && <BusinessInfo />}
      {active === "Integrations" && <Integrations />}
      {active === "Notifications" && <Notifications />}
    </div>
  );
}

export default Settings;