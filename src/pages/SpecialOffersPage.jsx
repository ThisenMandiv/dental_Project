import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import offer from '../assets/offerbg.jpg';
import invisalign from '../assets/invisalign.png'; // Ensure this path points to your actual logo image
import facial from '../assets/facial.png'; 
import imple from '../assets/imple.png';
import couple from '../assets/couple.png';
import apple from '../assets/apple.png';
import apple1 from '../assets/apple1.png';
import teethw from '../assets/teeth-whitening.jpg';

const SpecialOffersPage = () => {
  const offers = [
    {
      title: "Invisalign",
      subtitle: "free consultation",
      icon: "🦷",
      image: invisalign,
    },
    {
      title: "Facial Aesthetics",
      subtitle: "Complimentary consultation",
      icon: "💉",
      image: facial
    },
    {
      title: "consultation fee",
      subtitle: "Implant/ologist consultation fee is now £90",
      icon: "🔍",
      image: imple,
    },
    {
      title: "New patient",
      subtitle: "New patient offer only £75",
      icon: "🦷",
      image: couple,
    },
    {
      title: "Free Denplan",
      subtitle: "Free Denplan Assessment",
      icon: "🦷",
      image: apple,
    },
    {
      title: "Denplan Offer",
      subtitle: "Denplan Essentials offer",
      icon: "🦷",
      image: apple1,
    },
    {
      title: "£50 off",
      subtitle: "£50 off Teeth Whitening",

      icon: "🦷",
      image: teethw,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
     <Header />
      {/* Hero Section */}
      <section className="relative mt-0 h-[730px] bg-cover bg-center" style={{backgroundImage: `url(${offer})`}}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        <div className="absolute mt-40 mx-20 inset-0 flex items-start justify-start px-8 pt-16">
          <h1 className="text-xl md:text-6xl font-bold text-white">
            Dental Special<br />Offers
          </h1>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="bg-[#5B7FA6] text-white p-6 rounded-2xl shadow-lg">
            <p className="text-center text-base md:text-lg leading-relaxed">
              As Your Experienced Dentists In Billericay We Understand That Sometimes 
              Our Patients May Want Some Discounts On Popular Treatments. So On This 
              Page We Will Regularly Post Future Dental Special Offers Especially For You.
            </p>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="bg-[#F0F8FF] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {offers.map((offer, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative h-64 bg-gray-200">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#E6F3FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{offer.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{offer.title}</h3>
                      <p className="text-sm text-gray-600">{offer.subtitle}</p>
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
