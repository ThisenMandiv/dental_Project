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
    subtitle: "Safe and healthy!",
    buttonText: "BOOK NOW"
  },
  {
    id: 2,
    image: Hero2,
    title: "ARE YOU NEW TO OUR PRACTICES?",
    subtitle: "PREMIUM: 10.00 AM - 20.00 PM",
    buttonText: "BOOK NOW"
  },
  {
    id: 3,
    image: Hero3,
    title: "COMPOSITE BONDING",
    subtitle: "Suitable • Fresh air",
    buttonText: "BOOK NOW"
  }
];

const Hero = () => {
  return (
<section
  className="relative bg-gradient-to-r from-blue-600/80 to-purple-700/80 text-white pt-24 pb-16 bg-cover bg-center"
  style={{ backgroundImage: `url(${Hero1})` }}
>
 <div className="container mx-auto pl-4 md:pl-20 py-30 text-left relative z-10">

    <h1 className="text-4xl md:text-5xl font-bold mb-4">CREATING BEAUTIFUL SMILES</h1>

   
    <p className="text-xl mb-8 max-w-2xl ">
      Book your hygiene appointment with our lovely 
and experienced hygienenist for a pearly white smile  
    </p>
  <button className="hero-btn bg-blue-100 hover:bg-blue-200 text-black font-bold py-3 px-8 rounded-4xl transition duration-300 transform hover:scale-105">
    Book Now
  </button>

  </div>

  {/* Optional dark overlay for readability */}

</section>

export default Hero;