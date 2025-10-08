import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';   // optional


const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      {
        label: 'General Dentistry',
        href: '/services/general-dentistry',
        description: 'Routine check-ups, fillings, and essential treatments'
      },
      {
        label: 'Cosmetic Dentistry',
        href: '/services/cosmetic-dentistry',
        description: 'Teeth whitening, veneers, and smile makeovers'
      },
      {
        label: 'Facial Aesthetics',
        href: '/services/facial-aesthetics',
        description: 'Anti-wrinkle treatments and dermal fillers'
      },
      {
        label: 'Denplan Care',
        href: '/services/denplan-care',
        description: 'Monthly payment plans for regular dental care'
      },
      {
        label: 'Specialist Treatment',
        href: '/services/specialist-treatment',
        description: 'Root canals, implants, and complex procedures'
      },
      {
        label: 'NHS Services',
        href: '/services/nhs',
        description: 'NHS dental services for eligible patients'
      },
      {
        label: 'Emergency Dental',
        href: '/services/emergency-dental',
        description: 'Same-day emergency appointments'
      }
    ]
  },
  { label: 'Fees', href: '/fees' },
  { label: 'Special Offers', href: '/offers' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      style={{ width: 1100, height: 60 }}            /* exact Figma dims */
    >
      <div className="w-full h-full flex items-center justify-between px-8 bg-[#FFFFFF]/48 backdrop-blur-md shadow-lg rounded-[2rem]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-black">
          <img src={logo} alt="Logo" className="h-10" />
          
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12 text-black">
          {navLinks.map((l) => (
            l.dropdown ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button className="flex items-center gap-1 font-bold hover:text-black transition">
                  {l.label}
                  <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {servicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 z-50"
                    >
                      {l.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-semibold text-gray-800">{item.label}</div>
                          <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="font-bold hover:text-black transition"
              >
                {l.label}
              </Link>
            )
          ))}
          <button
            className="ml-4 bg-[#223B6E] text-white px-15 py-2 rounded-full hover:bg-blue-900 transition font-bold"
          >
            Book Now
          </button>
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
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-medium hover:text-gray-300 transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-block w-full text-center bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
