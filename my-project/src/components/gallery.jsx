import { useState } from "react";
import { Link } from "react-router-dom";

// Static gallery configuration declared outside the component to prevent re-allocation memory leaks
const GALLERY_ALBUMS = [
  {
    title: "E-BAJA",
    year: "2026-27",
    cover: "/galleryPhoto/a1.jpeg",
    images: [
      "/galleryPhoto/a2.jpeg",
      "/galleryPhoto/a3.jpeg",
      "/galleryPhoto/a4.jpeg",
      "/galleryPhoto/a5.jpeg",
    ],
  },
  {
    title: "BAJA",
    year: "2024-25", // Added missing year text value to prevent blank text node jumps
    cover: "/galleryPhoto/1-cover.jpg",
    images: [
      "/galleryPhoto/1.jpg",
      "/galleryPhoto/2.jpg",
      "/galleryPhoto/3.jpg",
      "/galleryPhoto/4.jpg",
      "/galleryPhoto/5.jpg",
      "/galleryPhoto/6.jpg",
      "/galleryPhoto/7.jpg",
      "/galleryPhoto/8.jpg",
    ],
  },
];

export default function Gallery() {
  const [activeAlbumIndex, setActiveAlbumIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // NEXT / PREVIOUS CORE LIGHTBOX CONTROLS
  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === GALLERY_ALBUMS[activeAlbumIndex].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? GALLERY_ALBUMS[activeAlbumIndex].images.length - 1 : prev - 1
    );
  };

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-100 text-center relative min-h-screen">
      
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-wide text-gray-800">
        GALLERY
      </h2>

      {/* ================= ALBUM LIST ================= */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {GALLERY_ALBUMS.map((album, index) => (
          <div key={album.title} className="border-t border-gray-300 pt-8 transition-all duration-500">
            
            {/* ALBUM HEADER */}
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-700">
              {album.title}
            </h3>

            {/* ALBUM COVER CARD TRIGGER */}
            <button
              type="button"
              onClick={() => setActiveAlbumIndex(activeAlbumIndex === index ? null : index)}
              className="mx-auto block w-56 bg-white p-3 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-200 focus:outline-none"
              aria-label={`Toggle ${album.title} photo album`}
            >
              <img
                src={album.cover}
                alt={`${album.title} ${album.year} collection cover`}
                className="rounded-lg w-full h-40 object-cover"
                loading="lazy"
              />
              <p className="mt-3 font-bold text-green-700">{album.year}</p>
            </button>

            {/* EXPANDABLE PHOTO GRID */}
            {activeAlbumIndex === index && (
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 animate-fadeIn">
                {album.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setSelectedIndex(i)}
                    className="w-full h-52 overflow-hidden rounded-lg shadow-md hover:scale-105 transition duration-300 focus:outline-none border-none p-0 bg-transparent"
                    aria-label={`Open picture ${i + 1} inside full lightbox display view`}
                  >
                    <img
                      src={img}
                      alt={`${album.title} event snap number ${i + 1}`}
                      className="w-full h-full object-cover transition duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>

      {/* ================= MODAL LIGHTBOX INTERFACE ================= */}
      {selectedIndex !== null && activeAlbumIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn">
          
          {/* CLOSE CONTROLLER */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-red-500 text-3xl font-light transition focus:outline-none p-2"
            aria-label="Close image interface viewer"
          >
            ✕
          </button>

          {/* PREVIOUS CONTROLLER */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-green-500 text-5xl font-light transition focus:outline-none p-4"
            aria-label="Load previous showcase item"
          >
            ‹
          </button>

          {/* MAIN MODAL VISUAL CORE */}
          <div className="max-w-[85vw] max-h-[75vh] flex flex-col items-center">
            <img
              src={GALLERY_ALBUMS[activeAlbumIndex].images[selectedIndex]}
              alt={`${GALLERY_ALBUMS[activeAlbumIndex].title} display presentation`}
              className="max-h-[75vh] max-w-[85vw] rounded-lg shadow-2xl object-contain select-none border border-white/10"
            />
          </div>

          {/* NEXT CONTROLLER */}
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-green-500 text-5xl font-light transition focus:outline-none p-4"
            aria-label="Load next showcase item"
          >
            ›
          </button>

          {/* INDEX GRAPHIC TRACKER */}
          <p className="absolute bottom-6 text-gray-400 font-medium tracking-widest text-sm bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-md">
            {selectedIndex + 1} / {GALLERY_ALBUMS[activeAlbumIndex].images.length}
          </p>
        </div>
      )}

      {/* ================= STICKY HOME LINK ROUTER ================= */}
      <Link
        to="/"
        className="fixed bottom-6 left-6 bg-green-700 text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-green-800 transition duration-300 z-40 flex items-center gap-2 border border-green-600"
      >
        <span>🏠</span> Home
      </Link>

    </section>
  );
}