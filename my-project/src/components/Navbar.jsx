import { useState, useEffect } from "react";
import ait_logo from "../assets/ait_logo.png";
import baja from "../assets/baja1.jpeg";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About us", id: "about" },
    { name: "Our Car", id: "car" },
    { name: "Team", id: "team" },
    { name: "Sponsors", id: "sponsors" },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setMenuOpen(false); // close mobile menu
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 border-b border-gray-300 px-6 md:px-16 h-20 flex justify-between items-center">

      {/* LOGO */}
      <div
        className="cursor-pointer flex items-center"
        onClick={() => handleClick("home")}
      >
        <img src={ait_logo} className="h-10 md:h-14 object-contain" />
        <span className="font-bold text-lg md:text-xl text-black px-2">
          INCEPTOR
        </span>
        <img src={baja} className="h-10 md:h-14 object-contain" />
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`cursor-pointer pb-1 transition-all duration-300 ${
              active === item.id
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-700 hover:text-red-500"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* MOBILE MENU BUTTON */}
      <div
      className="md:hidden text-black text-2xl p-2 rounded-md hover:bg-gray-200 transition cursor-pointer"
      onClick={() => setMenuOpen(!menuOpen)}>
        ☰
        </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-100 border-t border-gray-300 flex flex-col items-center gap-6 py-6 md:hidden">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`cursor-pointer text-lg ${
                active === item.id
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}