import React from 'react';
import Footer from '../components/Footer';
import cosmatichero from '../assets/cosmetic-hero.jpeg'
import cosmetics1 from '../assets/cosmetics1.jpeg'
import cosmetics2 from '../assets/cosmetics2.jpeg'
import cosmetics3 from '../assets/cosmetics3.jpeg'
import cosmetics4 from '../assets/cosmetics4.jpeg'
import cosmetics5 from '../assets/cosmetics5.jpeg'

const CosmeticDentistry = () => {
  const services = [
    {
      title: 'Veneers from',
      price: '£750',
      image: cosmetics1
    },
    {
      title: 'Dental Implants',
      price: '£2495',
      image: cosmetics2
    },
    {
      title: 'Tooth Whitening',
      price: '£349',
      image: cosmetics3
    },
    {
      title: 'Facial Aesthetics',
      price: '£300',
      image: cosmetics4
    },
    {
      title: 'Invisalign',
      price: '£2300',
      image: cosmetics5
    }
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${cosmatichero})`
        }}
      >
        <div className="relative z-10 flex items-center justify-start min-h-screen px-4 md:px-8">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Cosmetic <br /> Dentistry
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="px-4 md:px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Info Box */}
          <div className="mb-16 bg-white border-2 border-gray-200 p-8 md:p-12 rounded-2xl shadow-lg">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800">
              Are you looking for the best Cosmetic Dentist in Essex? Look no further than The Pantiles Dental Practice. As well as general dentistry services, we also provide a number of cosmetic dentistry services to the people of Billericay, Basildon, Ingatestone and beyond.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 mt-3">
              Cosmetic dentistry is fast becoming a necessity as more and more people strive for the ultimate Hollywood smile. Here at Pantiles Dental however, we offer a range of different cosmetic dentistry services to ensure everyone gets the right course of treatment for them. Let's take a closer look at just some of the treatments available in our billericay dental practice.
            </p>
          </div>

          {/* Services Grid - First Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-[#223B6E] text-white text-center py-3 px-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-2xl font-bold mt-1">{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services Grid - Second Row */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <div key={index + 3} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-[#223B6E] text-white text-center py-3 px-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-2xl font-bold mt-1">{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CosmeticDentistry;
