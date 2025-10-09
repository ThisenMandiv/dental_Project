
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import aboutHeroImage from '../assets/about_us_hero.jpg';
import Dentist from '../assets/Dentist.jpeg';
import doctorImage from '../assets/doctor-image.png';



const About = () => {
  const teamMembers = [
    {
      name: "Zoe Ann Allen",
      role: "Dental Nurse",
      image: 'src/assets/zoe-anne.webp',
      gradient: "from-gray-800/90"
    },
    {
      name: "Ajay Mathur",
      role: "Dentist",
      image: 'src/assets/ajay-mathur-dentist.webp',
      gradient: "from-blue-900/90"
    },
    {
      name: "Deepam Patel",
      role: "Dentist",
      image: 'src/assets/deepam-patel.webp',
      gradient: "from-gray-900/90"
    },
    {
      name: "Heliyan Peiris",
      role: "Practice Manager",
      image: 'src/assets/Heliyan-Peiris.jpeg',
      gradient: "from-gray-800/90"
    },
    {
      name: "Anastasija Mamaja",
      role: "Dental Hygienist",
      image: 'src/assets/Anastasija-Mamaja .jpeg',
      gradient: "from-green-800/90"
    },
    {
      name: "Ann Marie",
      role: "Receptionist",
      image: 'src/assets/Ann-Marie.jpeg',
      gradient: "from-purple-800/90"
    },
    {
      name: "Claire Overend",
      role: "Orthodontist",
      image: 'src/assets/Claire-Overend.jpeg',
      gradient: "from-pink-800/90"
    },
    {
      name: "Jan West",
      role: "Endodontist",
      image: 'src/assets/jan-west.webp',
      gradient: "from-indigo-800/90"
    },
    {
      name: "Nishani Jayasuriya",
      role: "Periodontist",
      image: 'src/assets/nishani-jayasuriya.jpg',
      gradient: "from-teal-800/90"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSlide, setIsAutoSlide] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoSlide) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoSlide, teamMembers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
    setIsAutoSlide(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3));
    setIsAutoSlide(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoSlide(false);
  };

  // Get current set of 3 team members to display
  const getCurrentMembers = () => {
    const startIndex = currentSlide * 3;
    return teamMembers.slice(startIndex, startIndex + 3);
  };

  const totalSlides = Math.ceil(teamMembers.length / 3);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section 
        className="relative pt-50 pb-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${aboutHeroImage})`,
          minHeight: '500px'
        }}
      >
        <div className="absolute inset-0 bg-white/11"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              Our Team Of Specialists, Dentists, Hygienists And Therapists In 
              Billerricy, Essex, Offer An Extensive Range Of Dental Treatments. 
              Our Practice Also Sees Patients Coming From London, Brentwood, 
              Basildon, Stock, Hutton, Shenfield, Ingatestone, Wickford And 
              The Surrounding Areas.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mt-4">
              We Aim To Provide Total Dental Care All Under One Roof For Your 
              Convenience And Offer Early/Late/Weekend Appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#223B6E] mb-16">
            WHY CHOOSE US ?
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src={Dentist} 
                alt="Dentist with patient" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            
            <div className="lg:w-1/2">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Experienced and a <span className="text-blue-600 font-semibold">Friendly Team</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">A full discussion of your dental care</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">We offer same day emergency appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Nervous patients are welcome</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    <span className="text-blue-600 font-semibold">Denplan Excel Accredited</span> (Quality Assurance)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Wide range of treatment options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-blue-600 mt-1">•</span>
                  <span className="text-lg text-gray-700">Disabled access all on the ground floor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="py-20 bg-[#223B6E] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Meet The Team Behind the Smile
          </h2>
          
          {/* Team Members Slider */}
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <AnimatePresence mode="wait">
                {getCurrentMembers().map((member, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 object-cover"
                      />
                      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${member.gradient} to-transparent p-6`}>
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <p className="text-gray-200">{member.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center gap-6">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                aria-label="Previous team members"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                aria-label="Next team members"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Auto-slide indicator */}
            <div className="text-center mt-4">
              <span className="text-white/70 text-sm">
                Auto-sliding • Click dots or arrows to control
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Ready To Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
            <div className="lg:w-1/2">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ready To Experience Better Dental Care?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Schedule Your Visit Today And Take The First Step<br />
                Toward A Healthier, Brighter Smile.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Book Now
              </button>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src={'src/assets/Looking-for-a-Dentist.jpeg'} 
                alt="Happy patient" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 

export default About
