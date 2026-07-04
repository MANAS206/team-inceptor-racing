import carImg from "../assets/e-baja.jpg";
import mathworks from "../assets/e-baja.jpg";
import solidworks from "../assets/e-baja.jpg";
import sponsors1 from "../assets/Ansys2.webp";
import sponsors2 from "../assets/SolidWorks.webp";
import sponsors3 from "../assets/onshape.png";
import sponsors4 from "../assets/C2M.png";

export default function Sponsors() {
  const sponsors = [
    sponsors1,sponsors2,sponsors3,sponsors4,
    sponsors1,sponsors2,sponsors3,sponsors4 // duplicate for loop
  ];

  return (
    <section className="bg-olive-200 py-16 overflow-hidden" id="sponsors">

      {/* HEADING - TOP LEFT */}
      <h1 className="text-4xl text-left-bold !text-black px-10 mb-10">
        Our Sponsors
      </h1>

      {/* MARQUEE CONTAINER */}
      <div className="relative overflow-hidden">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray to-transparent z-10"></div>

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray to-transparent z-10"></div>

        {/* SCROLL TRACK */}
        <div className="flex gap-8 animate-scroll px-16">

          {sponsors.map((sponsors, i) => (
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
              <img src={sponsors}
              className=" object-cover"/>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}