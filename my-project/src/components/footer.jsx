import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 py-10">

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* 🔥 CENTERED BRAND */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-green-600">
            TEAM INCEPTOR RACING
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Engineering Tomorrow. Built to Win.
          </p>
        </div>

        {/* CONTACT HEADING */}
        <h3 className="text-xl font-semibold mb-6 text-left">
          Contact
        </h3>

        {/* CONTENT ROW */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* LEFT - CONTACT */}
          <div className="space-y-3 text-gray-600 flex-1">

            <a
              href="https://maps.google.com/?q=Army Institute of Technology Pune"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-black"
            >
              <FaMapMarkerAlt />
              Army Institute of Technology, Pune
            </a>

            <a
              href="mailto:teaminceptorracing@gmail.com"
              className="flex items-center gap-2 hover:text-black"
            >
              <FaEnvelope />
              teaminceptorracing@gmail.com
            </a>

            <p className="flex items-center gap-2">
              <FaPhone /> +91 6202193598
            </p>

            <p className="flex items-center gap-2">
              <FaPhone /> +91 9166398921
            </p>
          </div>

          {/* RIGHT (SHIFTED LEFT) - FOLLOW US */}
          <div className="space-y-4 md:ml-10">

            <h4 className="text-lg font-semibold">
              Follow Us
            </h4>

            <div className="flex gap-5 text-xl">
              <a
                href="https://www.instagram.com/teaminceptorracing"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/team-inceptor-racing/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="text-center text-gray-500 text-sm mt-10">
          © 2026 Inceptor Racing. All rights reserved.
        </div>

      </div>
    </footer>
  );
}