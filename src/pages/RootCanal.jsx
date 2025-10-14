import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import rootcanalhero from "../assets/rootcanalhero.jpg";
import rootcanal1 from "../assets/rootcanal1.jpg";


const RootCanal = () => {
  const [activeTab, setActiveTab] = useState(0);

  const fittingSteps = [
    "Bacteria that are normally found in the mouth can enter the pulp either as a result of tooth decay, leaky or broken tooth fillings, or damage to the tooth due to trauma.A tooth is made up of three parts. The Crown is the top part of the tooth which you can see in the mouth. The root is the part that holds the tooth in the jaw bone. The pulp is the live part of the tooth which contains the nerve and blood supply to the tooth.The Crown consists of two layers: the outer layer is the Enamel which is hard outer coating. The inner layer is Dentine which is softer and forms the majority of the tooth, this also has a good connection to the Pulp.",
  ];

 
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${rootcanalhero})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-white pt-70 leading-tight">
            Root canal treatment
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100">
            Book your hygiene appointment with our lovely and experienced hygienist for a pearly white smile
          </p>
        </div>
      </section>

      {/* Description Card */}
      <div className="max-w-5xl mx-auto bg-blue-900 mt-10 text-white rounded-2xl shadow-lg text-xl p-6 md:p-10">
        <p className="leading-relaxed">
          <span className="font-semibold">Root canal treatment</span> also known as Endodontics is a procedure used to treat infection that has reached the dental pulp. Root canal treatment is not often painful and can save a tooth that otherwise would have required a dental extraction.
        </p>
      </div>

      {/* Steps Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                When Does A Tooth Need Root Canal Treatment?
              </h2>
              <ul className="space-y-4">
                {fittingSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src= {rootcanal1}
                  alt="Smiling patient"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     



      <Footer />
    </div>
  );
};

export default RootCanal;
