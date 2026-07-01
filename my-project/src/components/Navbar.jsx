import { useState } from "react";
import ait_logo from "../assets/ait_logo.png";
import army_logo from "../assets/baja1.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // NAV ITEMS WITH IDs
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Car", id: "car" },
    { name: "Team", id: "team" },
    { name: "Sponsors", id: "sponsors" },
    { name: "Contact", id: "contact" },
  ];

  // SCROLL FUNCTION
  const handleClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // adjust for navbar height
        behavior: "smooth",
      });
    }

    setMenuOpen(false); // close mobile menu
  };

  return (
    <>
      {/*  TOP WHITE BAR (NOT FIXED) */}
      <div className="bg-white py-3 px-4 md:px-10 border-b">
        <div className="flex items-center justify-between">

          {/* LEFT LOGO */}
          <a href="https://www.aitpune.com/">
            <img
              src={ait_logo}
              alt="logo"
              className="h-10 md:h-14 object-contain"
            />
          </a>

          {/* CENTER TEXT */}
          <div className="text-center">
            <h1 className="text-lg md:text-2xl font-bold text-green-700">
              Team Inceptor Racing
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              Engineering Tomorrow. Built for Speed & Innovation.
            </p>
          </div>

          {/* RIGHT LOGO */}
          <a
            href="https://www.indianarmy.nic.in/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={army_logo}
              alt="logo"
              className="h-10 md:h-14 object-contain"
            />
          </a>
        </div>
      </div>

      {/*  FIXED BLUE NAVBAR */}
      <nav className="sticky top-0 z-50 bg-green-700 text-white">
        <div className="flex items-center justify-between px-6 md:px-16 h-14">

          {/*  MOBILE MENU BUTTON */}
          <div
            className="md:hidden text-2xl text-black cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          {/*  DESKTOP MENU */}
          <ul className="hidden md:flex gap-6 text-sm font-medium mx-auto">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="cursor-pointer hover:text-gray-200 transition"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/*  MOBILE DROPDOWN */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-cyan-600">
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}