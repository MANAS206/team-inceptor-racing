import sponsors1 from "../assets/Ansys2.webp";
import sponsors2 from "../assets/SolidWorks.webp";
import sponsors3 from "../assets/onshape.png";
import sponsors4 from "../assets/C2M.png";

export default function Sponsors() {
  const sponsors = [
    sponsors1, sponsors2, sponsors3, sponsors4,
    sponsors1, sponsors2, sponsors3, sponsors4,
    sponsors1, sponsors2, sponsors3, sponsors4 // loop
  ];

  return (
    <section className="bg-olive-200 py-12 md:py-16 overflow-hidden" id="sponsors">

      {/* HEADING */}
      <h1 className="text-2xl md:text-4xl font-bold text-black px-4 md:px-10 mb-8 md:mb-10">
        Our Sponsors
      </h1>

      {/* MARQUEE */}
      <div className="relative overflow-hidden">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-[#dfe6c9] to-transparent z-10"></div>

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-[#dfe6c9] to-transparent z-10"></div>

        {/* SCROLL TRACK */}
        <div className="flex gap-6 md:gap-10 animate-scroll px-6 md:px-16">

          {sponsors.map((img, i) => (
            <div
              key={i}
              className="
                min-w-[120px] md:min-w-[180px]
                h-[80px] md:h-[120px]
                bg-white
                rounded-xl
                flex items-center justify-center
                shadow-md
                hover:shadow-xl
                transition duration-300
              "
            >
              <img
                src={img}
                alt="sponsor"
                className="max-h-[60px] md:max-h-[90px] object-contain"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}