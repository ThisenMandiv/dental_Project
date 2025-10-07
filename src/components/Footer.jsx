import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import invisalign from '../assets/invisalign-logo.png'; // Ensure this path points to your actual logo image
import straumann from '../assets/straumann-logo.png'; // Ensure this path points to your actual logo image
import enlighten from '../assets/enlighten-logo.png'; // Ensure this path points to your actual logo image

const Footer = () => {
  return (
    <footer className="bg-[#091B3C] text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Pantiles Dental */}
          <div className="col-span-1">
            <a href="#" className="text-2xl font-bold mb-4">
              <img src={invisalign} alt="invisalign" className="h-10 mr-4" />
              
            </a>
            <h3 className="text-2xl font-bold mb-4">Pantiles Dental</h3>
            <p className="text-gray-300">
              We have an array of treatments available for every member of your family to ensure everyone, regardless of budget, has access to quality dental care.
            </p>
            <a href="#" className="text-sm text-gray-400 hover:underline mt-4 inline-block">
              Practice Complaints Procedure for Patients
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <a href="#" className="text-xl font-bold mb-4">
              <img src={straumann} alt="straumann implants" className="h-10 mr-4" />
             
            </a>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Fees</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Special Offers</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <a href="#" className="text-xl font-bold mb-4">
              <img src={enlighten} alt="Enlighten Teeth Whitening" className="h-10 mr-4" />
              
            </a>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Testimonial</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-3" />
                <span>01277 658374</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3" />
                <a href="mailto:15thepantiles@mydentist.org.uk" className="hover:text-white">
                  15thepantiles@mydentist.org.uk
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-3" />
                <span>15 The Pantiles, Queens Park Ave, Billericay CM12 0UA, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 15 The Pantiles Dental Practice. Designed By Ceylon Innovation. Last updated on: 21st of March 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;