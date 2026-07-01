import { motion } from "framer-motion";
import about1 from "../assets/about1.jpeg";
import about2 from "../assets/about2.jpeg";

export default function About() {
  return (
    <section id="about" className="bg-[#fffaf0]">

      {/* SECTION 1 */}
      <motion.div 
        className="grid md:grid-cols-2 gap-16 items-center px-20 py-24"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >

        {/* TEXT */}
        <div>
          <h1 className="text-5xl !text-left-bold !text-black mb-6">
            About Us
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed text-left">
            We are Team Inceptor Racing, the official BAJA SAE team of the Army Institute of Technology (AIT), Pune.
            We operate under the SAE AIT Collegiate Club, a platform where students design and build vehicles for major 
            national competitions including BAJA, SUPRA, and EFWDC.
          </p>

          <button className="mt-8 bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300">
            Learn More →
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative group">
          <img
            src={about1}
            alt="car"
            className="rounded-2xl shadow-xl w-full object-cover group-hover:scale-105 transition duration-500"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      </motion.div>


      {/* SECTION 2 */}
      <motion.div 
        className="grid md:grid-cols-2 gap-10 items-center px-20 py-24"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* IMAGE */}
        <div className="relative group">
          <img
            src={about2}
            alt="team"
            className="rounded-2xl shadow-xl w-full object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-left !text-black mb-6">
            Our Mission: BAJA 2027
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed text-left">
            Right now, Team Inceptor Racing is actively working on eBAJA 2027.
            Our current focus is on engineering a high-performance, fully electric all-terrain vehicle built to
            endure the toughest off-road environments and keep our team at the forefront of sustainable collegiate racing.
          </p>
        </div>

      </motion.div>

    </section>
  );
}