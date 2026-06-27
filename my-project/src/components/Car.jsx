import carImg from "../assets/e-baja.jpg";

export default function Car() {
  return (
    <section id="car" className="min-h-screen px-16 py-32 bg-gray-950">

      <h2 className="text-4xl font-bold mb-16">
        E-Baja
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        <img src={carImg} />

        <div className="space-y-6">
          <p className="text-gray-400">
            Built for speed, precision and performance.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>Top Speed: <span className="text-red-500">120</span></div>
            <div>Power: <span className="text-red-500">80 HP</span></div>
            <div>Weight: <span className="text-red-500">210kg</span></div>
            <div>0-100: <span className="text-red-500">3.2s</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}