import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Hero1 from '../assets/Hero1.png';
import Hero2 from '../assets/Hero2.png';
import Hero3 from '../assets/Hero3.png';

const slides = [
{
  id: 1,
  image: Hero1,
  title: "CREATING BEAUTIFUL SMILES",
  subtitle1: "Book your hygiene appointment with our lovely",
  subtitle2: "and experienced hygienist for a pearly white smile",
  buttonText: "BOOK NOW"
},

  {
    id: 2,
    image: Hero2,
    title: "ARE YOU NEW TO OUR PRACTICES?",
    subtitle: "Check out for our new Patient special for £75",
    buttonText: "BOOK NOW"
  },
  {
    id: 3,
    image: Hero3,
    title: "COMPOSITE BONDING",
    subtitle: "A Natural looking healthy that you are proud to show off",
    buttonText: "BOOK NOW"
  }
];

const Hero = () => {
  return (
    <section className="relative text-white h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <Swiper
        modules={[Autoplay, EffectFade,  Pagination]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"' + '0' + (index + 1) + '</span>';
          }
        }}
        loop={true}
        className="absolute inset-0 w-full h-full z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full relative">
              <img
                src={slide.image}
                alt={`Dental practice background ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Enhanced Gradient Overlay - Strong on left, fade to right */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/00"></div>
              /
              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center justify-start">
                <div className="container mx-auto px-4 md:px-8 lg:px-20 relative z-10 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="max-w-4xl"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

{slide.subtitle ? (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
    className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-blue-100 font-light"
  >
    {slide.subtitle}
  </motion.p>
) : (
  <>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
      className="text-lg md:text-xl lg:text-2xl mb-2 leading-relaxed text-blue-100 font-light"
    >
      {slide.subtitle1}
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
      className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-blue-100 font-light"
    >
      {slide.subtitle2}
    </motion.p>
  </>
)}


                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-bold py-4 px-10 rounded-full transition-all duration-300 transform text-lg md:text-xl shadow-2xl border-2 border-transparent hover:from-teal-500 hover:to-cyan-600"
                    >
                      {slide.buttonText}
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styles */}


      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white rounded-full "
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;