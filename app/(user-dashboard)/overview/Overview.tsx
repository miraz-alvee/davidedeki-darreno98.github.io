import React from "react";
import { MdPhone, MdCalendarToday, MdChat, MdTrendingUp } from "react-icons/md";

interface CallRecord {
  id: number;
  name: string;
  time: string;
  duration: string;
  type: "Booking" | "Inquiry" | "Reschedule" | "Complaint";
  status: "Completed" | "Missed" | "Escalated";
}

const recentCalls: CallRecord[] = [
  {
    id: 1,
    name: "James Bond",
    time: "2 min ago",
    duration: "3:42",
    type: "Booking",
    status: "Completed",
  },
  {
    id: 2,
    name: "James Bond",
    time: "2 min ago",
    duration: "3:42",
    type: "Inquiry",
    status: "Missed",
  },
  {
    id: 3,
    name: "James Bond",
    time: "2 min ago",
    duration: "3:42",
    type: "Reschedule",
    status: "Completed",
  },
  {
    id: 4,
    name: "James Bond",
    time: "2 min ago",
    duration: "3:42",
    type: "Complaint",
    status: "Escalated",
  },
  {
    id: 5,
    name: "James Bond",
    time: "2 min ago",
    duration: "3:42",
    type: "Booking",
    status: "Completed",
  },
];

const statusConfig = {
  Completed: {
    badge: "border border-green-200 bg-green-50 text-green-600",
    dot: "bg-green-500",
  },
  Missed: {
    badge: "border border-red-200 bg-red-50 text-red-500",
    dot: "bg-red-500",
  },
  Escalated: {
    badge: "border border-yellow-200 bg-yellow-50 text-yellow-500",
    dot: "bg-yellow-400",
  },
};

const statCards = [
  { title: "Total Calls Today", value: "102", icon: <MdPhone size={22} /> },
  {
    title: "Appointments Booked",
    value: "18",
    icon: <MdCalendarToday size={22} />,
  },
  { title: "Chat Conversations", value: "48", icon: <MdChat size={22} /> },
  { title: "Conversion Rate", value: "50%", icon: <MdTrendingUp size={22} /> },
];

const StatusBadge: React.FC<{ status: keyof typeof statusConfig }> = ({
  status,
}) => {
  const cfg = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold ${cfg.badge}`}
    >
      <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
      {status}
    </span>
  );
};

function Overview() {
  return (
    <div className="p-4 lg:p-8 font-sans">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-5 mb-4 lg:mb-7">
        {statCards.map((card) => (
          <div
            key={card.title}
            className="bg-[#f0f1fa] rounded-2xl px-6 py-5 flex items-center justify-between shadow"
          >
            <div>
              <p className="text-gray-500 text-sm font-medium mb-2">
                {card.title}
              </p>
              <p className="text-[#6161FF] text-4xl font-bold leading-none">
                {card.value}
              </p>
            </div>
            <div className="bg-[#e0e2f5] rounded-xl flex items-center justify-center text-indigo-500 shrink-0 p-3">
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Calls */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="px-7 py-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Recent Calls</h2>
        </div>

        {recentCalls.map((call, idx) => (
          <div
            key={call.id}
            className={`flex items-center justify-between px-2 lg:px-7 py-4 ${
              idx < recentCalls.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            {/* Avatar + Info */}
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="w-11 h-11 rounded-full bg-[#e0e2f5] flex items-center justify-center text-indigo-500 font-bold text-base shrink-0">
                {call.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {call.name}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  {call.time} · {call.duration}
                </p>
              </div>
            </div>

            {/* Type + Status */}
            <div className="flex items-center gap-2 lg:gap-4">
              <span className="text-gray-500 text-sm font-medium">
                {call.type}
              </span>
              <StatusBadge status={call.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
