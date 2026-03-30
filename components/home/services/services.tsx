import Image from "next/image";
import serviceImage01 from "@/public/images/service-01.png";
import serviceImage02 from "@/public/images/service-02.png";
import serviceImage03 from "@/public/images/service-03.png";
import serviceImage04 from "@/public/images/service-04.png";
import serviceImage05 from "@/public/images/service-05.png";
import serviceImage06 from "@/public/images/service-06.png";

const cards = [
  {
    tag: "Automated Calls",
    title: "AI Voice Agents",
    description:
      "Handle inbound & outbound calls 24/7 with natural-sounding AI voices. Book appointments, answer FAQs, and qualify leads automatically.",
    image: serviceImage01,
  },
  {
    tag: "Ask Anything",
    title: "Website Chatbot",
    description:
      "View work in 10+ unique ways and move from idea to done faster.",
    image: serviceImage02,
  },
  {
    tag: "Appointment",
    title: "Smart Scheduling",
    description:
      "AI-powered appointment booking with calendar sync, reminders, and rescheduling — zero manual effort.",
    image: serviceImage03,
  },
  {
    tag: "Productivity",
    title: "Multi-Business Platform",
    description:
      "Track call volumes, conversion rates, booking trends, and customer satisfaction in real-time.",
    image: serviceImage04,
  },
  {
    tag: "Insights",
    title: "Analytics Dashboard",
    description:
      "Track call volumes, conversion rates, booking trends, and customer satisfaction in real-time.",
    image: serviceImage05,
  },
  {
    tag: "Secure",
    title: "Enterprise Security",
    description:
      "Role-based access, encrypted communications, and secure multi-tenant architecture you can trust.",
    image: serviceImage06,
  },
];

export default function Services() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div className="md:max-w-xl">
            <h2 className="font-poppins text-3xl sm:text-4xl font-normal text-[#333333] leading-12">
              Everything You Need to{" "}
              <span className="font-bold text-[#333333]">
                Automate Customer Service
              </span>
            </h2>
          </div>
          <div className="md:max-w-xl">
            <p className="font-poppins text-[#333333] text-sm sm:text-lg leading-8">
              One platform, every channel. Let AI handle the repetitive work
              while{" "}
              <strong className="text-[#333333] font-bold">
                your team focuses on growth
              </strong>
              .
            </p>
          </div>
        </div>

        {/* Cards Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[18px] p-6 w-full max-w-98 flex flex-col"
              style={{
                boxShadow: "0px 8px 40px 0px #1D8CF229",
              }}
            >
              {/* Tag */}
              <p className="font-poppins text-sm text-[#333333] font-light leading-4 tracking-wide mb-4">
                {card.tag}
              </p>

              {/* Title */}
              <h3 className="font-poppins text-[28px] font-normal text-[#333333] leading-10">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-poppins font-light text-lg text-[#333333] leading-8 mt-3">
                {card.description}
              </p>

              {/* Image — fills remaining space at bottom */}
              <div className="flex-1 flex items-end justify-center mt-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  placeholder="empty"
                className="w-98 h-70 object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}