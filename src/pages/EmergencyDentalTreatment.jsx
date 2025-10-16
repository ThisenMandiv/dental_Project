import React from "react";
import { Phone } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import emergencyhero from "../assets/emergencyhero.webp";


// Placeholder images - replace with your actual imports
const emergencyHero = emergencyhero

const EmergencyDentalTreatment = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${emergencyHero})` }}
      >
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Emergency Dental<br />Treatment
          </h1>
          <p className="mt-6 text-lg text-white max-w-md">
            Book Your Hygiene Appointment With Our Lovely And Experienced Hygienist For A Pearly White Smile
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-4 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              24 Hour Emergency Dental Treatment Billericay
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              What to do in a dental emergency?
            </h3>
          </div>

          {/* Instructions */}
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-gray-800 mt-1">•</span>
              <p className="text-gray-800 leading-relaxed">
                If you have pain, swelling, broken teeth, lost crown/veneer/filling, please contact the dental practice as soon as possible and we will arrange for you to be seen in one of our emergency slots.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-800 mt-1">•</span>
              <p className="text-gray-800 leading-relaxed">
                If you have a problem out of hours please still call the surgery and there will be a message on the answerphone of how you can receive emergency treatment.
              </p>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Dental Practice Number */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#1a2847] rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Dental Practice Number
              </h4>
              <a href="tel:01277658374" className="text-2xl font-bold text-blue-600 hover:underline">
                01277 658374
              </a>
            </div>

            {/* Emergency NHS */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#1a2847] rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Emergency NHS
              </h4>
              <a href="tel:111" className="text-2xl font-bold text-blue-600 hover:underline">
                111
              </a>
            </div>

            {/* Emergency Out Of Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#1a2847] rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Emergency Out Of Hours
              </h4>
              <a href="tel:07765000549" className="text-2xl font-bold text-blue-600 hover:underline">
                07765 000 549
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Denplan Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Emergency Denplan Dentist Patients
          </h2>

          <div className="bg-gray-100 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                All our Denplan patients have this service covered under their Denplan Supplementary Insurance. For Private patients there will be a call out charge and any treatment charged on top of this. For Denplan patients who are away from home please contact the Denplan Emergency line on 0800 844999 if within the UK or +441562 844999 if abroad. Denplan will then help to find you a suitable dentist within the local area to help you.
              </p>
              <p>
                It is best to first contact the surgery, if you phone during surgery hours, we will endeavour to see you as quickly as possible, normally within 24 hours starting from £45.
              </p>
              <p>
                If you have a problem outside of surgery hours, leave a message for the emergency dentist and they will get back to you as soon as possible. They may be able to offer advice over the phone or will arrange to see you for treatment at their practice starting from £180.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default EmergencyDentalTreatment;