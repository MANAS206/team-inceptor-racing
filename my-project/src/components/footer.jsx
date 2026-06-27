import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 px-16 py-12">

      <div>

        {/* LEFT - BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-red-500">
            INCEPTOR RACING
          </h2>
          <p className="text-gray-400 mt-4">
            Engineering Tomorrow. Built to Win.
          </p>
        </div>

        {/* MIDDLE - CONTACT */}
        <div className="py-5">
          <h3 className="text-lg font-semibold mb-4 text-left ">Contact</h3>

          <p className="flex items-center gap-2 text-gray-400">
            <FaEnvelope /> inceptorracing@gmail.com
          </p>

          <p className="flex items-center gap-2 text-gray-400 mt-2">
            <FaPhone /> +91 9876543210
          </p>
        </div>

        {/* RIGHT - SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-left">Follow Us</h3>

          <div className="flex gap-4 text-xl">

            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-red-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-red-500"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        © 2026 Inceptor Racing. All rights reserved.
      </div>
    </footer>
  );
}