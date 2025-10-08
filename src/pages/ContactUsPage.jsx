import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Appointment request submitted!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-white"></div>
        
        <div className="relative container mx-auto px-4 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Book Your Hygienist Appointment With Our Lovely And Experienced Hygienist For A Pearly White Smile.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-200 h-96">
                <img 
                  src="/path-to-assets/dentist-contact.jpg" 
                  alt="Dentist with dental model"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Opening Times & Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Opening Times */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Opening Times</h2>
              
              <div className="space-y-1">
                {/* Header */}
                <div className="grid grid-cols-3 gap-4 bg-gray-300 p-3 rounded-lg font-semibold text-sm">
                  <div></div>
                  <div className="text-center">Morning</div>
                  <div className="text-center">Afternoon</div>
                </div>

                {/* Monday */}
                <div className="grid grid-cols-3 gap-4 bg-gray-100 p-3 rounded-lg text-sm">
                  <div className="font-medium">Monday</div>
                  <div className="text-center">8AM - 1AM</div>
                  <div className="text-center">2PM - 6PM</div>
                </div>

                {/* Tuesday */}
                <div className="grid grid-cols-3 gap-4 bg-gray-100 p-3 rounded-lg text-sm">
                  <div className="font-medium">Tuesday</div>
                  <div className="text-center">8AM - 5PM</div>
                  <div className="text-center">2PM - 5:30PM</div>
                </div>

                {/* Wednesday */}
                <div className="grid grid-cols-3 gap-4 bg-gray-100 p-3 rounded-lg text-sm">
                  <div className="font-medium">Wednesday</div>
                  <div className="text-center">8AM - 5PM</div>
                  <div className="text-center">2PM - 5:30PM</div>
                </div>

                {/* Thursday */}
                <div className="grid grid-cols-3 gap-4 bg-gray-100 p-3 rounded-lg text-sm">
                  <div className="font-medium">Thursday</div>
                  <div className="text-center">10 AM - 3PM</div>
                  <div className="text-center">2PM - 7PM</div>
                </div>

                {/* Friday */}
                <div className="grid grid-cols-3 gap-4 bg-gray-100 p-3 rounded-lg text-sm">
                  <div className="font-medium">Friday</div>
                  <div className="text-center">9 AM - 5PM</div>
                  <div className="text-center">2PM - 6PM</div>
                </div>

                {/* Saturday */}
                <div className="grid grid-cols-3 gap-4 bg-gray-100 p-3 rounded-lg text-sm">
                  <div className="font-medium">Saturday (2 per month)</div>
                  <div className="text-center">8AM - 12:30PM</div>
                  <div className="text-center">Closed</div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <a href="tel:01277658374" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                      01277658374
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <a href="mailto:15thepantiles@mydentist.org.uk" className="text-lg font-semibold text-gray-900 hover:text-blue-600 break-all">
                      15thepantiles@mydentist.Org.Uk
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Next To Co-Op On Park Off Queens Park Avenue Billericay Essex CM12 0UA,
                    </p>
                  </div>
                </div>

                {/* Parking Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Free Parking,<br />
                      Disabled Parking By Front Door,<br />
                      Ground Floor Easy Access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Find Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facebook QR */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-4xl">
                  📱
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
            </div>

            {/* Instagram QR */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-4xl">
                  📱
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>

            {/* X (Twitter) QR */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-4xl">
                  📱
                </div>
              </div>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking & Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Booking Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Book <span className="text-blue-600">Your Appointment</span>
              </h2>
              
              <div className="space-y-4 mt-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="text"
                  name="service"
                  placeholder="Service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="bg-blue-50 rounded-2xl overflow-hidden shadow-lg h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.889!2d0.419!3d51.629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM3JzQ0LjQiTiAwwrAyNScwOC40IkU!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pantiles Dental Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Images */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl overflow-hidden h-48 bg-gray-200">
              <img 
                src="/path-to-assets/footer-img-1.jpg" 
                alt="Dental service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 bg-gray-200">
              <img 
                src="/path-to-assets/footer-img-2.jpg" 
                alt="Dental service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 bg-gray-200">
              <img 
                src="/path-to-assets/footer-img-3.jpg" 
                alt="Dental service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 bg-gray-200">
              <img 
                src="/path-to-assets/footer-img-4.jpg" 
                alt="Dental service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D2B5B] text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Invisalign & Pantiles Dental */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">✱</div>
                <span className="text-xl font-bold">invisalign</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Pantiles Dental</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                we have an array of treatments available for every member of your family to ensure everyone, regardless of budget, has access to quality dental care
              </p>
              <a href="#" className="text-xs text-blue-400 hover:underline mt-3 inline-block">
                Practice Complaints Procedure for Patients
              </a>
            </div>

            {/* Straumann & Quick Links */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">⚡ straumann implants</span>
              </div>
              <h4 className="text-base font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="#fees" className="text-gray-300 hover:text-white">Fees</a></li>
                <li><a href="#offers" className="text-gray-300 hover:text-white">Special Offers</a></li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-base font-semibold mb-3">About Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#events" className="text-gray-300 hover:text-white">Events</a></li>
                <li><a href="#testimonial" className="text-gray-300 hover:text-white">Testimonial</a></li>
              </ul>
            </div>

            {/* Enlighten & Contact */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#0D2B5B] font-bold text-xs">e</span>
                </div>
                <div className="text-xs">
                  <div className="font-bold">ENLIGHTEN</div>
                  <div>TEETH WHITENING</div>
                </div>
              </div>
              <h4 className="text-base font-semibold mb-3">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>01277 658374</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={14} className="mt-1" />
                  <span className="break-all">15thepantiles@mydentist.org.uk</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-1" />
                  <span>15 The Pantiles, Queens Park Ave, Billericay CM12 0UA, United Kingdom</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-xs text-gray-400">
              © 2025 15 The Pantiles Dental Practice. Designed By Ceylon Innovation. Last updated on: 21st of March 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;