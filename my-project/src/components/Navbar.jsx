import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Car", id: "car" },
    { name: "Team", id: "team" },
    { name: "Sponsors", id: "sponsors" },
    { name: "Contact", id: "contact" },
    { name: "Gallery", path: "/gallery", type: "route" },
  ];

  // SCROLL EXECUTION ENGINE
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // Navbar height offset
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  // HANDLES BOTH SAME-PAGE SCROLLING AND CROSS-PAGE ROUTING
  const handleClick = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      // If not on home page, navigate home first with state telling it where to scroll
      navigate("/", { state: { scrollToId: id } });
    } else {
      // If already home, scroll immediately
      scrollToSection(id);
    }
  };

  // LISTEN FOR INCOMING REDIRECTION SCROLL REQUESTS
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollToId) {
      // Small timeout ensures the DOM elements have safely mounted before calculating scroll positions
      const timer = setTimeout(() => {
        scrollToSection(location.state.scrollToId);
        // Clear history state to avoid scrolling again on manual page refreshes
        navigate(".", { replace: true, state: {} });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  return (
    <>
      {/* TOP WHITE BAR */}
      <div className="bg-white py-3 px-4 md:px-10 border-b">
        <div className="flex items-center justify-between">
          
          {/* LEFT LOGO */}
          <a href="https://www.aitpune.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/ait_logo.png"
              alt="AIT Pune Logo"
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
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/baja1.svg"
              alt="Indian Army Logo"
              className="h-10 md:h-16 object-contain"
            />
          </a>
        </div>
      </div>

      {/* FIXED NAVBAR */}
      <nav className="sticky top-0 z-50 bg-green-700 text-white">
        <div className="flex items-center justify-between px-6 md:px-16 h-14">

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="md:hidden text-2xl cursor-pointer bg-transparent border-none text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            ☰
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-6 text-sm font-medium mx-auto">
            {navItems.map((item) => (
              <li key={item.id || item.path}>
                {item.type === "route" ? (
                  <Link to={item.path} className="hover:text-gray-200 transition">
                    {item.name}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleClick(item.id)}
                    className="cursor-pointer hover:text-gray-200 transition bg-transparent border-none text-white font-medium p-0"
                  >
                    {item.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE DROPDOWN */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-green-200 text-black">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer hover:text-green-800 font-medium w-full text-center py-1"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className="cursor-pointer hover:text-green-800 font-medium w-full text-center py-1 bg-transparent border-none text-black text-base"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        )}
      </nav>
    </>
  );
}