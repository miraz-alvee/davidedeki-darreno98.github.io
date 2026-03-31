"use client";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import { LuPhoneCall, LuClipboardList, LuMessageSquare, LuUsers, LuTrendingUp } from "react-icons/lu";
import { AiOutlineBarChart } from "react-icons/ai";


const stats = [
  { label: "Total Calls", value: "2,847", icon: <LuPhoneCall size={22} /> },
  { label: "Bookings Made", value: "892", icon: <LuClipboardList size={22} /> },
  { label: "Chat Sessions", value: "1,456", icon: <LuMessageSquare size={22} /> },
  { label: "Leads Captured", value: "342", icon: <LuUsers size={22} /> },
  { label: "Conversion Rate", value: "68%", icon: <LuTrendingUp size={22} /> },
  { label: "Avg Call Duration", value: "3m 24s", icon: <AiOutlineBarChart size={22} /> },
];

const chartData = [
  { day: "Sun", calls: 320 },
  { day: "Mon", calls: 480 },
  { day: "Tue", calls: 600 },
  { day: "Wed", calls: 420 },
  { day: "Thu", calls: 510 },
  { day: "Fri", calls: 210 },
  { day: "Sat", calls: 390 },
];

function Analytics() {
  return (
    <div className="p-4 lg:p-8 font-sans">

      {/* Stat Cards — 3 columns x 2 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-400 shrink-0">
              {stat.icon}
            </div>
            <div>
              <p className="text-indigo-500 text-3xl font-bold leading-none mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 pt-6 pb-4">
        <h2 className="text-gray-900 text-xl font-bold mb-5">Call Volume — Last 7 Days</h2>
        <div className="border-t border-gray-100 pt-4">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData} barSize={60} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 14 }}
              />
              <Bar dataKey="calls" radius={[6, 6, 0, 0]}>
                {chartData.map((_, index) => (
                  <Cell key={index} fill="#a5b4fc" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}

export default Analytics;