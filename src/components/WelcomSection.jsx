import React from 'react';
import { motion } from 'framer-motion';
import doctorImage from '../assets/doctor-image.png';
import float1 from '../assets/float1.png';
import float2 from '../assets/float2.png';
import float3 from '../assets/float3.png';

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl uppercase tracking-widest text-black mb-2 font-semibold">
            WELCOME TO
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            15 THE PANTILES DENTAL PRACTICE
          </h1>

          <motion.p
            className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Looking For The Perfect Hollywood Smile? Want A Family-Friendly Dental Practice To Ensure Your Loved Ones Have Happy, Healthy Teeth And Gums? Then Look No Further Than 15 The Pantiles Dental Practice. Here In Our Dental Practice In Billericay, We Boast Incredibly Skilled Dental Practitioners Who Aren't Just Highly Skilled And Experienced, But Have Access To Some Of The Most Up To Date Technology Available. From <strong>General Dentistry</strong> To <strong>Cosmetic Dentistry</strong>, We Have An Array Of Treatments Available For Every Member Of Your Family To Ensure Everyone, Regardless Of Budget, Has Access To Quality Dental Care. From <strong>Root Canal Treatment</strong> And <strong>Teeth Whitening</strong> To <strong>Fillings</strong> And <strong>Smile Makeovers</strong>; Whatever It Is You're Looking For, You Can Rest Assured That You'll Be In Safe Hands Here At 15 The Pantiles Dental Practice.
          </motion.p>
        </motion.div>

        {/* Doctor Image Left + Content Right Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative overflow-hidden rounded-[50px] sm:rounded-[70px] md:rounded-[100px] shadow-lg w-full max-w-[800px]">
              <img
                src={doctorImage}
                alt="Professional Dental Doctor"
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold text-gray-800 leading-tight">
              Welcoming New Patients
            </h3>

            <p className="text-base text-gray-600 leading-relaxed text-xl">
              Whether you’re a new patient with ‘dental nerves’ or are simply looking for more in-depth cosmetic dentistry, here in dental practice you’ll receive the very best of care regardless.  We’ll help you transform your smile with the best quality orthodontics and cosmetic dentistry. We’ll also ensure your gum health and teeth remains in top form thanks to our incredible team.
            </p>

            <h1 className="text-4xl font-bold text-blue-800 leading-tight text-center">
              ARE YOU A NEW PATIENT?
            </h1>
            <h3 className="text-2xl font-bold text-black-800 leading-tight text-center">
              HURRY AND GRAB THE £75 OFFER!
            </h3>
          </motion.div>
        </div>

        {/* INVISALIGN Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#0A2540] rounded-3xl p-6 sm:p-10 md:p-12 relative"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Section */}
            <div className="text-white text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                INVISALIGN DENTIST
              </h3>
              <p className="text-sm sm:text-base leading-relaxed mb-6 text-gray-200">
                World's Most Advanced Clear Aligner System And An Alternative To Fixed Braces. Invisalign Is Perhaps One Of The Most Innovative Dental Treatments Out There. Invisalign Consists Of A Small Set Of Almost Invisible Aligners Or Invisible Braces That Are Manufactured From A Super-Lightweight, Clear Plastic. This Revolution In Adult Orthodontics Allows For Custom Made Aligners To Move Your Teeth Much Like A Fixed Brace Would, While At The Same Time Allowing For More Discretion And Flexibility.
              </p>

              <motion.button
                className="bg-cyan-400 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More About Invisalign Dentist
              </motion.button>
            </div>

            {/* Images Section */}
            <div className="relative flex justify-center items-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] h-[280px] sm:h-[320px] md:h-[380px]">
                <img
                  src={float1}
                  alt="Invisalign 1"
                  className="absolute top-0 left-0 w-32 sm:w-40 md:w-48 h-24 sm:h-32 md:h-36 object-cover rounded-2xl shadow-lg transform -rotate-6"
                />
                <img
                  src={float2}
                  alt="Invisalign 2"
                  className="absolute top-1/3 right-0 w-32 sm:w-40 md:w-48 h-24 sm:h-32 md:h-36 object-cover rounded-2xl shadow-lg transform rotate-3"
                />
                <img
                  src={float3}
                  alt="Invisalign 3"
                  className="absolute bottom-0 left-1/4 w-28 sm:w-36 md:w-44 h-24 sm:h-32 md:h-36 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
