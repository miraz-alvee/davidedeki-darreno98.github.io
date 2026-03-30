"use client";

import { useState } from "react";
import Image from "next/image";
import authLogo from "@/public/images/auth-logo.png";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <div className="flex justify-center mb-4 sm:mb-6">
          <Image
            src={authLogo}
            alt="Assist Connect"
            className="h-10 sm:h-20 w-auto object-contain"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-center font-bold text-[22px] sm:text-[26px] md:text-[36px] text-[#111111] mb-2 leading-tight">
          Login to continue
        </h1>
        <p className="font-poppins text-center font-normal text-[13px] sm:text-[24px] md:text-[15px] text-[#444444] mb-7 sm:mb-8">
          Please share your email to take the next step forward
        </p>

        {/* Email Field */}
        <div className="mb-4">
          <div className="flex items-center border border-[#CCCCCC] rounded-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white focus-within:border-[#5B5BD6] transition-colors">
            <span className="text-[13px] sm:text-[16px] font-medium text-[#444444] whitespace-nowrap mr-3 pr-10 border-r border-[#CCCCCC]">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Enter your email address"
              className="flex-1 text-[13px] sm:text-[14px] text-[#222222] placeholder-[#AAAAAA] outline-none bg-transparent min-w-0"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <div className="flex items-center border border-[#CCCCCC] rounded-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white focus-within:border-[#5B5BD6] transition-colors">
            <span className="text-[13px] sm:text-[16px] font-medium text-[#444444] whitespace-nowrap mr-3 pr-3 border-r border-[#CCCCCC]">
              Password
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" Enter your password"
              className="flex-1 text-[13px] sm:text-[14px] text-[#222222] placeholder-[#AAAAAA] outline-none bg-transparent min-w-0"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 text-[#AAAAAA] hover:text-[#666666] transition-colors shrink-0"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                /* Eye open */
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s4-7.5 10.5-7.5S22.5 12 22.5 12s-4 7.5-10.5 7.5S1.5 12 1.5 12z" />
                  <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                /* Eye with slash */
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.94 17.94A10.07 10.07 0 0112 20c-6.5 0-10.5-8-10.5-8a17.34 17.34 0 014.56-5.44M9.9 4.24A9.12 9.12 0 0112 4c6.5 0 10.5 8 10.5 8a17.35 17.35 0 01-2.06 3.06M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between mb-6 sm:mb-7 px-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <div
              onClick={() => setRememberPassword(!rememberPassword)}
              className={`w-4 h-4 rounded-lg flex items-center justify-center shrink-0 border transition-colors cursor-pointer
                ${rememberPassword ? "bg-[#5B5BD6] border-[#5B5BD6]" : "bg-white border-[#CCCCCC]"}`}
            >
              {rememberPassword && (
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 4l2.5 2.5L9 1" />
                </svg>
              )}
            </div>
            <span className="text-[12px] sm:text-[13px] text-[#5B5BD6] font-medium">
              Remember Password
            </span>
          </label>
          <Link href="/login/forgot-password" className="text-[12px] sm:text-[13px] text-[#5B5BD6] font-medium hover:underline">
            Forgot Password ?
          </Link>
        </div>

        {/* Login Button */}
        <Link href="/overview"><button
          type="button"
          className="w-full bg-[#5B5BD6] hover:bg-[#4a4ac4] active:bg-[#3d3db8] text-white font-bold text-[15px] sm:text-[16px] rounded-full py-2.5 sm:py-3.5 transition-colors duration-200 shadow-sm"
        >
          Login
        </button></Link>
        

        {/* Sign up */}
        <p className="font-poppins font-normal text-center text-[13px] sm:text-[18px] text-[#020202] mt-5 sm:mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="font-poppins font-medium text-center text-[13px] sm:text-[18px] text-[#020202] underline underline-offset-2 hover:text-[#5B5BD6] transition-colors">Sign up</Link>
        </p>
      </form>
    </div>
  );
}