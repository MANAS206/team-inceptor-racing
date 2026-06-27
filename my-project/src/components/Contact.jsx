export default function Contact() {
  return (
    <section id="contact" className="px-16 py-32 bg-gray-950">
      <h2 className="text-4xl font-bold mb-10">
        LET'S BUILD THE FUTURE
      </h2>

      <form className="grid md:grid-cols-2 gap-6 max-w-4xl">
        <input className="p-3 bg-black" placeholder="Name"/>
        <input className="p-3 bg-black" placeholder="Email"/>
        <textarea className="p-3 bg-black md:col-span-2" placeholder="Message"/>

        <button className="bg-red-500 py-3 md:col-span-2">
          Send Message
        </button>
      </form>
    </section>
  );
}