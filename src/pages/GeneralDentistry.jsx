import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';
import dentistpatient from '../assets/dentist-patient.jpg';
import dentures from '../assets/dentures.jpg';
import glfis1 from '../assets/glgif1.gif';
import glfis2 from '../assets/glgif2.gif';
import glfis3 from '../assets/glgif3.gif';
import glfis4 from '../assets/glgif4.gif';
import glfis5 from '../assets/glgif5.gif';
import glfis6 from '../assets/glgif6.gif';
import glfis7 from '../assets/glgif7.gif';

const GeneralDentistry = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { title: 'Dental Examination', price: '£45', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop', gif: glfis1 },
    { title: 'Fillings and Restorations', price: '£45', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop', gif: glfis2 },
    { title: 'Dentures', price: '£1050', image: dentures, gif: glfis3 },
    { title: 'Crowns and Bridges', price: '£595', image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop', gif: glfis4 },
    { title: 'Dental Hygienist', price: '£50', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop', gif: glfis5 },
    { title: 'Root Canal Treatment', price: '£400', image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop', gif: glfis6 },
    { title: 'Root Extraction', price: '£150', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop', gif: glfis7 }
  ];

  const tabs = [
    {
      title: 'General Dental Checkups',
      content: `Regular check ups are an integral part of any dental routine. In order to keep on top of your dental health, you should be having regular professional assessments of your mouth. We recommend that you attend at least once annually however, should you need more regular check-ups, this can be arranged.

During routine check ups, we'll remove plaque and tartar while also testing for gum disease and mouth cancers. Should you need it, we can also provide you with helpful advice with regards to brushing your teeth for maximum benefit while also advising on flossing and mouth wash procedures.

If you're in need of fillings, root canal or even extraction to get your mouth back to being clean, fresh and healthy, our team are on hand to provide whatever treatment you may require.

If you're looking for general dentistry services in Shenfield, Rayleigh or even Wickford, rest assured The Pantiles Dental Practice are here to help.`
    },
    {
      title: 'Our Hygienist Services Are Second To None',
      content: `Visiting a hygienist at least once every six months we believe is crucial to keeping your smile looking and feeling healthy. Not only will a hygienist give your mouth a thorough clean, leaving your pearly whites looking much brighter and whiter but they'll also help prevent gum disease, bad breath and oral cancer.

Our hygienists are equipped with the very best knowledge, skills and tools to tackle those truly hard to reach places. They'll give you a thorough deep clean to ensure even those with a home dental routine that's second to none, leave with a mouth cleaner than they've ever known.`
    },
    {
      title: 'General Dentistry Services In Billericay',
      content: `Rest assured our general dentistry services in Billericay have you covered. Our clients venture from Brentwood to Basildon, Rayleigh and beyond because they know that with The Pantiles Dental Practice, they're in good hands every single step of the way.

You can trust in us to handle your dental history carefully, ensuring your dental health is our priority at all times. From toddlers through to adults, the Pantiles Dental practice is here for you.`
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section - Mobile Optimized */}
      <section
        className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-cover bg-center text-white flex items-center px-4 sm:px-6 md:px-12 lg:px-20"
        style={{ backgroundImage: `url(${dentistpatient})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold z-10 text-left leading-tight"
        >
          General Dentistry
        </motion.h1>
      </section>

      {/* Intro Section - Mobile Optimized */}
      <div className="max-w-5xl mx-auto mt-6 sm:mt-8 md:mt-10 px-4">
        <div className="bg-blue-900 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
          <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
            Regular check ups are an integral part of any dental routine. In order to keep on top of your dental health, we require regular professional assessments of your mouth. We recommend that you attend at least once annually however, should you need more regular check ups, this can be arranged.
          </p>
        </div>
      </div>

      {/* Services Grid - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-[#00072D] px-2">
            Our Dental Services
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-blue-100 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative w-full h-32 sm:h-40 md:h-44 lg:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <img
                    src={service.gif}
                    alt={`${service.title} animation`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
                <div className="p-2 sm:p-3 md:p-4 text-center">
                  <button className="w-full bg-[#00072D] text-white py-2 sm:py-2.5 md:py-3 rounded-lg text-xs sm:text-sm md:text-base font-semibold hover:bg-[#00124a] transition-colors leading-tight">
                    {service.title} <br /> 
                    <span className="text-xs sm:text-sm md:text-base">{service.price}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Tabs Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          {/* Tabs - Scrollable on Mobile */}
          <div className="mb-6 sm:mb-8 md:mb-10 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0">
            <div className="flex gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all whitespace-nowrap ${
                    activeTab === index
                      ? 'bg-gray-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content - Mobile Optimized */}
          <div className="bg-blue-100 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 max-w-5xl mx-auto">
            <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-3 sm:space-y-4 md:space-y-5">
              {tabs[activeTab].content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-justify">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralDentistry;