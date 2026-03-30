import registerImage from '@/public/images/register-image.png';

import Image from 'next/image';

export default function Register() {
  return (
    <section className="relative w-full">
      {/* Image */}
      <div className="bg-[#0F1048]">
        <Image
          src={registerImage}
          alt="Register"
          className="w-full h-100 object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0">
        <div className="max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <h1 className="leading-tight space-y-5 text-center md:text-left">
            <span className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-2">
              Register, subscribe, and build AI- <br /> powered workflows to automate your <br /> business
            </span>

            <span className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-light bg-linear-to-r from-white to-[#6161FF] text-transparent bg-clip-text tracking-tight">
              — all without technical skills.
            </span>
          </h1>

          <button className="font-poppins inline-flex mt-10 items-center gap-2 px-8 sm:px-10 py-3 rounded-full bg-[#6161FF] hover:bg-indigo-600 text-white text-sm sm:text-base font-light transition-colors duration-200 shadow-md">
            Get Started
            <span>→</span>
          </button>

        </div>
      </div>
    </section>
  )
}
