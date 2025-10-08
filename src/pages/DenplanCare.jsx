import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import doctorImage from '../assets/doctor-image.png';

const DenplanCare = () => {
  const benefits = [
    'All routine dental examinations',
    'All routine dental hygiene treatments',
    'All routine fillings and extractions',
    'All routine X-rays',
    '10% discount on additional treatments',
    'Worldwide dental injury and emergency cover',
    'Emergency dental treatment when away from home'
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-orange-900 to-yellow-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Denplan Care</h1>
            <p className="text-xl leading-relaxed">
              Comprehensive dental payment plan providing regular dental care to maintain your dental health.
              A free dental assessment determines your monthly payment based on your oral health needs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={doctorImage}
                alt="Denplan Care"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">What's Included in Denplan Care?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-2xl text-orange-600 mt-1">•</span>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                  Join Denplan Care Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Denplan Care Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Category A</h3>
              <p className="text-gray-600 mb-6">Good oral health</p>
              <p className="text-3xl font-bold text-blue-600">£18.50/month</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Category B</h3>
              <p className="text-gray-600 mb-6">Moderate treatment needs</p>
              <p className="text-3xl font-bold text-orange-600">£28.50/month</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Category C</h3>
              <p className="text-gray-600 mb-6">Higher treatment needs</p>
              <p className="text-3xl font-bold text-green-600">£38.50/month</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DenplanCare;
