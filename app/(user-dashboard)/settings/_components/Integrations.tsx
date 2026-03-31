import React from "react";

const integrations = [
  { name: "VAPI (Voice AI)", desc: "Connect your VAPI account for AI voice calls." },
  { name: "OpenAI", desc: "Connect OpenAI for chatbot intelligence" },
  { name: "WhatsApp Business", desc: "Enable WhatsApp messaging channel." },
  { name: "Google Calendar", desc: "Sync appointments with Google Calendar." },
  { name: "Stripe", desc: "Connect Stripe for payment processing." },
];

function Integrations() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2">
      {integrations.map((item, idx) => (
        <div
          key={item.name}
          className={`flex items-center justify-between px-4 py-5 ${idx < integrations.length - 1 ? "border-b border-gray-100" : ""}`}
        >
          <div>
            <p className="text-gray-900 text-sm font-bold">{item.name}</p>
            <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
          </div>
          <button className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-sky-400 text-sm font-medium hover:bg-sky-100 transition-colors shrink-0 ml-4">
            <span className="w-2 h-2 rounded-full bg-sky-300" />
            Connect
          </button>
        </div>
      ))}
    </div>
  );
}

export default Integrations;