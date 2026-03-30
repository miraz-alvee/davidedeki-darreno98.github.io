import registerImage from '@/public/images/register-image.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
  return (
    <section id="register" className="relative w-full">

      {/* Image */}
      <div className="bg-[#0F1048]">
        <Image
          src={registerImage}
          alt="Register"
          className="w-full h-65 md:h-90 lg:h-105 object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center left-0 md:left-70">
        <div className="max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <h1 className="leading-tight text-center md:text-left">
            <span className="font-poppins block text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-snug tracking-tight mb-2">
              Register, subscribe, and build AI -
              <br className="hidden md:block" />
              powered workflows to automate your
            </span>

            <span className="font-poppins block text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-snug bg-linear-to-r from-white to-[#6161FF] text-transparent bg-clip-text tracking-tight">
              business — all without technical skills.
            </span>
          </h1>
          <Link href="/sign-up">
            <button className="font-poppins cursor-pointer inline-flex mt-6 md:mt-10 items-center gap-2 px-8 sm:px-10 py-3 rounded-full bg-[#6161FF] hover:bg-indigo-600 text-white text-sm sm:text-base font-light transition-colors duration-200 shadow-md">
              Get Started
              <span>→</span>
            </button>
          </Link>


        </div>
      </div>

    </section>
  )
}