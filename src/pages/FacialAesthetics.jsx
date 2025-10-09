import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import doctorImage from '../assets/doctor-image.png';

const FacialAesthetics = () => {
  const services = [
    {
      title: 'Anti-Wrinkle Injections',
      description: 'Botulinum toxin injections to reduce fine lines and wrinkles for a more youthful appearance.',
      price: 'From £150'
    },
    {
      title: 'Dermal Fillers',
      description: 'Hyaluronic acid fillers to restore volume, enhance lips, and smooth facial lines.',
      price: 'From £250'
    },
    {
      title: 'Lip Enhancement',
      description: 'Natural-looking lip augmentation to enhance shape, volume, and definition.',
      price: 'From £200'
    },
    {
      title: 'Cheek Enhancement',
      description: 'Restore facial volume and contour cheeks for a more youthful profile.',
      price: 'From £300'
    },
    {
      title: 'Skin Rejuvenation',
      description: 'Advanced treatments to improve skin texture, tone, and overall appearance.',
      price: 'From £180'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-green-900 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Facial Aesthetics</h1>
            <p className="text-xl leading-relaxed">
              Enhance your natural beauty with our professional facial aesthetic treatments.
              Safe, effective procedures performed by qualified practitioners.
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
                  <span className="text-green-600 font-bold text-lg">{service.price}</span>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
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
                alt="Facial aesthetics"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Our Facial Aesthetics?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-green-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Qualified and experienced practitioners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-green-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Premium quality products and materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-green-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Natural-looking results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-green-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Personalized treatment plans</span>
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

export default FacialAesthetics;
