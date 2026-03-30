"use client";
import Link from "next/link";
import type { MenuProps } from "antd";
import {
  MdOutlineDashboard,
  MdOutlineArrowForwardIos,
  MdPayment,
} from "react-icons/md";
import { BsOpenai } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { RxFileText } from "react-icons/rx";
import { TbMessageChatbot } from "react-icons/tb";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

export const getMenuItems = (selectedKey: string): MenuProps["items"] => [
  {
    key: "/overview",
    icon: <MdOutlineDashboard size={20} />,
    label: (
      <Link
        href="/overview"
        className="text-[18px] font-medium flex justify-between"
      >
        <span>Overview</span>
        {selectedKey === "/overview" && (
          <MdOutlineArrowForwardIos className="mt-3.25" size={20} />
        )}
      </Link>
    ),
  },
  {
    key: "/ai-receptionist",
    icon: <BsOpenai size={20} />,
    label: (
      <Link
        href="/ai-receptionist"
        className="text-[18px] font-medium flex justify-between"
      >
        <span>AI Receptionist</span>
        {selectedKey === "/ai-receptionist" && (
          <MdOutlineArrowForwardIos className="mt-3.25" size={20} />
        )}
      </Link>
    ),
  },
  {
    key: "/calls",
    icon: <FiPhoneCall size={20} />,
    label: (
      <Link
        href="/calls"
        className="text-[18px] font-medium flex justify-between"
      >
        <span>Calls</span>
        {selectedKey === "/calls" && (
          <MdOutlineArrowForwardIos className="mt-3.25" size={20} />
        )}
      </Link>
    ),
  },
  {
    key: "/apointments",
    icon: <RxFileText size={20} />,
    label: (
      <Link
        href="/apointments"
        className="text-[18px] font-medium flex justify-between"
      >
        <span>Apointments</span>
        {selectedKey === "/apointments" && (
          <MdOutlineArrowForwardIos className="mt-3.25" size={20} />
        )}
      </Link>
    ),
  },
  {
    key: "/chatbot",
    icon: <TbMessageChatbot size={20} />,
    label: (
      <Link
        href="/chatbot"
        className="text-[18px] font-medium flex justify-between"
      >
        <span>Chatbot</span>
        {selectedKey === "/chatbot" && (
          <MdOutlineArrowForwardIos className="mt-3.25" size={20} />
        )}
      </Link>
    ),
  },
  {
    key: "/analytics",
    icon: <LuChartNoAxesCombined size={20} />,
    label: (
      <Link
        href="/analytics"
        className="text-[18px] font-medium flex justify-between"
      >
        <span>Analytics</span>
        {selectedKey === "/analytics" && (
          <MdOutlineArrowForwardIos className="mt-3.25" size={20} />
        )}
      </Link>
    ),
  },
  {
    key: "/team",
    icon: <FaUsers size={20} />,
    label: (
      <Link
        href="/team"
        className="text-[18px] font-medium flex justify-between"
      >
        <span>Team</span>
        {selectedKey === "/team" && (
          <MdOutlineArrowForwardIos className="mt-3.25" size={20} />
        )}
      </Link>
    ),
  },
  {
    key: "/billing",
    icon: <MdPayment size={20} />,
    label: (
      <Link
        href="/billing"
        className="text-[18px] font-medium flex justify-between"
      >
        <span>Billing</span>
        {selectedKey === "/billing" && (
          <MdOutlineArrowForwardIos className="mt-3.25" size={20} />
        )}
      </Link>
    ),
  },
  {
    key: "/settings",
    icon: <IoSettingsSharp size={20} />,
    label: (
      <Link
        href="/settings"
        className="text-[18px] font-medium flex justify-between"
      >
        <span>Settings</span>
        {selectedKey === "/settings" && (
          <MdOutlineArrowForwardIos className="mt-3.25" size={20} />
        )}
      </Link>
    ),
  },
];
