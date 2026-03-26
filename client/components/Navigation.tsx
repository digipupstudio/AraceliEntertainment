import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className="bg-black border-b border-[#E50914] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between" aria-label="Main Navigation">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#E50914] font-['Roboto'] leading-tight shrink-0"
          onClick={() => setOpen(false)}
        >
          Araceli<br className="hidden" />&nbsp;Entertainment
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center font-['Roboto'] text-sm lg:text-base">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`transition-colors font-medium ${
                  isActive(to)
                    ? "text-[#E50914]"
                    : "text-white hover:text-[#E50914]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="bg-[#E50914] text-white font-medium px-5 py-2 rounded text-sm hover:bg-red-700 transition-colors"
            >
              Start Streaming
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded focus:outline-none focus:ring-2 focus:ring-[#E50914]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0a0a0a] border-t border-[#E50914]/30"
          >
            <ul className="flex flex-col py-4">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block px-6 py-3 font-['Roboto'] text-base transition-colors ${
                      isActive(to)
                        ? "text-[#E50914] bg-[#E50914]/5"
                        : "text-white hover:text-[#E50914] hover:bg-[#E50914]/5"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="px-6 pt-3 pb-2">
                <Link
                  to="/contact"
                  className="block text-center bg-[#E50914] text-white font-['Roboto'] font-medium px-5 py-3 rounded hover:bg-red-700 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Start Streaming
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
