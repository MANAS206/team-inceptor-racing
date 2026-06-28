import carImg from "../assets/e-baja.jpg";
import { motion } from "framer-motion";

export default function Car() {
  return (
    <section
      id="car"
      className="min-h-screen px-16 py-24 bg-white text-black"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-10xl font-bold tracking-tight mb-4 !text-black"
      >
        E-BAJA
      </motion.h2>

      {/* small divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.6 }}
        className="h-1 bg-black mb-16"
      />

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-20 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-[420px] flex items-center justify-center"
        >
          <img
            src={carImg}
            alt="E-Baja Car"
            className="w-full h-full object-cover rounded-xl shadow-xl 
                       transition duration-500 ease-in-out 
                       hover:scale-105 hover:shadow-2xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <p className="text-lg text-gray-600 leading-relaxed text-left">
            An Electric Baja (eBAJA) is a student-engineered all-terrain vehicle
            designed for extreme off-road performance. Powered entirely by a
            high-efficiency electric motor and battery system, it delivers
            instant torque, zero emissions, and superior control across rugged
            terrains.
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-8">
            
            {[
              { label: "Top Speed", value: "120 km/h" },
              { label: "Power", value: "80 HP" },
              { label: "Weight", value: "210 kg" },
              { label: "0–100", value: "3.2 s" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-4 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
              >
                <div className="text-sm text-gray-500">
                  {item.label}
                </div>
                <div className="text-2xl font-bold">
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