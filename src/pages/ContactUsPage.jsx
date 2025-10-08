import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import fbqr from '../assets/fbqr.png'; // Ensure this path points to your actual QR code image
import instaqr from '../assets/instaqr.png'; // Ensure this path points to your actual QR code image
import twitterqr from '../assets/twitterqr.png'; // Ensure this path points to your actual QR code image
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
      <Header />
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
               <img src={fbqr} alt="Facebook" className="w-6 h-6 text-white" />
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
                 <img src={instaqr} alt="instagram" className="w-6 h-6 text-white" />
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
                 <img src={twitterqr} alt="twitter" className="w-6 h-6 text-white" />
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
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39619.5173618112!2d0.413592!3d51.637499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c0f76404dcfd%3A0x8406ec58bbfb1189!2s15%20The%20Pantiles%20Dental%20Practice%20Billericay%2C%20Essex!5e0!3m2!1sen!2sus!4v1759916415163!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Pantiles Dental Location"
  ></iframe>
</div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;