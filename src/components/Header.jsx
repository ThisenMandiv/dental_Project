import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';   // optional
                

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fees', href: '#fees' },
  { label: 'Special Offers', href: '#offers' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      style={{ width: 1100, height: 60 }}            /* exact Figma dims */
    >
      <div className="w-full h-full flex items-center justify-between px-8 bg-[#FFFFFF]/48 backdrop-blur-md shadow-lg rounded-[2rem]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-xl font-bold text-black">
          <img src={logo} alt="Logo" className="h-10" />
          
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12 text-black">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-bold hover:text-black transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="ml-4 bg-[#223B6E] text-white px-15 py-2 rounded-full hover:bg-blue-900 transition font-bold"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Burger */}
        <button
          className="lg:hidden text-white"
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
            className="lg:hidden mt-2 overflow-hidden bg-[#1E3A8A]/90 backdrop-blur-md rounded-2xl"
          >
            <ul className="flex flex-col gap-2 px-6 py-4 text-white">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-medium hover:text-gray-300 transition"
                  >
                    {l.label}
                  </a>
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
