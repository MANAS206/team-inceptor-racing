import { useState, useEffect } from "react";
import img1 from "../assets/ait photo.jpg";
import img2 from "../assets/home1.jpeg";
import img3 from "../assets/home2.jpeg";

export default function Home() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  //  AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">

      {/* SLIDER */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full h-[70vh] md:h-[90vh] object-cover flex-shrink-0"
          />
        ))}
      </div>

      
    </section>
  );
}