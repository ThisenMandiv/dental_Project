import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import offer from '../assets/offerbg.jpg';
import invisalign from '../assets/invisalign.png';
import facial from '../assets/facial.png';
import imple from '../assets/imple.png';
import couple from '../assets/couple.png';
import apple from '../assets/apple.png';
import apple1 from '../assets/apple1.png';
import teethw from '../assets/teeth-whitening.jpg';

const SpecialOffersPage = () => {
  const offers = [
    { title: "Invisalign", subtitle: "Free Consultation", icon: "🦷", image: invisalign },
    { title: "Facial Aesthetics", subtitle: "Complimentary Consultation", icon: "💉", image: facial },
    { title: "Consultation Fee", subtitle: "Implant/ologist consultation fee is now £90", icon: "🔍", image: imple },
    { title: "New Patient", subtitle: "New patient offer only £75", icon: "🦷", image: couple },
    { title: "Free Denplan", subtitle: "Free Denplan Assessment", icon: "🦷", image: apple },
    { title: "Denplan Offer", subtitle: "Denplan Essentials Offer", icon: "🦷", image: apple1 },
    { title: "£50 Off", subtitle: "£50 off Teeth Whitening", icon: "🦷", image: teethw },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[480px] sm:h-[550px] md:h-[700px] bg-cover bg-center"
        style={{ backgroundImage: `url(${offer})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 sm:px-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-snug">
            Dental Special <br className="hidden sm:block" /> Offers
          </h1>
          <div className="bg-[#5B7FA6]/90 text-white p-4 sm:p-6 rounded-2xl shadow-lg w-full max-w-2xl">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              As your experienced dentists in Billericay, we understand that sometimes our patients
              may want some discounts on popular treatments. So on this page we will regularly post
              future dental special offers especially for you.
            </p>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="bg-[#F0F8FF] py-16 sm:py-20 px-4 sm:px-6 md:px-12 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 bg-gray-200">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#E6F3FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{offer.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        {offer.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">{offer.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SpecialOffersPage;
