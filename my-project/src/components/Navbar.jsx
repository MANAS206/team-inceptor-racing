import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
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
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800 px-10 py-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold text-red-500 cursor-pointer"
          onClick={() => handleClick("home")}
      >
        INCEPTOR
      </h1>

      <ul className="flex gap-6 text-sm">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`cursor-pointer pb-1 transition-all duration-300 ${
              active === item.id
                ? "text-red-500 border-b-2 border-red-500"
                : "hover:text-red-400"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}