import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import invisalign from '../assets/invisalign-logo.png';
import straumann from '../assets/straumann-logo.png';
import enlighten from '../assets/enlighten-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0A1F3D] text-white pt-16 pb-6">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Column 1: Invisalign & Pantiles Dental */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img 
                src={invisalign} 
                alt="Invisalign" 
                className="h-30 w-auto object-contain mb-2"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Pantiles Dental</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              we have an array of treatments available for every member of your family to ensure everyone, regardless of budget, has access to quality dental care
            </p>
            <a 
              href="#" 
              className="text-xs text-[#4A9FD8] hover:underline inline-block"
            >
              Practice Complaints Procedure for Patients
            </a>
          </div>

          {/* Column 2: Straumann & Quick Links */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img 
                src={straumann} 
                alt="Straumann Implants" 
                className="h-30 w-auto object-contain mb-2"
              />
            </div>
            <h4 className="text-lg font-semibold mb-4 text-[#4A9FD8]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#fees" className="text-gray-300 hover:text-white transition">
                  Fees
                </a>
              </li>
              <li>
                <a href="#offers" className="text-gray-300 hover:text-white transition">
                  Special Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Enlighten & About Us */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img 
                src={enlighten} 
                alt="Enlighten Teeth Whitening" 
                className="h-30 w-auto object-contain mb-2"
              />
            </div>
            <h4 className="text-lg font-semibold mb-4 text-[#4A9FD8]">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#events" className="text-gray-300 hover:text-white transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#testimonial" className="text-gray-300 hover:text-white transition">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-6 text-[#4A9FD8] mt-40">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 flex-shrink-0 text-gray-300" />
                <a 
                  href="tel:01277658374" 
                  className="text-gray-300 hover:text-white transition"
                >
                  01277 658374
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 flex-shrink-0 text-gray-300" />
                <a 
                  href="mailto:15thepantiles@mydentist.org.uk" 
                  className="text-gray-300 hover:text-white transition break-all"
                >
                  15thepantiles@mydentist.org.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-gray-300" />
                <span className="text-gray-300 leading-relaxed">
                  15 The Pantiles, Queens Park Ave, Billericay CM12 0UA, United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-gray-400">
            © 2025 15 The Pantiles Dental Practice. Designed By Ceylon Innovation. Last updated on: 21st of March 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;