import { Phone, Calendar, Bot } from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/images/hero-image.png";
import Link from "next/link";

const features = [
    { icon: Phone, label: "AI voice\nCall" },
    { icon: Calendar, label: "Auto\nbooking" },
    { icon: Bot, label: "Smart\nChatbot" },
];

export default function Hero() {
    return (
        <section className="w-full overflow-hidden">
            {/* HERO */}
            <div
                className="relative bg-center bg-no-repeat flex flex-col items-center justify-center text-center bg-cover md:bg-cover lg:bg-cover 
                xl:bg-cover 2xl:bg-size-[160%]"
                style={{
                    backgroundImage: "url('/images/hero-image.png')",
                    // backgroundSize: "cover",  // changed from "170%" so it always fills
                }}
            >
                {/* Optional dark overlay for text legibility on mobile */}
                <div className="absolute inset-0 bg-[#F0F3FF]/10" />

                <div className="relative z-10 max-w-4xl px-4">
                    {/* Badge */}
                    <div className="bg-[#7A7AFF1A] inline-flex mt-18 items-center gap-2 border border-[#7A7AFF] rounded-full px-6 py-3 text-xs sm:text-sm font-bold text-[#7A7AFF] backdrop-blur-sm mb-6">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#7A7AFF]" />
                        AI-Powered Customer Service
                    </div>
                    {/* Heading */}
                    <h1 className="m-0 mb-6 leading-tight text-[#323338]">
                        <span className="font-poppins block text-3xl sm:text-4xl lg:text-[54px] font-bold tracking-tight mb-2">
                            Never Miss a Customer
                        </span>
                        <span className="font-poppins block text-3xl sm:text-4xl lg:text-[54px] font-light tracking-tight">
                            Call Again
                        </span>
                    </h1>
                    {/* Subtext */}
                    <p className="font-poppins text-sm sm:text-lg lg:text-[22px] leading-relaxed text-[#323338] font-light">
                        AI voice agents, chatbots, and appointment booking — all in one
                        platform. Automate your customer service across phone, web,
                        WhatsApp, and email.
                    </p>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className="bg-[#F0F3FF] py-14 px-4">
                {/* Feature Cards */}
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10">
                    {features.map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#B4B4FF0A] shadow-[0px_8px_24px_0px_#1D8CF229]"
                            style={{ width: 122, height: 120 }}
                        >
                            {/* Tick */}
                            <div className="absolute top-2 left-2">
                                <div className="w-4 h-4 rounded border border-indigo-300/70 flex items-center justify-center">
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                        <path
                                            d="M1 3L3 5L7 1"
                                            stroke="#7B7FD4"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <Icon size={30} className="text-indigo-400" strokeWidth={1.5} />

                            <span className="font-poppins text-sm sm:text-base font-light text-[#333333] leading-4 whitespace-pre-line text-center">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <Link href='/sign-up'>
                        <button className="font-poppins cursor-pointer inline-flex items-center gap-2 px-8 sm:px-10 py-3 rounded-full bg-[#6161FF] hover:bg-indigo-600 text-white text-sm sm:text-base font-light transition-colors duration-200 shadow-md">
                            Start Free Trial
                            <span>→</span>
                        </button>
                    </Link>
                    <Link href='#how-it-works'>
                    <button className="font-poppins cursor-pointer inline-flex items-center gap-2 px-8 sm:px-10 py-3 rounded-full border border-slate-300 bg-white/60 hover:bg-white/90 text-black text-sm sm:text-base font-light backdrop-blur-sm transition-colors duration-200">
                        See How It Works
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}