import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import toothextractionhero from "../assets/toothextractionhero.webp";


const ToothExtraction = () => {
  const [activeTab, setActiveTab] = useState(0);

  
  const tabs = [
    {
      title: "How Are Teeth Extracted?",
      content: `The dentist will numb the area using a local anaesthetic in order to extract the tooth. This is so that you will not feel any pain when the tooth is extracted. The dentist will then grasp the tooth and remove it using forceps.
Following the tooth extraction, the socket is likely to feel sore for a few days afterwards and it is advisable to take painkillers such as ibuprofen or paracetamol if you are able to.`,
    },
    {
      title: "Tooth Removal safety",
      content: `In order for the tooth extraction to be carried out safely prior to treatment, it is necessary to ensure that your dentist is aware of all your medical history as there are a number of medical conditions and medications that can affect the procedure or post-extraction healing and this is especially important if a tooth needs to be removed.
For example, if you are taking Warfarin this prevents clotting. Prior to tooth extraction, the dentist will ask that you have your INR level checked to ensure that it is safe for the procedure to go ahead. They may liaise with your doctor to ensure the most optimal treatment plan.`,
    },
    {
      title: "Medication Needed For Tooth Extraction?",
      content: `There are also some medications that mean that the tooth extraction would need to be carried out in a hospital.
This ensures that the appropriate support is on hand should it be needed during or after the extraction. Your doctor should have made you aware if you taking such medication to inform your dentist.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${toothextractionhero})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-white pt-70 leading-tight">
            Tooth Extraction 
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100">
            Book your hygiene appointment with our lovely and experienced hygienist for a pearly white smile
          </p>
        </div>
      </section>

      {/* Description Card */}
      <div className="max-w-5xl mx-auto bg-blue-900 mt-10 text-white rounded-2xl shadow-lg text-xl p-6 md:p-10">
        <p className="leading-relaxed">
          <span className="font-semibold">Tooth extraction</span> is where a tooth is removed under anaesthetic. A tooth may need to be extracted if it has become too decayed or has been damaged too extensively for the dentist to be able to restore it, or required by an orthodontist as part of treatment to straighten teeth.
        </p>
      </div>


      {/* Tabs Section */}
      <section className="bg-white pt-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-3 mb-10 flex-nowrap">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all ${
                  activeTab === index
                    ? "bg-gray-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed space-y-5 mb-10">
            {tabs[activeTab].content.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToothExtraction;
