import { useState } from "react";

// ✅ IMPORT IMAGES CORRECTLY
import g0 from "../../galleryPhoto/1 Cover.jpg";
import g1 from "../../galleryPhoto/1.jpg";
import g2 from "../../galleryPhoto/2.jpg";
import g3 from "../../galleryPhoto/3.jpg";
import g4 from "../../galleryPhoto/4.jpg";
import g5 from "../../galleryPhoto/5.jpg";
import g6 from "../../galleryPhoto/6.jpg";
import g7 from "../../galleryPhoto/7.jpg";
import g8 from "../../galleryPhoto/8.jpg";

// (optional if these exist in assets)
import ebaja from "../e-baja.jpg"; 

export default function Gallery() {
  const [activeAlbumIndex, setActiveAlbumIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const albums = [
    {
      title: "Albatros XIII-2025",
      year: "2025",
      cover: ebaja,
      images: [
        ebaja,
        g1,
        g2,
        g3,
      ],
    },
    {
      title: "BAJA",
      
      cover: g0,
      images: [
        g1,
        g2,
        g3,
        g4,
        g5,
        g6,
        g7,
        g8,
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

            {/* GRID */}
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

          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
          >
            ‹
          </button>

          <img
            src={albums[activeAlbumIndex].images[selectedIndex]}
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl"
          >
            ›
          </button>

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