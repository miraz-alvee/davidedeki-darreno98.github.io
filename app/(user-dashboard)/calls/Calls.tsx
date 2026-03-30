"use client";
import React from "react";
import { Table, ConfigProvider } from "antd";
import type { ColumnsType } from "antd/es/table";
import { LuPhone, LuPhoneMissed, LuPhoneOutgoing } from "react-icons/lu";

interface CallRecord {
  id: number;
  name: string;
  time: string;
  reason: string;
  duration: string;
  status: "Completed" | "Missed" | "Escalated";
}

const calls: CallRecord[] = [
  {
    id: 1,
    name: "James Bond",
    time: "Today 2:30 PM ·",
    reason: "Appointment booking",
    duration: "3:42",
    status: "Completed",
  },
  {
    id: 2,
    name: "Mike Tyson",
    time: "Today 2:20 PM ·",
    reason: "General inquiry",
    duration: "0:00",
    status: "Missed",
  },
  {
    id: 3,
    name: "Lisa Chen",
    time: "Today 2:10 PM ·",
    reason: "Reschedule appointment",
    duration: "5:42",
    status: "Completed",
  },
  {
    id: 4,
    name: "Tom Wilson",
    time: "Today 2:00 PM ·",
    reason: "Billing complaint",
    duration: "3:42",
    status: "Escalated",
  },
  {
    id: 5,
    name: "James Bond",
    time: "Today 2:30 PM ·",
    reason: "Appointment booking",
    duration: "3:42",
    status: "Completed",
  },
  {
    id: 6,
    name: "James Bond",
    time: "Today 2:30 PM ·",
    reason: "Appointment booking",
    duration: "3:42",
    status: "Completed",
  },
];

const statusConfig = {
  Completed: {
    badge: "border border-green-300 bg-green-50 text-green-600",
    dot: "bg-green-500",
  },
  Missed: {
    badge: "border border-red-300 bg-red-50 text-red-500",
    dot: "bg-red-500",
  },
  Escalated: {
    badge: "border border-yellow-300 bg-yellow-50 text-yellow-500",
    dot: "bg-yellow-400",
  },
};

const StatusBadge: React.FC<{ status: keyof typeof statusConfig }> = ({
  status,
}) => {
  const cfg = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${cfg.badge}`}
    >
      <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
      {status}
    </span>
  );
};

const columns: ColumnsType<CallRecord> = [
  {
    title: <span className="text-gray-500 text-sm font-semibold">Caller</span>,
    dataIndex: "name",
    key: "name",
    align: "center",
    render: (_, record) => (
      <div>
        <p className="text-gray-800 text-sm font-medium">{record.name}</p>
        <p className="text-gray-400 text-xs mt-0.5">{record.time}</p>
      </div>
    ),
  },
  {
    title: <span className="text-gray-500 text-sm font-semibold">Reason</span>,
    dataIndex: "reason",
    key: "reason",
    align: "center",
    render: (val) => <span className="text-gray-600 text-sm">{val}</span>,
    responsive: ["md"],
  },
  {
    title: (
      <span className="text-gray-500 text-sm font-semibold">Duration</span>
    ),
    dataIndex: "duration",
    key: "duration",
    align: "center",
    render: (val) => <span className="text-gray-600 text-sm">{val}</span>,  },
  {
    title: <span className="text-gray-500 text-sm font-semibold">Status</span>,
    dataIndex: "status",
    key: "status",
    align: "center",
    render: (val) => <StatusBadge status={val} />,
  },
];

function Calls() {
  return (
    <div className="p-4 lg:p-8 font-sans">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 mb-8">
        <div className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4 border border-gray-100 shadow-sm">
          <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-green-500 text-2xl shrink-0">
            <LuPhone />
          </div>
          <div>
            <p className="text-green-500 text-3xl font-bold leading-none mb-1">
              20
            </p>
            <p className="text-gray-400 text-sm">Answered</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4 border border-gray-100 shadow-sm">
          <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-red-400 text-2xl shrink-0">
            <LuPhoneMissed />
          </div>
          <div>
            <p className="text-red-400 text-3xl font-bold leading-none mb-1">
              16
            </p>
            <p className="text-gray-400 text-sm">Missed</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4 border border-gray-100 shadow-sm">
          <div className="w-14 h-14 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-400 text-2xl shrink-0">
            <LuPhoneOutgoing />
          </div>
          <div>
            <p className="text-yellow-400 text-3xl font-bold leading-none mb-1">
              10
            </p>
            <p className="text-gray-400 text-sm">Outbound</p>
          </div>
        </div>
      </div>

      {/* Antd Table with ConfigProvider theme */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <Table
          columns={columns}
          dataSource={calls}
          rowKey="id"
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
}

export default Calls;
