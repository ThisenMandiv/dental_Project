import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import denpalcarehero from "../assets/denpalcarehero.jpg";


// Placeholder images - replace with your actual imports
const crownshero = denpalcarehero

const DenpalCare = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${crownshero})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Denplan<br />Care
          </h1>
          <p className="mt-6 text-xl text-white max-w-md">
            Book Your Hygiene Appointment With Our Lovely And Experienced Hygienist For A Pearly White Smile
          </p>
        </div>
      </section>

      {/* Description Card */}
      <div className="max-w-6xl mx-auto bg-white mt-16 mb-16 px-4">
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 md:p-12">
          <p className="text-gray-800 text-lg leading-relaxed">
            <span className="font-semibold">Denplan Care</span> monthly payment plan provides for regular dental care to maintain your dental health. A free dental assessment is made before you join so that the price you pay is dependent on the 'health' of your mouth. It includes the following treatment, when clinically necessary and where carried out at the practice by your registered dentist:
          </p>
        </div>
      </div>

      {/* Two Column Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="bg-[#1a2847] text-white rounded-3xl p-10">
              <h2 className="text-2xl font-bold mb-6">
                Denplan Care includes from £17.10 a month
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Dental Health Reviews ( Examinations)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Hygiene appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Dental x-rays</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Fillings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Preventive dental advice and therapy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Extractions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Periodontal (gum) treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Crowns, bridges, dentures, inlays (excluding laboratory fees)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Emergency appointments</span>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="bg-[#e8f4f8] rounded-3xl p-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Supplementary Insurance
              </h2>
              <p className="text-gray-800 leading-relaxed text-lg">
                Supplementary Insurance arranged by Denplan, which provides you with worldwide dental injury and dental emergency cover and access to Denplan's 24-hour Worldwide Dental Emergency Helpline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Table Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#e8f4f8] rounded-3xl p-8 md:p-12 border-4 border-[#2c5aa0]">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">
              DENPLAN CARE FEES
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-4 font-bold text-gray-900">Fee Code</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">A</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">B</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">C</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">D</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">E</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium text-gray-900">Monthly</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 text-gray-800">£19.19</td>
                    <td className="text-center py-4 px-4 text-gray-800">£31.54</td>
                    <td className="text-center py-4 px-4 text-gray-800">£38.79</td>
                    <td className="text-center py-4 px-4 text-gray-800">£45.36</td>
                    <td className="text-center py-4 px-4 text-gray-800">£50.63</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium text-gray-900">Weekly</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 text-gray-800">£4.43</td>
                    <td className="text-center py-4 px-4 text-gray-800">£7.28</td>
                    <td className="text-center py-4 px-4 text-gray-800">£8.95</td>
                    <td className="text-center py-4 px-4 text-gray-800">£10.47</td>
                    <td className="text-center py-4 px-4 text-gray-800">£11.68</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium text-gray-900">Daily</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 text-gray-800">£0.63</td>
                    <td className="text-center py-4 px-4 text-gray-800">£1.04</td>
                    <td className="text-center py-4 px-4 text-gray-800">£1.28</td>
                    <td className="text-center py-4 px-4 text-gray-800">£1.49</td>
                    <td className="text-center py-4 px-4 text-gray-800">£1.66</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default DenpalCare;