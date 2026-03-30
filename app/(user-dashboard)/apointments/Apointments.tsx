"use client";
import React from "react";
import { Table, ConfigProvider, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { LuPhone, LuPhoneOutgoing, LuPlus } from "react-icons/lu";

interface CallRecord {
  id: number;
  name: string;
  time: string;
  date: string;
  reason: string;
  duration: string;
  status: "Confirmed" | "Pending" | "Escalated";
}

const calls: CallRecord[] = [
  {
    id: 1,
    name: "James Bond",
    time: "2:30 PM",
    date: "Today",
    reason: "Appointment booking",
    duration: "3:42",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Mike Tyson",
    time: "2:20 PM",
    date: "Today",
    reason: "General inquiry",
    duration: "0:00",
    status: "Pending",
  },
  {
    id: 3,
    name: "Lisa Chen",
    time: "2:10 PM",
    date: "Today",
    reason: "Reschedule appointment",
    duration: "5:42",
    status: "Confirmed",
  },
  {
    id: 4,
    name: "Tom Wilson",
    time: "2:00 PM",
    date: "Today",
    reason: "Billing complaint",
    duration: "3:42",
    status: "Pending",
  },
  {
    id: 5,
    name: "James Bond",
    time: "2:30 PM",
    date: "Today",
    reason: "Appointment booking",
    duration: "3:42",
    status: "Confirmed",
  },
  {
    id: 6,
    name: "James Bond",
    time: "2:30 PM",
    date: "Today",
    reason: "Appointment booking",
    duration: "3:42",
    status: "Confirmed",
  },
  {
    id: 7,
    name: "Lisa Chen",
    time: "2:10 PM",
    date: "Today",
    reason: "Reschedule appointment",
    duration: "5:42",
    status: "Confirmed",
  },
  {
    id: 8,
    name: "Tom Wilson",
    time: "2:00 PM",
    date: "Today",
    reason: "Billing complaint",
    duration: "3:42",
    status: "Pending",
  },
  {
    id: 9,
    name: "James Bond",
    time: "2:30 PM",
    date: "Today",
    reason: "Appointment booking",
    duration: "3:42",
    status: "Confirmed",
  },
  {
    id: 10,
    name: "James Bond",
    time: "2:30 PM",
    date: "Today",
    reason: "Appointment booking",
    duration: "3:42",
    status: "Confirmed",
  },
];

const statusConfig = {
  Confirmed: {
    badge: "border border-green-300 bg-green-50 text-green-600",
    dot: "bg-green-500",
  },
  Pending: {
    badge: "border border-yellow-300 bg-yellow-50 text-yellow-500",
    dot: "bg-yellow-400",
  },
  Escalated: {
    badge: "border border-red-300 bg-red-50 text-red-500",
    dot: "bg-red-500",
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
    title: <span className="text-gray-500 text-sm font-semibold">Name</span>,
    dataIndex: "name",
    key: "name",
    align: "center",
    render: (_, record) => (
      <div>
        <p className="text-gray-800 text-sm font-medium">{record.name}</p>
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
    title: <span className="text-gray-500 text-sm font-semibold">Day</span>,
    dataIndex: "date",
    key: "date",
    align: "center",
    render: (val) => <span className="text-gray-600 text-sm">{val}</span>,
  },
  {
    title: <span className="text-gray-500 text-sm font-semibold">Time</span>,
    dataIndex: "time",
    key: "time",
    align: "center",
    render: (val) => <span className="text-gray-600 text-sm">{val}</span>,
    responsive: ["md"],
  },
  {
    title: <span className="text-gray-500 text-sm font-semibold">Status</span>,
    dataIndex: "status",
    key: "status",
    align: "center",
    render: (val) => <StatusBadge status={val} />,
  },
];

function Apointments() {
  return (
    <div className="p-4 lg:p-8 font-sans">
      <div className="flex justify-end mb-4">
        <Button
          className="mainButton"
          icon={<LuPlus />}
          type="primary"
          size="large"
        >
          New Appointment
        </Button>
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

export default Apointments;
