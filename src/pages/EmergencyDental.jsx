import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import doctorImage from '../assets/doctor-image.png';

const EmergencyDental = () => {
  const emergencies = [
    {
      title: 'Severe Toothache',
      description: 'Intense, persistent tooth pain that may indicate infection or other serious issues.',
      urgent: true
    },
    {
      title: 'Broken or Chipped Tooth',
      description: 'Trauma to teeth requiring immediate attention to prevent further damage.',
      urgent: true
    },
    {
      title: 'Lost Filling or Crown',
      description: 'Missing restorations that need prompt replacement to protect the tooth.',
      urgent: false
    },
    {
      title: 'Dental Abscess',
      description: 'Painful infection that requires immediate treatment to prevent spreading.',
      urgent: true
    },
    {
      title: 'Gum Injury or Bleeding',
      description: 'Trauma to gums or uncontrolled bleeding requiring professional care.',
      urgent: true
    },
    {
      title: 'Loose or Knocked Out Tooth',
      description: 'Dental trauma that needs immediate attention to save the tooth.',
      urgent: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-red-900 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Emergency Dental Care</h1>
            <p className="text-xl leading-relaxed">
              Dental emergencies can happen at any time. We're here to help when you need us most.
              Same-day emergency appointments available for registered patients.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Need Emergency Dental Care?</h2>
            <div className="bg-red-600 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Call Us Immediately</h3>
              <p className="text-3xl font-bold mb-2">01344 420 078</p>
              <p className="text-lg">Available during opening hours for emergency appointments</p>
            </div>
            <p className="text-lg text-gray-700">
              For life-threatening emergencies, please call 999 or visit your nearest A&E department.
            </p>
          </div>
        </div>
      </section>

      {/* Common Emergencies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Common Dental Emergencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencies.map((emergency, index) => (
              <div key={index} className={`rounded-2xl p-6 shadow-lg ${emergency.urgent ? 'bg-red-50 border-l-4 border-red-600' : 'bg-gray-50'}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full mt-2 ${emergency.urgent ? 'bg-red-600' : 'bg-orange-400'}`}></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{emergency.title}</h3>
                    <p className="text-gray-600 mb-3">{emergency.description}</p>
                    {emergency.urgent && (
                      <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Requires Immediate Attention
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What To Do */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={doctorImage}
                alt="Emergency dental care"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">What To Do In A Dental Emergency</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Contact us immediately for same-day appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">For knocked-out teeth, keep in milk and come immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Control bleeding with clean gauze or cloth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Take pain relief if needed (not aspirin for children)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Registered patients get priority emergency slots</span>
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

export default EmergencyDental;
