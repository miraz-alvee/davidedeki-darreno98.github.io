import Image from "next/image";
import cardImage from "@/public/images/card-frame.png";

const stepsData = [
  {
    id: 1,
    title: "Sign Up & Onboard",
    description:
      "Create your account, add your business info, services, and operating hours in minutes.",
  },
  {
    id: 2,
    title: "Configure Your AI",
    description:
      "Customize your AI assistant's voice, personality, scripts, and booking rules to match your brand.",
  },
  {
    id: 3,
    title: "Go Live",
    description:
      "Activate your AI across phone, web, WhatsApp, and email. Start automating immediately.",
  },
];

export default function Steps() {
  return (
    <section id="how-it-works" className="bg-[#F0F3FF] min-h-130 py-12 px-6">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="font-poppins text-2xl sm:text-4xl font-bold text-[#323338] leading-12">
          Up and Running in 3 Steps
        </h2>
        <p className="font-poppins text-sm sm:text-lg font-light text-[#333333] leading-8 mt-3">
          No technical knowledge required. Set up your AI customer service in minutes.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-375 mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stepsData.map((step) => (
          <div key={step.id} className="relative w-full">

            {/* Card Frame */}
            <Image
              src={cardImage}
              alt="card frame"
              className="w-full h-auto md:max-w-121 md:max-h-68.5  object-cover"
            />

            {/* Step Number */}
            <div className="absolute -top-5 right-0 w-12 h-12 rounded-full bg-[#6161FF] text-white flex items-center justify-center text-xl font-semibold">
              {step.id}
            </div>

            {/* Card Content */}
            <div className="absolute top-14 left-8 right-8 mt-2 md:mt-8">
              
              <h3 className="font-poppins text-xl sm:text-2xl font-bold text-[#2B2B2B] mb-3">
                {step.title}
              </h3>

              <p className="font-poppins font-normal text-[#2B2B2B] text-sm md:text-[20px] tracking-[-0.5px] leading-relaxed opacity-80">
                {step.description}
              </p>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}