import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const timelineData = [
  {
    year: "2025-26",
    title: "EFWDC",
    desc: (
      <>
        <p>
          EFWDC (Electric Four Wheel Drive Car) is an advanced vehicle system where all four wheels are powered by electric motors.
        </p>
        <ul className="mt-2 list-none pl-0 space-y-1">
          <li>• Power distributed independently</li>
          <li>• Better traction & control</li>
          <li>• Used in eBAJA ATVs</li>
          <li>• Improves performance</li>
          <li>• Eco-friendly mobility</li>
        </ul>
      </>
    ),
    img: "/assets/pages/efwdc.jpeg",
  },
  {
    year: "2026-27",
    title: "Electric Baja",
    desc: (
      <>
        <p>
          eBAJA is an electric off-road competition by SAE India where students design electric ATVs.
        </p>
        <ul className="mt-2 list-none pl-0 space-y-1">
          <li>• Fully electric vehicles</li>
          <li>• Endurance + performance tests</li>
          <li>• Technical inspection</li>
          <li>• Teamwork & innovation</li>
          <li>• Sustainable mobility</li>
        </ul>
      </>
    ),
    img: "/assets/pages/ebaja4.jpeg",
  },
];

export default function LearnMore() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fffaf0] min-h-screen py-12 px-4">

      {/* HOME BUTTON */}
      <button
        type="button"
        onClick={() => navigate("/")}
        className="fixed bottom-6 left-6 z-50 p-4 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition focus:outline-none"
        aria-label="Navigate to Home"
      >
        <FaHome size={22} />
      </button>

      <h1 className="text-4xl text-black font-bold text-center mb-16">
        Our Journey
      </h1>

      <div className="relative max-w-6xl mx-auto">

        {/* CENTER TIMELINE LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.year}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20"
            >
              {/* TEXT BLOCK */}
              {/* order-1 ensures text comes first on mobile, md:order-none respects normal grid flow on desktop */}
              <div 
                className={`w-full flex ${isLeft ? "md:justify-end" : "md:justify-start"} justify-center md:px-10 order-1 ${
                  isLeft ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="w-full max-w-md bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border hover:shadow-2xl transition">
                  <h2 className="text-2xl font-bold text-red-500">{item.year}</h2>
                  <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                  <div className="mt-3 text-gray-700">{item.desc}</div>
                </div>
              </div>

              {/* CENTER TIMELINE DOT */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-5 h-5 bg-red-500 border-4 border-white rounded-full shadow"></div>
              </div>

              {/* IMAGE BLOCK */}
              {/* order-2 puts the image below the text on mobile viewports */}
              <div 
                className={`w-full flex ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center md:px-10 order-2 ${
                  isLeft ? "md:order-2" : "md:order-1"
                }`}
              >
                <img
                  src={item.img}
                  alt={`${item.title} project showcase`}
                  className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition duration-300 object-cover"
                />
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}