import carImg from "../assets/e-baja.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={carImg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-6">

        {/* MAIN HEADING */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="text-white">TEAM INCEPTOR</span> <br />
          <span className="text-white">RACING</span>
        </h1>

        {/* SMALL TEXT */}
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Engineering Tomorrow. Built for Speed, Innovation & Victory.
        </p>

        {/* BUTTON */}
        <button className="mt-8 bg-red-500 px-8 py-3 rounded-md text-white font-semibold hover:bg-red-600 transition transform hover:scale-105 shadow-lg">
          Explore Car →
        </button>

      </div>
    </section>
  );
}