import carImg from "../assets/e-baja.jpg";

export default function About() {
  return (
    <section id="about" className="min-h-screen px-16 py-32 bg-black">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            BUILT BY PASSION
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Inceptor Racing is a Formula Student team focused on
            innovation, engineering excellence, and performance.
          </p>

          <button className="mt-6 border px-6 py-2 hover:bg-red-500">
            Learn More →
          </button>
        </div>

        <img src={carImg} className="rounded-lg" />
      </div>
    </section>
  );
}