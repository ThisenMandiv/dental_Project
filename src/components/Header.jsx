// Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Fees', href: '/fees' },
  { label: 'Special Offers', href: '/special-offers' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Team', href: '/team' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1600px]">
      <div className="w-full h-[60px] flex items-center justify-between px-4 md:px-8 bg-white/50 backdrop-blur-md shadow-lg rounded-3xl md:rounded-[2rem]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-black">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-lg md:text-xl font-bold text-[#223B6E]">15 The Pantiles</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-12 text-black font-sans">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`font-bold hover:text-black transition ${
                location.pathname === l.href ? 'text-[#223B6E]' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#book"
            className="ml-4 bg-[#223B6E] text-white px-5 py-2 rounded-full hover:bg-blue-900 transition font-bold"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Burger */}
        <button
          className="lg:hidden text-[#223B6E] z-50 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden  overflow-hidden bg-[#1E3A8A]/90 backdrop-blur-md rounded-2xl"
          >
            <ul className="flex flex-col gap-2 px-6 py-4 text-white">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2 font-medium hover:text-gray-300 transition ${
                      location.pathname === l.href ? 'text-white font-bold' : ''
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-block w-full text-center bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
