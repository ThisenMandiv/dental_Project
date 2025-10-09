import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import aboutHeroImage from '../assets/about_us_hero.jpg';
import Dentist from '../assets/Dentist.png';
import nishani from '../assets/nishani.png';
import annmarie from '../assets/annmarie.jpeg';
import zoe from '../assets/zoe.png';
import ajay from '../assets/ajay.png';
import deepam from '../assets/deepam.png';
import heliyan from '../assets/heliyan.png';
import anastasia from '../assets/anastasia.png';
import jan from '../assets/jan.png';
import claire from '../assets/claire.png';
import happyclient4 from '../assets/happyclient4.jpg';

const About = () => {
  const teamMembers = [
    { name: "Zoe Ann Allen", role: "Dental Nurse", image: zoe, gradient: "from-blue-900/90" },
    { name: "Ajay Mathur", role: "Dentist", image: ajay, gradient: "from-blue-900/90" },
    { name: "Deepam Patel", role: "Dentist", image: deepam, gradient: "from-blue-900/90"},
    { name: "Heliyan Peiris", role: "Practice Manager", image: heliyan, gradient: "from-blue-900/90"},
    { name: "Anastasija Mamaja", role: "Dental Hygienist", image: anastasia, gradient: "from-blue-900/90"},
    { name: "Ann Marie", role: "Receptionist", image: annmarie, gradient: "from-blue-900/90" },
    { name: "Claire Overend", role: "Orthodontist", image: claire, gradient: "from-blue-900/90"},
    { name: "Jan West", role: "Endodontist", image: jan, gradient: "from-blue-900/90" },
    { name: "Nishani Jayasuriya", role: "Periodontist", image: nishani, gradient: "from-blue-900/90" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const [direction, setDirection] = useState(0); // 0: right, 1: left

  // Auto slide for desktop
  useEffect(() => {
    if (!isAutoSlide || window.innerWidth < 1024) return;
    const interval = setInterval(() => {
      setDirection(0); // Right direction for auto slide
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoSlide, teamMembers.length]);

  const nextSlide = () => {
    setDirection(0); // Right direction
    if (window.innerWidth < 1024) {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    } else {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
    }
    setIsAutoSlide(false);
  };

  const prevSlide = () => {
    setDirection(1); // Left direction
    if (window.innerWidth < 1024) {
      setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3));
    }
    setIsAutoSlide(false);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 0 : 1);
    setCurrentSlide(index);
    setIsAutoSlide(false);
  };

  const getCurrentMembers = () => {
    if (window.innerWidth < 1024) {
      // Mobile: single card per slide
      return [teamMembers[currentSlide]];
    } else {
      // Desktop: 3 cards per slide
      const startIndex = currentSlide * 3;
      return teamMembers.slice(startIndex, startIndex + 3);
    }
  };

  const totalSlides = window.innerWidth < 1024 ? teamMembers.length : Math.ceil(teamMembers.length / 3);

  // Animation variants for smooth transitions
  const slideVariants = {
    enter: (direction) => ({
      x: direction === 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 0 ? -300 : 300,
      opacity: 0
    })
  };

  const desktopVariants = {
    enter: {
      opacity: 0,
      y: 20
    },
    center: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section
        className="relative pt-32 sm:pt-44 pb-16 sm:pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutHeroImage})`, minHeight: '400px' }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              About Us
            </h1>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4">
              Our Team Of Specialists, Dentists, Hygienists And Therapists In Billericay, Essex, Offer An Extensive Range Of Dental Treatments.
            </p>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              We Aim To Provide Total Dental Care All Under One Roof For Your Convenience And Offer Early/Late/Weekend Appointments.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#223B6E] mb-10 sm:mb-16">
            WHY CHOOSE US?
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            <div className="lg:w-1/2">
              <img src={Dentist} alt="Dentist" className="w-full rounded-lg shadow-xl" />
            </div>
            <div className="lg:w-1/2">
              <ul className="space-y-4 text-base sm:text-lg text-gray-700">
                {[
                  "Experienced and a Friendly Team",
                  "A full discussion of your dental care",
                  "We offer same day emergency appointments",
                  "Nervous patients are welcome",
                  "Denplan Excel Accredited (Quality Assurance)",
                  "Wide range of treatment options",
                  "Disabled access all on the ground floor"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-2xl text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 sm:py-20 bg-[#223B6E] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-16">
            Meet The Team Behind the Smile
          </h2>

          <div className="relative max-w-7xl mx-auto">
            {/* Mobile Slider */}
            <div className="lg:hidden">
              <div className="relative overflow-hidden h-96">
                <AnimatePresence mode="popLayout" custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 flex justify-center"
                  >
                    <div className="w-80 sm:w-72 mx-auto">
                      <div className="relative overflow-hidden rounded-lg shadow-xl  p-4 flex items-center justify-center h-80">
                        <img 
                          src={getCurrentMembers()[0].image} 
                          alt={getCurrentMembers()[0].name} 
                          className="max-h-72 w-full object-contain"
                        />
                        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${getCurrentMembers()[0].gradient} to-transparent p-4 sm:p-6`}>
                          <h3 className="text-lg sm:text-xl font-bold">{getCurrentMembers()[0].name}</h3>
                          <p className="text-sm sm:text-base text-gray-200">{getCurrentMembers()[0].role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <AnimatePresence mode="popLayout">
                {getCurrentMembers().map((member, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    variants={desktopVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1
                    }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg   p-4 flex items-center justify-center h-100">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="max-h-100 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${member.gradient} to-transparent p-4 sm:p-6`}>
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <p className="text-sm text-gray-200">{member.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Arrows + Pagination */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 mt-8">
              <button 
                onClick={prevSlide} 
                className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              <div className="flex gap-1 sm:gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide} 
                className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO EXPERIENCE */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 max-w-5xl mx-auto">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ready To Experience Better Dental Care?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                Schedule Your Visit Today And Take The First Step Toward A Healthier, Brighter Smile.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-300">
                Book Now
              </button>
            </div>

            <div className="lg:w-1/2 w-full">
              <img
                src={happyclient4}
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
};

export default About;