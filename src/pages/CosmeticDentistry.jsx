import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import doctorImage from '../assets/doctor-image.png';

const CosmeticDentistry = () => {
  const services = [
    {
      title: 'Teeth Whitening',
      description: 'Professional teeth whitening treatments for a brighter, more confident smile using safe, effective methods.',
      price: 'From £299'
    },
    {
      title: 'Porcelain Veneers',
      description: 'Custom-made thin shells of porcelain that cover the front surface of teeth to improve appearance.',
      price: 'From £650'
    },
    {
      title: 'Composite Bonding',
      description: 'Tooth-colored resin material applied to teeth to improve shape, color, and overall appearance.',
      price: 'From £150'
    },
    {
      title: 'Smile Makeovers',
      description: 'Comprehensive cosmetic treatment plans combining multiple procedures for your perfect smile.',
      price: 'From £1,200'
    },
    {
      title: 'Invisalign Clear Aligners',
      description: 'Nearly invisible aligners to straighten teeth without traditional metal braces.',
      price: 'From £2,500'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-purple-900 to-pink-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Cosmetic Dentistry</h1>
            <p className="text-xl leading-relaxed">
              Transform your smile with our advanced cosmetic dental treatments.
              From teeth whitening to complete smile makeovers, we help you achieve the smile you've always wanted.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600 font-bold text-lg">{service.price}</span>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={doctorImage}
                alt="Cosmetic dentistry"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Benefits of Cosmetic Dentistry</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-purple-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Boost your confidence and self-esteem</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-purple-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Improve your oral health</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-purple-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Long-lasting, natural-looking results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-purple-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Advanced technology and techniques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CosmeticDentistry;
