import carImg from "../assets/e-baja.jpg";
import mathworks from "../assets/e-baja.jpg";
import solidworks from "../assets/e-baja.jpg";

export default function Sponsors() {
  const sponsors = [
    carImg, mathworks, solidworks,
    carImg, mathworks, solidworks // duplicate for loop
  ];

  return (
    <section className="bg-gray-500 py-24 overflow-hidden" id="sponsors">

      {/* HEADING - TOP LEFT */}
      <h1 className="text-4xl text-left-bold !text-black px-16 mb-16">
        Our Sponsors
      </h1>

      {/* MARQUEE CONTAINER */}
      <div className="relative overflow-hidden">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10"></div>

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* SCROLL TRACK */}
        <div className="flex gap-8 animate-scroll px-16">

          {sponsors.map((img, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-xl
                flex items-center justify-center
                shadow-md
                hover:shadow-xl
                transition duration-300
              ">
              <img src={img}
              className="w-full h-full object-cover"/>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}