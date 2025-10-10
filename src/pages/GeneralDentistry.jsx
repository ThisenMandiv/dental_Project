import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: 'Dental Examination',
      price: '£45',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
      gif: glfis1
    },
    {
      title: 'Fillings and Restorations',
      price: '£45',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
      gif: glfis2
    },
    {
      title: 'Dentures',
      price: '£1050',
      image: dentures,
      gif: glfis3
    },
    {
      title: 'Crowns and Bridges',
      price: '£595',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop',
      gif: glfis4
    },
    {
      title: 'Dental Hygienist',
      price: '£50',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
      gif: glfis5
    },
    {
      title: 'Root Canal Treatment',
      price: '£400',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop',
      gif: glfis6
    },
    {
      title: 'Root Extraction',
      price: '£150',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop',
      gif: glfis7
    }
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

  const navLinks = ['Home', 'About Us', 'Services', 'Fees', 'Special Offers', 'Contact Us'];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${dentistpatient})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative container mx-auto px-4 pt-70">
          <h1 className="text-5xl md:text-7xl font-bold mb-1">General Dentistry</h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto bg-blue-100 mt-10 rounded-2xl shadow-lg p-8 md:p-12">
        <div className="text-gray-700 text-lg leading-relaxed space-y-6">
          <p>
            Regular check ups are an integral part of any dental routine. In order to keep on top of your dental health, we require regular professional assessments of your mouth. We recommend that you attend at least once annually however, should you need more regular check ups, this can be arranged.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <img
                    src={service.gif}
                    alt={`${service.title} animation`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
                <div className="p-4">
                  <button className="w-full bg-[#00072D] text-white py-3 rounded-lg font-semibold transition-colors">
                    {service.title} {service.price}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Detailed Description */}
          <div className="max-w-5xl mx-auto bg-blue-100 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
              {tabs[activeTab].content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GeneralDentistry;