import React, { useState } from "react";
import { Switch, ConfigProvider } from "antd";

const notifItems = [
  "Email me when a call is missed",
  "Email me when an appointment is booked",
  "Email me when a call is escalated",
  "Weekly analytics report",
];

function Notifications() {
  const [states, setStates] = useState<boolean[]>(notifItems.map(() => true));

  const toggle = (idx: number) => {
    setStates((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <h2 className="text-gray-900 text-base font-bold mb-5">Notification Preferences</h2>
      <div className="flex flex-col">
        {notifItems.map((label, idx) => (
          <div
            key={label}
            className={`flex items-center justify-between py-4 ${idx < notifItems.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            <span className="text-gray-800 text-sm">{label}</span>
            <ConfigProvider
              theme={{
                token: { colorPrimary: "#3b82f6" },
              }}
            >
              <Switch checked={states[idx]} onChange={() => toggle(idx)} />
            </ConfigProvider>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;