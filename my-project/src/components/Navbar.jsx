import { useState, useEffect } from "react";
import ait_logo from "../assets/ait_logo.png";
import baja from "../assets/baja1.jpeg";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About us", id: "about" },
    { name: "Our Car", id: "car" },
    { name: "Team", id: "team" },
    { name: "Sponsors", id: "sponsors" },
    { name: "Contact", id: "contact" },
  ];

  // 🔥 Scroll to section on click
  const handleClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  // 🔥 Highlight active section while scrolling
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
    <nav className="sticky top-0 z-50 bg-gray-100 border-b border-gray-300 px-16 h-20 flex justify-between items-center">

  {/* LOGO */}
  <h1
    className="cursor-pointer flex items-center"
    onClick={() => handleClick("home")}
  >
    <img
      src={ait_logo}
      alt="logo2"
      className="h-16 w-auto object-contain pr-2"
    />
    <span className="font-bold text-xl text-black pl-2 pr-2">INCEPTOR</span>
    <img
      src={baja}
      alt="logo"
      className="h-16 w-auto object-contain pl-2"
    />
  </h1>

  {/* NAV ITEMS */}
  <ul className="flex gap-8 text-sm font-medium">
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

</nav>
  );
}