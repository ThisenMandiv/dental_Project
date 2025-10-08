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
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[100px] shadow-lg">
              <img 
                src={doctorImage} 
                alt="Professional Dental Doctor" 
                className="w-[800px] h-[600px] object-cover" 
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
          className="bg-[#0A2540] rounded-3xl p-12 relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">
                INVISALIGN DENTIST
              </h3>
              <p className="text-base leading-relaxed mb-6">
                World's Most Advanced Clear Aligner System And An Alternative To Fixed Braces. Invisalign Is Perhaps One Of The Most Innovative Dental Treatments Out There. Invisalign Consists Of A Small Set Of Almost Invisible Aligners Or Invisible Braces That Are Manufactured From A Super-Lightweight, Clear Plastic. This Revolution In Adult Orthodontics Allows For Custom Made Aligners To Move Your Teeth Much Like A Fixed Brace Would, While At The Same Time Allowing For More Discretion And Flexibility.
              </p>
              
              <motion.button
                className="bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More About Invisalign Dentist
              </motion.button>
            </div>
            
            <div className="relative h-80">
              {/* Replace these with your actual images */}
              <img src={float1} alt="Invisalign 1" className="absolute -top-20  right-5 w-60 h-40 object-cover rounded-2xl shadow-lg transform -rotate-15"/>
              <img src={float2} alt="Invisalign 2" className="absolute top-20 right-0 w-60 h-40 object-cover rounded-2xl shadow-lg transform rotate-6"/>
              <img src={float3} alt="Invisalign 3" className="absolute bottom-[-70px] right-1/3 translate-x-1/2 w-50 h-50 object-cover rounded-2xl shadow-lg"/>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WelcomeSection;
