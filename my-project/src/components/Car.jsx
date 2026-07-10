import carImg from "../assets/ebaja.jpg";
import { motion } from "framer-motion";

export default function Car() {
  return (
    <section
      id="car"
      className="min-h-screen px-6 sm:px-10 md:px-16 py-16 md:py-24 bg-white text-black"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
      >
        E-BAJA
      </motion.h2>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.6 }}
        className="h-1 bg-black mb-10 md:mb-16"
      />

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-[250px] sm:h-[350px] md:h-[420px]"
        >
          <img
            src={carImg}
            alt="E-Baja Car"
            className="w-full h-full object-cover rounded-xl shadow-xl 
                       hover:scale-105 hover:shadow-2xl transition duration-500"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 md:space-y-10"
        >
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            An Electric Baja (eBAJA) is a student-engineered all-terrain vehicle
            designed for extreme off-road performance. Powered entirely by a
            high-efficiency electric motor and battery system, it delivers
            instant torque, zero emissions, and superior control across rugged
            terrains.
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              { label: "Top Speed", value: "120 km/h" },
              { label: "Power", value: "80 HP" },
              { label: "Weight", value: "210 kg" },
              { label: "0–100", value: "3.2 s" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-3 sm:p-4 rounded-lg hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="text-xs sm:text-sm text-gray-500">
                  {item.label}
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}