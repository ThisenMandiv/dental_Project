import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Pantiles Dental</h3>
            <p className="text-gray-300">
              15 The Pantiles Dental Practice<br />
              Billericay
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Contact Us</h3>
            <p className="text-gray-300">Phone: [Your Phone Number]</p>
            <p className="text-gray-300">Email: [Your Email]</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pantiles Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer