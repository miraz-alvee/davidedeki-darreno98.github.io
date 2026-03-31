"use client";
import { Progress, ConfigProvider } from "antd";
import { MdCheckCircle, MdCreditCard } from "react-icons/md";

const features = [
  "3 AI Voice Agents",
  "500 Calls/month",
  "WhatsApp + Web Chatbot",
  "Priority Support",
];

function Billing() {
  return (
    <div className="p-4 lg:p-8 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Current Plan */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-gray-900 text-lg font-bold">Current Plan</h2>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-500 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              Professional
            </span>
          </div>

          {/* Price */}
          <div>
            <p className="text-gray-900 text-4xl font-bold">
              $149<span className="text-gray-400 text-lg font-normal">/mo</span>
            </p>
            <p className="text-gray-400 text-sm mt-1">Renews on April 1, 2026</p>
          </div>

          {/* Features */}
          <div>
            <p className="text-gray-700 text-sm font-semibold mb-3">Includes :</p>
            <ul className="flex flex-col gap-2.5">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <MdCheckCircle className="text-indigo-400 shrink-0" size={20} />
                  <span className="text-gray-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <button className="w-full mainButton text-white font-semibold text-sm py-3.5 rounded-xl transition-colors mt-auto">
            Upgrade Plan
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">

          {/* Payment Method */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-gray-900 text-lg font-bold mb-4">Payment Method</h2>
            <div className="border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3 mb-4">
              <MdCreditCard className="text-gray-400" size={22} />
              <div>
                <p className="text-gray-800 text-sm font-medium tracking-widest">•••• •••• •••• 4242</p>
                <p className="text-gray-400 text-xs mt-0.5">Expires 12/27</p>
              </div>
            </div>
            <button className="text-indigo-500 text-sm font-medium hover:underline">
              Update Payment Method
            </button>
          </div>

          {/* Usage This Month */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-gray-900 text-lg font-bold mb-5">Usage This Month</h2>

            <ConfigProvider
              theme={{
                components: {
                  Progress: {
                    defaultColor: "#6366f1",
                    remainingColor: "#e5e7eb",
                  },
                },
              }}
            >
              {/* Calls */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm">Calls</span>
                  <span className="text-gray-500 text-sm">347 / 500</span>
                </div>
                <Progress percent={Math.round((347 / 500) * 100)} showInfo={false} strokeColor="#818cf8" railColor="#e5e7eb" strokeLinecap="round" />
              </div>

              {/* Chat Sessions */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm">Chat Sessions</span>
                  <span className="text-gray-500 text-sm">1,240 / 5,000</span>
                </div>
                <Progress percent={Math.round((1240 / 5000) * 100)} showInfo={false} strokeColor="#4f46e5" railColor="#e5e7eb" strokeLinecap="round" />
              </div>
            </ConfigProvider>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Billing;