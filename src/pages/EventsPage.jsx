import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';
import eventhero from '../assets/eventshero.jpg';
import sugarfree from '../assets/sugarfree.png';
import stopober from '../assets/stopober.png';

// Animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Mobile Optimized */}
      <section 
        className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center"
        style={{backgroundImage: `url(${eventhero})`}}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-100 ml-4 sm:ml-8 md:ml-16">
              Events
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Events Cards Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl space-y-8 sm:space-y-12 md:space-y-16">
          
          {/* Sugar Free September Card */}
          <motion.div 
            id="sugar-free-september" 
            className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-blue-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariantsLeft}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative">
                <motion.img 
                  src={sugarfree}
                  alt="Sugar Free September"
                  className="h-48 sm:h-64 md:h-80 object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-center"><div class="text-4xl sm:text-6xl mb-2">🍬</div><div class="text-xl sm:text-2xl font-bold text-red-500">Sugar Free</div><div class="text-lg sm:text-xl text-cyan-500">SEPTEMBER</div></div>';
                  }}
                />
              </div>
            </div>

            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center"
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Sugar Free September
            </motion.h2>

            <motion.div 
              className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base"
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-justify">
                Sugar-free September is all about giving up the sugars that are added to our foods and drinks (these are called extrinsic sugars if you're interested in the sciencey bit).
              </p>

              <p className="text-justify">
                We already have more than enough sugar in our diets from naturally-occurring sources such as whole fruits, vegetables and milk (these are intrinsic sugars) and we don't need the refined and processed sugar on top!
              </p>

              <p className="text-justify">
                So why not join Denplan and go sugar-free this September and see how much better you feel? After a month, you may even adjust how much sugar you consume going forward, which can only be a good thing!
              </p>
            </motion.div>
          </motion.div>
          <br />  

          {/* Stoptober Card */}
          <motion.div 
            id="stoptober" 
            className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-blue-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariantsRight}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative">
                <motion.img 
                  src={stopober} 
                  alt="Stoptober"
                  className="h-48 sm:h-64 md:h-80 object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-center"><div class="text-4xl sm:text-6xl mb-2">🚭</div><div class="text-xl sm:text-3xl font-bold"><span class="text-red-600">Stop</span><span class="text-cyan-500">tober</span></div></div>';
                  }}
                />
              </div>
            </div>

            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center"
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Stoptober
            </motion.h2>

            <motion.div 
              className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base"
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-justify">
                Smokers across the country have signed up to Stoptober 2016, a 28-day mass quit attempt from Public Health England (PHE), to receive support and encouragement every step of the way from some of the nation's top comedians.
              </p>

              <p className="text-justify">
                But do they also realise that the added benefits that being smoke-free can have on their mouths?
              </p>

              <p className="text-justify">
                It is at the heart of what we do. Smokers are at a significantly higher risk of suffering from gum disease, tooth decay and even mouth cancer. Regular visits to their dentist play a vital role in detecting early signs of potential problems.
              </p>

              <p className="text-justify">
                And to stand an even better chance of quitting, they are encouraged to sign up with their friends, family and colleagues, as evidence reveals that that type of 'social' quitting can significantly improve chances of success. In 2014, smokers taking part in Stoptober were 67% more likely to quit when their spouse quits smoking and 36% more likely when a colleague quits * so why not encourage your employees to sign up and take advantage of the personalised support that Stoptober?
              </p>

              <p className="text-justify">
                To help your employees quit smoking, click here for posters and how to sign up.
              </p>

              <motion.a 
                href="https://www.gov.uk/government/news/sign-up-to-stoptober-with-friends-family-and-colleagues"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-block text-xs sm:text-sm break-all"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                www.gov.uk/government/news/sign-up-to-stoptober-with-friends-family-and-colleagues
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage;