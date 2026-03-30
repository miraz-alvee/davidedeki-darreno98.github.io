"use client";

import { useState } from "react";
import Image from "next/image";
import authLogo from "@/public/images/auth-logo.png";
import Link from "next/link";

export default function ChangePasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const passwordsMatch = retypePassword.length > 0 && password === retypePassword;
  const passwordsMismatch = retypePassword.length > 0 && password !== retypePassword;

  return (
    <div className="min-h-screen bg-[#FBFAFE] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Card */}
      <div
        className="bg-white w-full rounded-[24px] shadow-[0_8px_48px_0_rgba(0,0,0,0.33)]
          max-w-85 xs:max-w-[400px] sm:max-w-125 md:max-w-150 lg:max-w-162.5
          px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <Image
            src={authLogo}
            alt="Assist Connect"
            className="h-10 sm:h-20 w-auto object-contain"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-center text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#111111] mb-2 leading-tight">
          Enter new password
        </h1>
        <p className="text-center text-[13px] sm:text-[14px] md:text-[15px] text-[#444444] mb-7 sm:mb-8">
          Enter your new password below to update your credentials
        </p>

        {/* Password Field */}
        <div className="mb-4">
          <div
            className={`flex items-center border rounded-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white transition-colors focus-within:border-[#5B5BD6]
              ${passwordsMismatch ? "border-[#E53E3E]" : "border-[#CCCCCC]"}`}
          >
            <span className="text-[13px] sm:text-[16px] font-medium text-[#444444] whitespace-nowrap mr-3 pr-3 border-r border-[#CCCCCC]">
              Password
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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

        {/* Retype Password Field */}
        <div className="mb-2">
          <div
            className={`flex items-center border rounded-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white transition-colors focus-within:border-[#5B5BD6]
              ${passwordsMismatch ? "border-[#E53E3E]" : passwordsMatch ? "border-[#38A169]" : "border-[#CCCCCC]"}`}
          >
            <span className="text-[13px] sm:text-[16px] font-medium text-[#444444] whitespace-nowrap mr-3 pr-6 border-r border-[#CCCCCC]">
              Re-type
            </span>
            <input
              type={showRetypePassword ? "text" : "password"}
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              placeholder="Re-enter your password"
              className="flex-1 text-[13px] sm:text-[14px] text-[#222222] placeholder-[#AAAAAA] outline-none bg-transparent min-w-0"
            />
            <button
              type="button"
              onClick={() => setShowRetypePassword(!showRetypePassword)}
              className="ml-2 text-[#AAAAAA] hover:text-[#666666] transition-colors shrink-0"
              aria-label={showRetypePassword ? "Hide password" : "Show password"}
            >
              {showRetypePassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s4-7.5 10.5-7.5S22.5 12 22.5 12s-4 7.5-10.5 7.5S1.5 12 1.5 12z" />
                  <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.94 17.94A10.07 10.07 0 0112 20c-6.5 0-10.5-8-10.5-8a17.34 17.34 0 014.56-5.44M9.9 4.24A9.12 9.12 0 0112 4c6.5 0 10.5 8 10.5 8a17.35 17.35 0 01-2.06 3.06M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>

          {/* Validation messages */}
          <div className="h-5 mt-1.5 px-4">
            {passwordsMismatch && (
              <p className="text-[12px] text-[#E53E3E] flex items-center gap-1">
                <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Passwords do not match
              </p>
            )}
            {passwordsMatch && (
              <p className="text-[12px] text-[#38A169] flex items-center gap-1">
                <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Passwords match
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
         <Link href="/login/forgot-password/enter-otp/update-password/success">
          <div className="mt-3 sm:mt-4">
            <button
              type="button"
              className="w-full bg-[#5B5BD6] hover:bg-[#4a4ac4] active:bg-[#3d3db8] text-white font-bold text-[15px] sm:text-[16px] rounded-full py-2.5 sm:py-3.5 transition-colors duration-200 shadow-sm"
            // className="w-full text-white font-semibold text-[15px] sm:text-[16px] rounded-full py-3.5 sm:py-4 transition-all duration-200 shadow-sm"
            // disabled={!passwordsMatch}
            //   className={`w-full text-white font-semibold text-[15px] sm:text-[16px] rounded-full py-3.5 sm:py-4 transition-all duration-200 shadow-sm
            //     ${passwordsMatch
            //       ? "bg-[#5B5BD6] hover:bg-[#4a4ac4] active:bg-[#3d3db8] cursor-pointer"
            //       : "bg-[#5B5BD6] opacity-50 cursor-not-allowed"
            //     }`}
            >
              Update Password
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}