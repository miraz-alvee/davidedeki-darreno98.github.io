"use client";
import React from "react";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { Avatar, Image } from "antd";
import { IoMdNotificationsOutline } from "react-icons/io";

const UserDashboardHeader = () => {
  return (
    <div className="flex items-center gap-x-3 lg:gap-x-7 justify-end mr-4 lg:mr-10">
      <IoMdNotificationsOutline className="border border-gray-300! hover:border-[#6161FF]! w-10! h-10! lg:w-12.5! lg:h-12.5! rounded-full p-1 cursor-pointer" />

      <Link href="/settings" className="flex  items-center gap-x-3">
        {1 === 1 ? (
          <Avatar
            className="border border-gray-300! hover:border-[#6161FF]! w-10! h-10! lg:w-12.5! lg:h-12.5!"
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"
          />
        ) : (
          <FaRegUserCircle
            style={{
              clipPath: "circle()",
              width: 48,
              height: 48,
            }}
          />
        )}
      </Link>
    </div>
  );
};

export default UserDashboardHeader;
