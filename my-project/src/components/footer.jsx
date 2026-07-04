import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-800 px-16 py-12">

      <div>

        {/* LEFT - BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-green-600">
            INCEPTOR RACING
          </h2>
          <p className="text-gray-400 mt-4">
            Engineering Tomorrow. Built to Win.
          </p>
        </div>

        {/* MIDDLE - CONTACT */}
        <div className="py-5">
          <h3 className="text-lg font-semibold mb-4 text-left">Contact</h3>

          {/*LOCATION ADDED */}
          <a
            href="https://maps.google.com/?q=Army Institute of Technology Pune"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-2 text-black-400 mt-2 "
          >
            <FaMapMarkerAlt />
            Army Institute of Technology, Pune
          </a>

          <a 
            href="mailto:teaminceptorracing@gmail.com"
            target="_blank"
            rel="noreferrer"
            >
          <p className="flex items-center gap-2 text-gray-400">
            <FaEnvelope /> teaminceptorracing@gmail.com
          </p>
          </a>

          <p className="flex items-center gap-2 text-gray-400 mt-2">
            <FaPhone /> +91 6202193598
          </p>

          <p className="flex items-center gap-2 text-gray-400 mt-2">
            <FaPhone /> +91 9166398921
          </p>

        </div>

        {/* RIGHT - SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-left">Follow Us</h3>

          <div className="flex gap-4 text-xl">

            <a
              href="https://www.instagram.com/teaminceptorracing?igsh=MTFsOWQ2N2Yyand4Zw=="
              target="_blank"
              className="hover:text-red-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/team-inceptor-racing/"
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