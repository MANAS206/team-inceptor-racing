import { motion } from "framer-motion";
import carImg from "../assets/e-baja.jpg";
import teamImg from "../assets/e-baja.jpg";

export default function About() {
  return (
    <section id="about" className="bg-[#fffaf0]">

      {/* SECTION 1 */}
      <motion.div 
        className="grid md:grid-cols-2 gap-16 items-center px-20 py-24"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* TEXT */}
        <div>
          <h1 className="text-5xl !text-left-bold !text-black mb-6">
            About Us
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed text-left">
            Inceptor Racing is a Formula Student team driven by innovation,
            engineering excellence, and performance. We build not just cars,
            but future engineers who thrive under challenges.
          </p>

          <button className="mt-8 bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300">
            Learn More →
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative group">
          <img
            src={carImg}
            alt="car"
            className="rounded-2xl shadow-xl w-full object-cover group-hover:scale-105 transition duration-500"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      </motion.div>


      {/* SECTION 2 */}
      <motion.div 
        className="grid md:grid-cols-2 gap-16 items-center px-20 py-24"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* IMAGE */}
        <div className="relative group">
          <img
            src={teamImg}
            alt="team"
            className="rounded-2xl shadow-xl w-full object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-left !text-black mb-6">
            Our Mission: Engineering Excellence
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed text-left">
            Our mission is to design high-performance vehicles while building
            a culture of teamwork, creativity, and innovation. We aim to
            compete at the highest level and continuously push our limits.
          </p>
        </div>

      </motion.div>

    </section>
  );
}