import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import facialaestheticshero from '../assets/facial-aesthetics-hero.jpg';


const FacialAesthetics = () => {
  const [activeTab, setActiveTab] = useState(0);

  const wrinkleRelaxingAreas = [
    "Frown lines",
    "Forehead lines",
    "Crow's feet",
    "Bunny lines",
    "Gummy Smiles",
    "Neck Bands",
    "Jaw slimming",
    "Excessive Under-arm sweating"
  ];

  const tabs = [
    { title: "Available Cosmetic Treatments" },
    { title: "Wrinkle Relaxing Treatments" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
     <section 
             className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center"
             style={{backgroundImage: `url(${facialaestheticshero})`}}
           >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Facial Aesthetics
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed">
                Book Your Hygiene Appointment With Our Lovely And Experienced Hygienist For A Pearly White Smile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Card */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 mb-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <p className="text-gray-800 text-base md:text-lg leading-relaxed text-center">
            Facial aesthetics, otherwise known as facial rejuvenation treatments is the term used to describe non-surgical procedures that reduce the signs of ageing on the face. Facial aesthetic treatments are used to give people a more youthful and radiant appearance. These treatments can soften wrinkles, contour the face and define certain facial features.
          </p>
        </div>
      </div>

      {/* Wrinkle Relaxing Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            Wrinkle Relaxing
          </h2>
          
          <p className="text-center text-gray-800 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mb-12">
            Injectable filler (injectable cosmetic filler, injectable facial filler) is a soft tissue filler injected into the skin to help fill in facial wrinkles restoring a smoother appearance. Most of these wrinkle fillers are temporary because they are eventually absorbed by the body
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-3 rounded-full font-semibold text-base transition-all ${
                  activeTab === index
                    ? "bg-blue-200 text-gray-900"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Treatment Areas List */}
          {activeTab === 1 && (
            <div className="max-w-4xl mx-auto bg-gray-200 rounded-3xl p-8 md:p-12">
              <ul className="space-y-3">
                {wrinkleRelaxingAreas.map((area, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-900 text-lg">
                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 0 && (
            <div className="max-w-4xl mx-auto bg-gray-200 rounded-3xl p-8 md:p-12">
              <p className="text-gray-800 text-lg leading-relaxed text-center">
                Wrinkle relaxing injections (Botulinum toxin type A), commonly known as 'Botox' are a very effective form of anti wrinkle treatment. These injections effectively relax your facial muscles including the creases on your forehead, smoothes out skin and eliminate deeper lines
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FacialAesthetics;