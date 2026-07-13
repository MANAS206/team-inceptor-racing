import { useState } from "react";
import { Link } from "react-router-dom";
import ait_logo from "../assets/ait_logo.png";
import army_logo from "../assets/baja1.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Car", id: "car" },
    { name: "Team", id: "team" },
    { name: "Sponsors", id: "sponsors" },
    { name: "Contact", id: "contact" },
    { name: "Gallery", path: "/gallery", type: "route" },
  ];

  //  IMPROVED SCROLL FUNCTION (FIXED MOBILE ISSUE)
  const handleClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80; // navbar height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      {/* TOP WHITE BAR */}
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

      {/* FIXED NAVBAR */}
      <nav className="sticky top-0 z-50 bg-green-700 text-white">
        <div className="flex items-center justify-between px-6 md:px-16 h-14">

          {/* MOBILE MENU BUTTON */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-6 text-sm font-medium mx-auto">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.type === "route" ? (
                  <Link to={item.path}>{item.name}</Link>
                ) : (
                  <span
                    onClick={() => handleClick(item.id)}
                    className="cursor-pointer hover:text-gray-200 transition"
                  >
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/*  MOBILE DROPDOWN (UPDATED) */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-green-200 text-black">
            {navItems.map((item, index) =>
              item.type === "route" ? (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer"
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  key={index}
                  onClick={() => handleClick(item.id)}
                  className="cursor-pointer"
                >
                  {item.name}
                </div>
              )
            )}
          </div>
        )}
      </nav>
    </>
  );
}