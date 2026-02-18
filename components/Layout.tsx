import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", path: "/about" },
    { name: "VISION", path: "/vision" },
    { name: "PROGRAMS", path: "/programs" },
    { name: "COLLABORATION", path: "/collaboration" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-brand-darkest/90 py-3 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Left: Brand */}
        <Link to="/" className="flex items-center gap-4 group">
          <img src="/vedsutra.png" alt="" srcset="" width="50" height="50" />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-display font-black tracking-tighter text-white uppercase group-hover:text-brand-gold transition-colors">
              Vedasutra
            </span>
            <span className="text-[8px] font-bold tracking-[0.4em] text-gray-500 uppercase">
              Foundation
            </span>
          </div>
        </Link>

        {/* Center: Navigation */}
        <div className="hidden lg:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-display text-[11px] font-bold tracking-[0.2em] transition-all hover:text-white uppercase relative group ${
                location.pathname === link.path ? "text-white" : "text-gray-400"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-brand-gold transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="btn-pill px-8 py-2.5 bg-white text-brand-darkest font-display text-[11px] font-extrabold tracking-[0.15em] uppercase hover:bg-brand-gold transition-all shadow-lg"
          >
            CONTACT
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-brand-darkest/95 backdrop-blur-2xl transition-all duration-700 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="h-full flex flex-col justify-center items-center gap-8 p-12">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-black tracking-widest text-white uppercase"
            >
              {l.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-pill px-10 py-4 bg-brand-gold text-brand-darkest text-lg font-display font-black tracking-widest uppercase"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkest border-t border-white/5 pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-4">
              <img
                src="/vedsutra.png"
                alt=""
                srcset=""
                width="50"
                height="50"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black tracking-tighter text-white uppercase">
                  Vedasutra
                </span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-gray-600 uppercase">
                  Foundation
                </span>
              </div>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed text-base font-light">
              Engineering a future of industrial excellence through ethical
              robotics.
            </p>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-8 opacity-30">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-500 text-[9px] font-black tracking-[0.2em] uppercase">
              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/vision"
                  className="hover:text-brand-gold transition-colors"
                >
                  Vision 2035
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="hover:text-brand-gold transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-8 opacity-30">
              Legal Archive
            </h4>
            <ul className="space-y-4 text-gray-500 text-[9px] font-black tracking-[0.2em] uppercase">
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600 uppercase tracking-[0.4em] font-black">
          <p>© 2025 VEDASUTRA FOUNDATION.</p>
          <div className="flex gap-8 mt-6 md:mt-0 items-center">
            <span className="italic text-brand-gold/40">
              कौशलम् एव संस्कारः
            </span>
            <span>SYS_ACT_2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-gold selection:text-white bg-brand-darkest">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
