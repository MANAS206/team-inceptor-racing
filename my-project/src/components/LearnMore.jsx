import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import img30 from "./efwdc.jpeg";
import img31 from "./ebaja4.jpeg";

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
    img: img30,
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
    img: img31,
  },
];

export default function Timeline() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fffaf0] min-h-screen py-12 px-4">

      {/* 🔥 HOME BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="fixed bottom-6 left-6 z-50 p-4 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
      >
        <FaHome size={22} />
      </button>

      <h1 className="text-4xl font-bold text-center mb-16">
        Our Journey
      </h1>

      <div className="relative max-w-6xl mx-auto">

        {/* CENTER LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative grid md:grid-cols-2 gap-8 items-center mb-20"
            >

              {/* LEFT SIDE */}
              <div className={`flex ${isLeft ? "justify-end" : "justify-start"} md:px-10`}>
                {!isLeft && (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition duration-300"
                  />
                )}

                {isLeft && (
                  <div className="w-full max-w-md bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border hover:shadow-2xl transition">
                    <h2 className="text-2xl font-bold text-red-500">{item.year}</h2>
                    <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                    <div className="mt-3 text-gray-700">{item.desc}</div>
                  </div>
                )}
              </div>

              {/* DOT */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                <div className="w-5 h-5 bg-red-500 border-4 border-white rounded-full shadow"></div>
              </div>

              {/* RIGHT SIDE */}
              <div className={`flex ${isLeft ? "justify-start" : "justify-end"} md:px-10`}>
                {isLeft && (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition duration-300"
                  />
                )}

                {!isLeft && (
                  <div className="w-full max-w-md bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border hover:shadow-2xl transition">
                    <h2 className="text-2xl font-bold text-red-500">{item.year}</h2>
                    <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                    <div className="mt-3 text-gray-700">{item.desc}</div>
                  </div>
                )}
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}