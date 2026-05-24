import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/navLinks";
import logo from "../../assets/logo1.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      setMenuOpen(false); // auto close mobile menu on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-24 transition-all duration-300
        ${
          scrolled
            ? "bg-[#393838ee] border-b border-red-600/20 backdrop-blur-md shadow-md"
            : "bg-[#343232]"
        }`}
      >
        {/* LOGO */}
        <div
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Khyber Quick Logo"
            className="w-16 h-16 bg-white rounded-lg object-contain"
          />

          <div className="leading-tight">
            <div className="text-white font-extrabold text-lg">
              KHYBER <span className="text-red-500">QUICK</span>
            </div>
            <div className="text-white text-[10px] tracking-widest font-extrabold">
              HAR JAGA • HAR WAQT DELIVERY
            </div>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="hover:text-red-500 hover:scale-105 transition"
            >
              {l.label}
            </button>
          ))}

          <a
            href="https://wa.me/923339433704"
            target="_blank"
            rel="noreferrer"
            className="bg-red-600 hover:bg-red-700 hover:shadow-lg text-white px-5 py-2 rounded-md text-sm font-bold transition"
          >
            Order Now
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-24 left-0 right-0 bg-[#111] z-40 border-t border-red-600 md:hidden overflow-hidden transition-all duration-300
        ${
          menuOpen
            ? "max-h-96 opacity-100 py-5"
            : "max-h-0 opacity-0 pointer-events-none py-0"
        }`}
      >
        <div className="px-[5%] flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="hover:text-red-500 hover:scale-105 transition text-left"
            >
              {l.label}
            </button>
          ))}

          <a
            href="https://wa.me/923339433704"
            target="_blank"
            rel="noreferrer"
            className="bg-red-600 hover:bg-red-700 hover:shadow-lg text-white px-5 py-3 rounded-md text-sm font-bold transition text-center"
          >
            📦 Order Now
          </a>
        </div>
      </div>
    </>
  );
}