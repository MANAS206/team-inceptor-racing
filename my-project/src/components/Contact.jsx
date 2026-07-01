export default function Contact() {
  return (
    <section id="contact" className="px-16 py-32 bg-white">
      <h2 className="text-4xl font-bold mb-10 py-5">
        LET'S BUILD THE FUTURE
      </h2>

      <form className="grid md:grid-cols-2 gap-6 max-w-4xl ">
        <input className="p-3 bg-white border border-black" placeholder="Name"/>
        <input className="p-3 bg-white border border-black" placeholder="Email"/>
        <textarea className="p-3 bg-white md:col-span-2 border border-black" placeholder="Message"/>

        <button className="bg-green-600 py-3 md:col-span-2">
          Send Message
        </button>
      </form>
    </section>
  );
}