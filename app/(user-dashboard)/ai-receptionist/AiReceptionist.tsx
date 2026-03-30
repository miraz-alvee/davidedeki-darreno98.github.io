import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { LuBot, LuMic, LuBrain, LuVolume2, LuPhone } from "react-icons/lu";

interface InfoRowProps {
  label: string;
  value?: React.ReactNode;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3">
    <span className="text-gray-400 text-sm">{label}</span>
    <span className="text-gray-900 text-sm font-medium">{value}</span>
  </div>
);

const ActiveBadge = () => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-300 bg-green-50 text-green-600 text-xs font-bold">
    <span className="w-2 h-2 rounded-full bg-green-500" />
    Active
  </span>
);

const EnableBadge = () => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-300 bg-green-50 text-green-600 text-xs font-bold">
    <span className="w-2 h-2 rounded-full bg-green-500" />
    Enable
  </span>
);

const SectionHeader: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}> = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-400 text-xl shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-indigo-500 font-bold text-base">{title}</p>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
  </div>
);

function AiReceptionist() {
  return (
    <div className="p-4 lg:px-8 lg:py-2 font-sans">
      {/* Edit Configuration Button */}
      <div className="flex justify-end mb-6">
        <button className="flex items-center gap-2 mainButton text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors">
          <MdOutlineEdit size={18} />
          Edit Configuration
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Agent Profile */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <SectionHeader
            icon={<LuBot />}
            title="Agent Profile"
            subtitle="Basic agent configuration"
          />
          <div className="flex flex-col gap-3">
            <InfoRow label="Agent Name" value="James Bond" />
            <InfoRow label="Status" value={<ActiveBadge />} />
            <InfoRow label="Language" value="English" />
            <InfoRow
              label="Greetings"
              value="Hello! Thank you for calling..."
            />
          </div>
        </div>

        {/* Voice Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <SectionHeader
            icon={<LuMic />}
            title="Voice Settings"
            subtitle="Voice model & personality"
          />
          <div className="flex flex-col gap-3">
            <InfoRow label="Voice Settings" value="Female — Natural" />
            <InfoRow label="Speed" value="1.0x" />
            <InfoRow label="Personality" value="Professional & Friendly" />
            <InfoRow label="Provider" value="VAPI" />
          </div>
        </div>

        {/* Business Rules */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <SectionHeader
            icon={<LuBrain />}
            title="Business Rules"
            subtitle="Scripts & escalation logic"
          />
          <div className="flex flex-col gap-3">
            <InfoRow label="Auto-booking" value={<EnableBadge />} />
            <InfoRow label="Escalation" value="After 2 failed attempts" />
            <InfoRow label="Lead Qualification" value={<EnableBadge />} />
          </div>
        </div>

        {/* Test Agent */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
          <SectionHeader
            icon={<LuVolume2 />}
            title="Test Agent"
            subtitle="Preview your AI assistant"
          />
          <div className="flex flex-col items-center justify-center flex-1 gap-4 py-4">
            <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-300 text-3xl">
              <LuPhone />
            </div>
            <p className="text-gray-400 text-sm">
              Click to simulate a test call
            </p>
            <button className="border-2 border-indigo-500 text-indigo-600 font-bold text-sm px-10 py-3 rounded-xl hover:bg-indigo-50 transition-colors">
              Start Test Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiReceptionist;
