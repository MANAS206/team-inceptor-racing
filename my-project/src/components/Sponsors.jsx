export default function Sponsors() {
  return (
    <section id="sponsors" className="px-16 py-32 bg-black text-center">
      <h2 className="text-3xl font-bold mb-10">
        OUR SPONSORS
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">
        <img src="/assets/ansys.png" className="h-10"/>
        <img src="/assets/mathworks.png" className="h-10"/>
        <img src="/assets/solidworks.png" className="h-10"/>
      </div>
    </section>
  );
}