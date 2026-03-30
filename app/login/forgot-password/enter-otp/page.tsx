"use client";

import { useState } from "react";
import Image from "next/image";
import authLogo from "@/public/images/auth-logo.png";
import Link from "next/link";

export default function EnterOtpPage() {
     const [otp, setOtp] = useState("");

  return (
    <div className="min-h-screen bg-[#FBFAFE] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Card */}
      <form
        className="bg-white w-full rounded-[24px] shadow-[0_8px_48px_0_rgba(0,0,0,0.33)] 
          max-w-85 xs:max-w-[400px] sm:max-w-125 md:max-w-150 lg:max-w-162.5
          px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14"
        style={{ minHeight: "auto" }}
      >
        {/* Logo */}
        <div className="flex justify-center -mt-8 py-3">
          <Image
            src={authLogo}
            alt="Assist Connect"
            className="h-10 sm:h-20 w-auto object-contain"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-center font-medium text-[22px] sm:text-[26px] md:text-[36px] text-[#111111] mb-2 leading-tight">
          Reset your password
        </h1>
        <p className="font-poppins text-center font-normal text-[13px] sm:text-[24px] md:text-[15px] text-[#444444] mb-7 sm:mb-8">
          OTP will be send to your email 
        </p>

        {/* Email Field */}
        <div className="mb-4">
          <div className="flex items-center border border-[#CCCCCC] rounded-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white focus-within:border-[#5B5BD6] transition-colors">
            <span className="text-[13px] sm:text-[16px] font-medium text-[#444444] whitespace-nowrap mr-3 pr-10 border-r border-[#CCCCCC]">
              OTP
            </span>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder=" Enter your OTP"
              className="flex-1 text-[13px] sm:text-[14px] text-[#222222] placeholder-[#AAAAAA] outline-none bg-transparent min-w-0"
            />
          </div>
        </div>

        {/* Login Button */}
        <Link href="/login/forgot-password/enter-otp/update-password">
          <button
            type="button"
            className="w-full mt-3 bg-[#5B5BD6] hover:bg-[#4a4ac4] active:bg-[#3d3db8] text-white font-bold text-[15px] sm:text-[16px] rounded-full py-2.5 sm:py-3.5 transition-colors duration-200 shadow-sm"
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  )
}
