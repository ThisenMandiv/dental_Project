import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png' // Ensure you have a logo image in the specified path

const Header = () => {
  return (
<header className="bg-white shadow-md fixed w-11/12 top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-4xl py-0 px-4">





      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src= {logo} alt="Pantiles Dental Logo" className="h-12 mr-4" />
        
        </div>
        <ul className="flex space-x-6">
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
        <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Book Now
        </button>
      </nav>
    </header>
  )
}

export default Header