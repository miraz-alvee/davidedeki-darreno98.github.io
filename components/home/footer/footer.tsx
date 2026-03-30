import Image from "next/image";
import footerImage from "@/public/images/footer-image.png";

const footerLinks = {
  Product: ["Features", "Pricing", "How It Works"],
  Company: ["About", "Blog", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F1048] text-white px-6 py-14">
      <div className="max-w-7xl mx-auto">

        {/* Top Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src={footerImage} alt="Assist Connect Logo" className="w-60 md:w-full"/>
            </div>

            <p className="font-poppins text-sm sm:text-base text-gray-300 leading-relaxed max-w-xs">
              AI-powered customer service automation for every business.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-poppins font-semibold mb-4">{title}</h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="border-t-2 border-white/20 my-6"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400">
          © 2026 SparkFlow. All rights reserved.
        </div>

      </div>
    </footer>
  );
}