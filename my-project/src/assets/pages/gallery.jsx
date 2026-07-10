import { useState } from "react";

export default function Gallery() {
  const [activeAlbumIndex, setActiveAlbumIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const albums = [
    {
      title: "Albatros XIII-2025",
      year: "2025",
      cover: "/images/e-baja.jpg",
      images: [
        "/images/e-baja.jpg",
        "/images/img2.jpg",
        "/images/img3.jpg",
        "/images/img4.jpg",
        "/images/img5.jpg",
      ],
    },
    {
      title: "Albatros XII-2024",
      year: "2024",
      cover: "/images/img2.jpg",
      images: [
        "/images/img2.jpg",
        "/images/img3.jpg",
        "/images/img4.jpg",
      ],
    },
  ];

  // 🔹 NEXT / PREV
  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === albums[activeAlbumIndex].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? albums[activeAlbumIndex].images.length - 1 : prev - 1
    );
  };

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-100 text-center relative">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        GALLERY
      </h2>

      {/* ================= ALBUM LIST ================= */}
      <div className="space-y-12">

        {albums.map((album, index) => (
          <div key={index} className="border-t pt-6 transition-all duration-500">

            {/* ALBUM HEADER */}
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              {album.title}
            </h3>

            {/* ALBUM CARD */}
            <div
              onClick={() =>
                setActiveAlbumIndex(
                  activeAlbumIndex === index ? null : index
                )
              }
              className="cursor-pointer mx-auto w-52 bg-white p-3 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={album.cover}
                className="rounded-lg w-full h-40 object-cover"
              />
              <p className="mt-2 font-semibold">{album.year}</p>
            </div>

            {/* ================= GRID (EXPANDS BELOW ONLY THIS ALBUM) ================= */}
            {activeAlbumIndex === index && (
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 animate-fadeIn">
                {album.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setSelectedIndex(i)}
                    className="cursor-pointer rounded-lg shadow hover:scale-105 transition"
                  />
                ))}
              </div>
            )}

          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedIndex !== null && activeAlbumIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* LEFT */}
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={albums[activeAlbumIndex].images[selectedIndex]}
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
          />

          {/* RIGHT */}
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl"
          >
            ›
          </button>

          {/* COUNTER */}
          <p className="absolute bottom-6 text-white text-sm">
            {selectedIndex + 1} / {albums[activeAlbumIndex].images.length}
          </p>
        </div>
      )}

      {/* ================= STICKY HOME BUTTON ================= */}
      <a
        href="/"
        className="fixed bottom-6 left-6 bg-black text-white px-5 py-3 rounded-full shadow-lg hover:bg-gray-800 transition z-50"
      >
        🏠 Home
      </a>

    </section>
  );
}