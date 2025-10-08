import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png'; // Ensure this path points to your actual logo image

const navLinks = [
  { label: 'Home', href: '/home' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Fees', href: '/fees' },
  { label: 'Special Offers', href: '/offers' },
  { label: 'ContactUsPage', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[70%] md:w-[70%] lg:w-[950px] max-w-[1100px]">
      <div className="w-full h-[60px] flex items-center justify-between px-4 md:px-8 bg-white/50 backdrop-blur-md shadow-lg rounded-3xl md:rounded-[2rem]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-lg md:text-xl font-bold text-black z-50">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-20 md:h-10" />
          
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-12 text-black font-sans">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-bold hover:text-blue-900 transition text-sm xl:text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="ml-2 xl:ml-4 bg-[#223B6E] text-white px-6 xl:px-8 py-2 rounded-full hover:bg-blue-900 transition font-bold text-sm xl:text-base whitespace-nowrap"
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
      <div
        className={`lg:hidden absolute top-full left-0 right-0 mt-2 overflow-hidden bg-white/95 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 ease-in-out ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 text-[#223B6E]">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-4 font-semibold hover:bg-blue-50 rounded-lg transition"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-[#223B6E] text-white px-5 py-3 rounded-full hover:bg-blue-900 transition font-bold"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}