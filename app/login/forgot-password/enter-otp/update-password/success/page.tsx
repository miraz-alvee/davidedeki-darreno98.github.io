import Image from "next/image";
import authLogo from "@/public/images/auth-logo.png";
import Link from "next/link";

export default function SuccessPage() {
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
                  Password Updated Successfully!
                </h1>
                <p className="text-center text-[13px] sm:text-[14px] md:text-[15px] text-[#444444] mb-7 sm:mb-8">
                    Your new password has been saved. You can now continue securely.
                </p>
                 <Link href="/login">
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
              Go to Login
            </button>
          </div>
        </Link>
            </div>
        </div>
    )
}
