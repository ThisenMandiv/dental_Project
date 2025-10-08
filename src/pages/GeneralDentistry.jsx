import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import doctorImage from '../assets/doctor-image.png';

const GeneralDentistry = () => {
  const services = [
    {
      title: 'Dental Examination',
      description: 'Comprehensive dental check-ups including X-rays, oral cancer screening, and treatment planning.',
      price: 'From £45'
    },
    {
      title: 'Fillings and Restorations',
      description: 'High-quality fillings using composite materials that match your natural tooth color.',
      price: 'From £85'
    },
    {
      title: 'Dentures',
      description: 'Complete and partial dentures custom-made for comfort and natural appearance.',
      price: 'From £400'
    },
    {
      title: 'Dental Crowns and Bridges',
      description: 'Porcelain and ceramic restorations to repair and strengthen damaged teeth.',
      price: 'From £550'
    },
    {
      title: 'Dental Hygienist',
      description: 'Professional cleaning, scaling, and polishing to maintain optimal oral health.',
      price: 'From £55'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">General Dentistry</h1>
            <p className="text-xl leading-relaxed">
              Comprehensive dental care for maintaining your oral health and preventing dental problems.
              Our experienced team provides routine check-ups, fillings, and essential treatments.
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
                  <span className="text-blue-600 font-bold text-lg">{service.price}</span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={doctorImage}
                alt="General dentistry"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Our General Dentistry?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Experienced and qualified dentists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Modern equipment and techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Preventive care approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Comfortable and welcoming environment</span>
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

export default GeneralDentistry;
