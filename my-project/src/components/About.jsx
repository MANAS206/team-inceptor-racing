import { motion } from "framer-motion";
import about1 from "../assets/about1.jpeg";
import about2 from "../assets/about2.jpeg";

export default function About() {
  return (
    <section id="about" className="bg-[#fffaf0]">

      {/* SECTION 1 */}
      <motion.div 
        className="grid md:grid-cols-2 gap-10 md:gap-16 items-center px-6 sm:px-10 md:px-20 py-16 md:py-24"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* TEXT */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            About Us
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We are Team Inceptor Racing, the official BAJA SAE team of the Army Institute of Technology (AIT), Pune.
            We operate under the SAE AIT Collegiate Club, a platform where students design and build vehicles for major 
            national competitions including BAJA, SUPRA, and EFWDC.
          </p>

          <button className="mt-6 md:mt-8 bg-red-500 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300">
            Learn More →
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative group">
          <img
            src={about1}
            alt="car"
            className="rounded-2xl shadow-xl w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      </motion.div>


      {/* SECTION 2 */}
      <motion.div 
        className="grid md:grid-cols-2 gap-10 md:gap-16 items-center px-6 sm:px-10 md:px-20 py-16 md:py-24"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* IMAGE */}
        <div className="relative group order-2 md:order-1">
          <img
            src={about2}
            alt="team"
            className="rounded-2xl shadow-xl w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
        </div>

        {/* TEXT */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
            Our Mission: BAJA 2027
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Right now, Team Inceptor Racing is actively working on eBAJA 2027.
            Our current focus is on engineering a high-performance, fully electric all-terrain vehicle built to
            endure the toughest off-road environments and keep our team at the forefront of sustainable collegiate racing.
          </p>
        </div>

      </motion.div>

    </section>
  );
}