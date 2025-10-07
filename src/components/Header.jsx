import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; // Ensure this path points to your actual logo image

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
    <header className="bg-white shadow-md fixed w-11/12 top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-4xl py-0 px-4">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Pantiles Dental Logo" className="h-10 md:h-12" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-800 font-medium transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-800 font-medium transition duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-700 hover:text-blue-800 font-medium transition duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/fees" className="text-gray-700 hover:text-blue-800 font-medium transition duration-300">
              Fees
            </Link>
          </li>
          <li>
            <Link to="/special-offers" className="text-gray-700 hover:text-blue-800 font-medium transition duration-300">
              Special Offers
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-800 font-medium transition duration-300">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Book Now Button */}
        <button className="hidden lg:block bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Book Now
        </button>

        {/* Mobile Burger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 hover:text-blue-800 transition duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block text-gray-700 hover:text-blue-800 font-medium py-2 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="block text-gray-700 hover:text-blue-800 font-medium py-2 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={closeMenu}
                className="block text-gray-700 hover:text-blue-800 font-medium py-2 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/fees"
                onClick={closeMenu}
                className="block text-gray-700 hover:text-blue-800 font-medium py-2 transition duration-300"
              >
                Fees
              </Link>
            </li>
            <li>
              <Link
                to="/special-offers"
                onClick={closeMenu}
                className="block text-gray-700 hover:text-blue-800 font-medium py-2 transition duration-300"
              >
                Special Offers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block text-gray-700 hover:text-blue-800 font-medium py-2 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li className="pt-2">
              <button className="w-full bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}