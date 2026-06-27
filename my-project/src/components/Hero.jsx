import carImg from "../assets/e-baja.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between px-16 bg-black"
    >
      {/* LEFT */}
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold leading-tight">
          INCEPTOR <br />
          <span className="text-red-500">RACING</span>
        </h1>

        <p className="mt-6 text-gray-400">
          Engineering Tomorrow. Built to Win.
        </p>

        <button className="mt-8 bg-red-500 px-6 py-3 hover:bg-red-600">
          Explore Car →
        </button>
      </div>

      {/* RIGHT */}
      <img
        src={carImg}
        className="w-[700px] object-contain"
      />
    </section>
  );
}

/*export default function Stats() {
  const stats = [
    { num: "20+", label: "Members" },
    { num: "3", label: "Titles" },
    { num: "15+", label: "Podiums" },
    { num: "100+", label: "Events" },
  ];

  return (
    <div className="bg-gray-900 py-6 flex justify-around text-center">
      {stats.map((s, i) => (
        <div key={i}>
          <h2 className="text-2xl text-red-500">{s.num}</h2>
          <p className="text-gray-400 text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}*/