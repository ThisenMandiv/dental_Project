import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import denpalessentilahero from '../assets/denpalessentilahero.jpg';
// Import your local images
import denapalessential1 from '../assets/denapalessential1.webp';
import denapalessential2 from '../assets/denapalessential2.jpg';
import denapalessential3 from '../assets/denapalessential3.jpg';
import denapalessential4 from '../assets/denapalessential4.jpg';
import denapalessential5 from '../assets/denapalessential5.jpg';
import denapalessential6 from '../assets/denapalessential6.jpg';

// Assign them properly

const dentalReview = denapalessential4;
const hygieneAppt = denapalessential3;
const xrayImage = denapalessential2;
const privateTreatment = denapalessential5;
const preventiveAdvice = denapalessential6;
const oralHealth = denapalessential1; // or whichever fits best


const DenplanEssentials = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${denpalessentilahero})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Denplan<br />Essentail
          </h1>
          <p className="mt-6 text-lg text-white max-w-md">
            Book Your Hygiene Appointment With Our Lovely And Experienced Hygienist For A Pearly White Smile
          </p>
        </div>
      </section>

      {/* Description Card */}
      <div className="max-w-6xl mx-auto bg-white mt-12 mb-12 px-4">
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 md:p-10">
          <p className="text-gray-800 text-base leading-relaxed">
            <span className="font-semibold">Denplan Essentail</span> monthly payment plan provides for your routine preventive dental care. You also benefit from 10% discount from any further appointments you need. It is easy to set up and no preassessment is necessary.
          </p>
        </div>
      </div>

      {/* It Includes Section */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            It Includes
          </h2>

          {/* Standard and Premium Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Standard Card */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl overflow-hidden">
              <div className="bg-[#1a2847] text-white text-center py-4">
                <h3 className="text-xl font-bold">Standard</h3>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#2c5aa0]">£16.30</span>
                </div>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>1 Dental Health Review per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>1 Hygiene appointment per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Dental x-rays as clinically required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>10% off any private treatment needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Preventive dental advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Oral Health Score</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Card */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl overflow-hidden">
              <div className="bg-[#1a2847] text-white text-center py-4">
                <h3 className="text-xl font-bold">Premium</h3>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#2c5aa0]">£20.42</span>
                </div>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>1 Dental Health Review per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>4 Hygiene appointments per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Dental x-rays as clinically required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>10% off any private treatment needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Preventive dental advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Oral Health Score</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Row 1 */}
            <div className="relative">
              <img src={dentalReview} alt="Dental Review" className="w-full h-64 object-cover rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#1a2847] text-white text-center py-3 px-4 rounded-lg">
                  <p className="text-sm font-bold uppercase">1 Dental Health Review per Year</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={hygieneAppt} alt="Hygiene Appointment" className="w-full h-64 object-cover rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#1a2847] text-white text-center py-3 px-4 rounded-lg">
                  <p className="text-sm font-bold uppercase">1 Hygiene Appointment per Year</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={xrayImage} alt="Dental X-rays" className="w-full h-64 object-cover rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#1a2847] text-white text-center py-3 px-4 rounded-lg">
                  <p className="text-sm font-bold uppercase">Dental X-Rays as Clinical Required</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative">
              <img src={privateTreatment} alt="Private Treatment" className="w-full h-64 object-cover rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#1a2847] text-white text-center py-3 px-4 rounded-lg">
                  <p className="text-sm font-bold uppercase">10% Off Any Private Treatment Needed</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={preventiveAdvice} alt="Preventive Advice" className="w-full h-64 object-cover rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#1a2847] text-white text-center py-3 px-4 rounded-lg">
                  <p className="text-sm font-bold uppercase">Preventive Dental Advice</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={oralHealth} alt="Oral Health Score" className="w-full h-64 object-cover rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#1a2847] text-white text-center py-3 px-4 rounded-lg">
                  <p className="text-sm font-bold uppercase">Oral Health Score</p>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance Text */}
          <div className="text-center max-w-4xl mx-auto mt-12 mb-8">
            <p className="text-gray-800 leading-relaxed">
              Supplementary insurance arranged by Denplan, which provides you with worldwide dental injury and dental emergency cover and access to Denplan's 24-hour Worldwide Dental Emergency Helpline.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default DenplanEssentials;