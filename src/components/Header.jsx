import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white/30 shadow-md fixed w-11/12 top-5 left-1/2 transform -translate-x-1/2 z-50 rounded-[3rem] py-0 px-3 h-[50px] flex items-center">
      {/* ↓ decreased height from h-[60px] to h-[50px] */}
      <nav className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Pantiles Dental Logo"
            className="h-7 md:h-9 object-contain" // decreased logo height accordingly
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8">
          <li><Link to="/" className="text-black font-medium hover:text-black">Home</Link></li>
          <li><Link to="/about" className="text-black font-medium hover:text-black">About Us</Link></li>
          <li><Link to="/services" className="text-black font-medium hover:text-black">Services</Link></li>
          <li><Link to="/fees" className="text-black font-medium hover:text-black">Fees</Link></li>
          <li><Link to="/special-offers" className="text-black font-medium hover:text-black">Special Offers</Link></li>
          <li><Link to="/contact" className="text-black font-medium hover:text-black">Contact Us</Link></li>
        </ul>

        {/* Desktop Book Now Button */}
        <button className="hidden lg:block bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-300 text-sm">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-black transition duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />} {/* decreased icon size */}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-3 px-4 py-2">
            <li><Link to="/" onClick={closeMenu} className="block text-black font-medium py-1">Home</Link></li>
            <li><Link to="/about" onClick={closeMenu} className="block text-black font-medium py-1">About Us</Link></li>
            <li><Link to="/services" onClick={closeMenu} className="block text-black font-medium py-1">Services</Link></li>
            <li><Link to="/fees" onClick={closeMenu} className="block text-black font-medium py-1">Fees</Link></li>
            <li><Link to="/special-offers" onClick={closeMenu} className="block text-black font-medium py-1">Special Offers</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className="block text-black font-medium py-1">Contact Us</Link></li>
            <li className="pt-2">
              <button className="w-full bg-blue-800 text-white px-3 py-2 rounded hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header