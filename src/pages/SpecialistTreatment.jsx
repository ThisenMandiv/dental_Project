import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import doctorImage from '../assets/doctor-image.png';

const SpecialistTreatment = () => {
  const services = [
    {
      title: 'Root Canal Treatment',
      description: 'Advanced endodontic treatment to save infected or damaged teeth and relieve pain.',
      price: 'From £350'
    },
    {
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution using titanium implants for natural-looking results.',
      price: 'From £2,000'
    },
    {
      title: 'Orthodontic Treatment',
      description: 'Comprehensive teeth straightening solutions for children and adults.',
      price: 'From £1,500'
    },
    {
      title: 'Periodontal Treatment',
      description: 'Specialized gum disease treatment and maintenance therapy.',
      price: 'From £200'
    },
    {
      title: 'Oral Surgery',
      description: 'Complex tooth extractions and minor oral surgical procedures.',
      price: 'From £150'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-indigo-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Specialist Treatment</h1>
            <p className="text-xl leading-relaxed">
              Advanced dental procedures performed by our specialist dentists.
              Complex treatments requiring expertise and precision for optimal results.
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
                  <span className="text-indigo-600 font-bold text-lg">{service.price}</span>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Specialist Treatment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={doctorImage}
                alt="Specialist treatment"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Our Specialist Treatment?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-indigo-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Highly qualified specialist dentists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-indigo-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">State-of-the-art technology and equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-indigo-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Pain-free and comfortable procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-indigo-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Comprehensive aftercare support</span>
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

export default SpecialistTreatment;
