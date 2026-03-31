import React, { useState } from "react";
import { Input, ConfigProvider, message } from "antd";

const hours = [
  { day: "Monday", time: "9:00 AM — 5:00 PM" },
  { day: "Tuesday", time: "9:00 AM — 5:00 PM" },
  { day: "Wednesday", time: "9:00 AM — 5:00 PM" },
  { day: "Thursday", time: "9:00 AM — 5:00 PM" },
  { day: "Friday", time: "9:00 AM — 5:00 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

interface FormState {
  businessName: string;
  industry: string;
  phoneNumber: string;
  email: string;
  address: string;
}

const LabeledInput: React.FC<{
  label: string;
  value: string;
  onChange: (val: string) => void;
}> = ({ label, value, onChange }) => (
  <Input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    prefix={
      <div className="flex items-center gap-3 pr-1">
        <span className="text-gray-400 text-sm w-28 shrink-0">{label}</span>
        <div className="w-px h-5 bg-gray-200 shrink-0" />
      </div>
    }
    className="rounded-xl py-3 text-sm text-gray-800"
  />
);

function BusinessInfo() {
  const [form, setForm] = useState<FormState>({
    businessName: "Acme Dental",
    industry: "Dental Clinic",
    phoneNumber: "+44 20 1234 5678",
    email: "info@acmedental.com",
    address: "123 High Street, London, UK",
  });

  const handleSave = () => {
    console.log("Business Profile Data:", form);
    message.success("Business profile updated successfully!");
  };

  const set = (key: keyof FormState) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  return (
    <ConfigProvider
      theme={{
        algorithm: undefined,
        token: {
          colorBgBase: "#ffffff",
          colorTextBase: "#111827",
          borderRadius: 12,
          colorBorder: "#e5e7eb",
          colorPrimaryHover: "#6366f1",
        },
        components: {
          Input: {
            paddingBlock: 10,
            paddingInline: 16,
            borderRadius: 12,
            hoverBorderColor: "#6366f1",
            activeBorderColor: "#6366f1",
            colorBgContainer: "#ffffff",
          },
        },
      }}
    >
      <div className="flex flex-col gap-5">
        {/* Business Profile */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
          <h2 className="text-gray-900 text-base font-bold mb-5">
            Business Profile
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <LabeledInput
              label="Business Name"
              value={form.businessName}
              onChange={set("businessName")}
            />
            <LabeledInput
              label="Industry"
              value={form.industry}
              onChange={set("industry")}
            />
            <LabeledInput
              label="Phone Number"
              value={form.phoneNumber}
              onChange={set("phoneNumber")}
            />
            <LabeledInput
              label="Email"
              value={form.email}
              onChange={set("email")}
            />
            <div className="sm:col-span-2">
              <LabeledInput
                label="Address"
                value={form.address}
                onChange={set("address")}
              />
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <button
              onClick={handleSave}
              className="mainButton text-white text-sm font-semibold px-8 py-2.5 rounded-xl transition-colors"
            >
              Save
            </button>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
          <h2 className="text-gray-900 text-base font-bold mb-5">
            Operating Hours
          </h2>
          <div className="flex flex-col">
            {hours.map((h, idx) => (
              <div
                key={h.day}
                className={`flex items-center justify-between py-4 ${idx < hours.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <span className="text-gray-800 text-sm font-medium">
                  {h.day}
                </span>
                <span
                  className={`text-sm ${h.time === "Closed" ? "text-gray-400" : "text-gray-500"}`}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default BusinessInfo;
