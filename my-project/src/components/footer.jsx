import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 py-12 text-black">

      {/* CORE WRAPPER CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CENTERED BRAND TEXT DISPLAY */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black tracking-wider text-green-700 uppercase">
            TEAM INCEPTOR RACING
          </h2>
          <p className="text-gray-500 text-sm font-medium mt-1 italic">
            Engineering Tomorrow. Built to Win.
          </p>
        </div>

        {/* STRUCTURAL CONTENT FLEX ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 border-b border-gray-100 pb-10">

          {/* LEFT COLUMN: ACTIVE CONTACT CHANNELS */}
          <div className="space-y-4 text-gray-600 flex-1">
            <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase mb-2">
              Contact Us
            </h3>

            {/* FIXED GOOGLE MAPS ROUTER */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Army+Institute+of+Technology+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-green-700 transition group w-fit"
            >
              <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-gray-400 group-hover:text-green-700 transition" />
              <span>Army Institute of Technology, Alandi Road, Dighi, Pune, Maharashtra 411015</span>
            </a>

            {/* EMAIL LINK */}
            <a
              href="mailto:teaminceptorracing@gmail.com"
              className="flex items-center gap-3 hover:text-green-700 transition group w-fit"
            >
              <FaEnvelope className="flex-shrink-0 text-gray-400 group-hover:text-green-700 transition" />
              <span>teaminceptorracing@gmail.com</span>
            </a>

            {/* INTERACTIVE PHONE CHANNELS */}
            <div className="space-y-2 pt-1">
              <a
                href="tel:+916202193598"
                className="flex items-center gap-3 hover:text-green-700 transition group w-fit"
              >
                <FaPhone className="flex-shrink-0 text-gray-400 group-hover:text-green-700 transition" />
                <span>+91 62021 93598</span>
              </a>

              <a
                href="tel:+919166398921"
                className="flex items-center gap-3 hover:text-green-700 transition group w-fit"
              >
                <FaPhone className="flex-shrink-0 text-gray-400 group-hover:text-green-700 transition" />
                <span>+91 91663 98921</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: SOCIAL PORTAL HUB */}
          <div className="space-y-4 md:w-1/3 flex flex-col justify-start">
            <h4 className="text-lg font-bold text-gray-800 tracking-wide uppercase">
              Follow Our Journey
            </h4>

            {/* ACCESSIBLE SOCIAL HANDLES */}
            <div className="flex gap-6 text-2xl pt-1">
              <a
                href="https://www.instagram.com/teaminceptorracing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition duration-300"
                aria-label="Follow Team Inceptor Racing on Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/team-inceptor-racing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition duration-300"
                aria-label="Connect with Team Inceptor Racing on LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT BOTTOM FLOOR */}
        <div className="text-center text-gray-400 text-xs font-medium mt-8 tracking-wider">
          &copy; {new Date().getFullYear()} Inceptor Racing. All rights reserved.
        </div>

      </div>
    </footer>
  );
}