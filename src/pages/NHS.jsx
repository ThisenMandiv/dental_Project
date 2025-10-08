import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import doctorImage from '../assets/doctor-image.png';

const NHS = () => {
  const services = [
    {
      title: 'NHS Dental Examination',
      description: 'Routine check-ups and examinations covered by the NHS for eligible patients.',
      band: 'Band 1 - £23.80'
    },
    {
      title: 'NHS Fillings',
      description: 'Basic fillings and simple treatments covered under NHS banding system.',
      band: 'Band 2 - £65.20'
    },
    {
      title: 'NHS Extractions',
      description: 'Tooth extractions and oral surgery procedures covered by NHS.',
      band: 'Band 2 - £65.20'
    },
    {
      title: 'NHS Dentures',
      description: 'Basic denture services provided under the NHS dental contract.',
      band: 'Band 3 - £282.80'
    },
    {
      title: 'Emergency NHS Treatment',
      description: 'Urgent dental care and pain relief for registered NHS patients.',
      band: 'Band 1 - £23.80'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-teal-900 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">NHS Dental Services</h1>
            <p className="text-xl leading-relaxed">
              We have a limited NHS contract providing essential dental services for eligible patients.
              Contact us to check availability and register for NHS dental care.
            </p>
          </div>
        </div>
      </section>

      {/* NHS Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">NHS Dental Charges</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">Band 1</h3>
                  <p className="text-3xl font-bold text-blue-600">£23.80</p>
                  <p className="text-gray-600 mt-2">Examination, diagnosis, and advice</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">Band 2</h3>
                  <p className="text-3xl font-bold text-orange-600">£65.20</p>
                  <p className="text-gray-600 mt-2">Treatment including fillings</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Band 3</h3>
                  <p className="text-3xl font-bold text-green-600">£282.80</p>
                  <p className="text-gray-600 mt-2">Complex treatment including crowns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Available NHS Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-600 font-bold text-lg">{service.band}</span>
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                    Check Availability
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={doctorImage}
                alt="NHS Dental Services"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Register for NHS Dental Care</h2>
              <p className="text-lg text-gray-700 mb-6">
                Due to high demand, we have limited spaces available for new NHS patients.
                Please contact us to check availability and register for NHS dental services.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-teal-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Free dental examinations for children under 18</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-teal-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Subsidized treatment costs for adults</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-teal-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Priority emergency appointments</span>
                </li>
              </ul>
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold">
                Contact Us About NHS Registration
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NHS;
