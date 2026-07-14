import { useState, useEffect } from "react";

// Kept outside the component definition to avoid re-allocation on every single render frame
const SLIDER_IMAGES = [
  { src: "/assets/aitphoto3.JPG", alt: "Team Inceptor racing track vehicle showcase" },
  { src: "/assets/home1.jpeg", alt: "Off-road vehicle dynamic engineering view" },
  { src: "/assets/home2.jpeg", alt: "Team Inceptor workshop and testing grounds" }
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // AUTOMATED ROTATION TRACKER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000); // Transitions seamlessly every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-black">

      {/* HORIZONTAL TRACK SYSTEM */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDER_IMAGES.map((img, index) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover flex-shrink-0"
            loading={index === 0 ? "eager" : "lazy"} 
          />
        ))}
      </div>

      {/* OPTIONAL HERO TEXT OVERLAY GRAPHIC */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
        <div className="max-w-3xl text-white">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase mb-2 drop-shadow-md">
            Built to Conquer
          </h2>
          <p className=" text-white text-sm md:text-lg  drop-shadow-sm max-w-xl">
            “From AIT Pune to the track — we design and build high-performance ATVs.”
          </p>
        </div>
      </div>

      {/* OPTIONAL SLIDER DOT INDICATORS */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {SLIDER_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-green-500" : "w-2.5 bg-white/50"
            }`}
            aria-label={`Jump directly to race vehicle slide slide number ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}