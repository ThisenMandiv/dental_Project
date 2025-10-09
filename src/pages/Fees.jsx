import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import feesimage from '../assets/feesimage.png';
import feesHero from '../assets/fees-hero.jpg';

const FeesPage = () => {
  const privateFees2024 = [
    { service: "New Patient Examination (including x-rays)", fee: "£90" },
    { service: "Routine Examination", fee: "£60" },
    { service: "Hygiene Appointment (1 hours & polish)", fee: "from £85" },
    { service: "Scale Polish", fee: "from £90" },
    { service: "Minor Oral treatment", fee: "from £200" },
    { service: "Crowns", fee: "from £845" },
    { service: "Fillings", fee: "from £140" },
    { service: "Implant consultation", fee: "from £90" },
    { service: "Invisalign", fee: "from £3800" },
    { service: "Root Canal treatment", fee: "from £450" },
    { service: "Composite (per item)", fee: "from £280" },
    { service: "Extracts (1st upper permanent incisors)", fee: "from £140" },
    { service: "Composite Filling", fee: "from £180" },
    { service: "Upper and lower impressions and", fee: "from £45" },
    { service: "Dentures: Visit (diagnosis, treatment 1 visit)", fee: "from £45" }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Appointment request submitted!');
  };

  const denplanCosts = [
    { plan: "Maturity", A: "£29.00", B: "£39.30", C: "£44.30", D: "£48.20", E: "£54.45" },
    { plan: "Junior", A: "£4.78", B: "£9.09", C: "£8.92", D: "£9.09", E: "£10.46" },
    { plan: "Child", A: "£3.68", B: "£17", C: "£5.97", D: "£6.61", E: "£7.19" }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
  className="relative mt-0 h-[350px] md:h-[800px] bg-cover bg-center"
  style={{ backgroundImage: `url(${feesHero})` }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

  {/* Content wrapper */}
  <div className="relative container mx-auto px-4 h-full flex items-center z-10">
    <div className="max-w-2xl text-center md:text-left">
      <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
        Our Price Packages
      </h1>
      <p className="text-lg md:text-3xl text-gray-900">
        Book Your Hygienist Appointment With Our Lovely And Experienced Hygienist For A Pearly White Smile.
      </p>
    </div>
  </div>
</section>


      {/* Finance Badge & Info Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            {/* Left Content */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-6 text-xl md:text-2xl font-medium">
                Here At <strong>Pantiles Dental</strong>, We Have Teamed Up With A Finance Provider To Offer A Wide Range Of Dental Treatments On Finance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-xl md:text-2xl font-medium">
                Dental Care Is Something We All Require, And We Realise That Whilst Many People Would Like To Benefit From The Treatments Available, Dental Finance Is The Perfect Way To Get The Smile You Have Been Longing For.
              </p>
              <button className="bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition">
                View More
              </button>
            </div>

            {/* Right Finance Image */}
            <div className="flex justify-center">
              <img
                src={feesimage}
                alt="Finance Available"
                className="h-60 md:h-80 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Private Fee Guide 2024 */}
      <section className="py-16 px-4">
        <div className="container bg-blue-50 mx-auto max-w-5xl">
          <div className=" border-2 border-blue-300 rounded-2xl p-6 md:p-8 overflow-x-auto">
            <div className="grid grid-cols-3 text-sm md:text-base font-bold text-gray-900 mb-4 min-w-[500px]">
              <div>Private Fee Guide 2024</div>
              <div className="text-center">Private Fee</div>
              <div className="text-center">Treatment Code</div>
            </div>

            {privateFees2024.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 py-3 border-b border-gray-200 text-xs md:text-sm min-w-[500px]"
              >
                <div className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                  <span>{item.service}</span>
                </div>
                <div className="text-center font-semibold">{item.fee}</div>
                <div className="text-center text-gray-500">Included</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidance Notice */}
      <section className="py-8 px-4 bg-[#0A2540] text-white text-center">
        <p className="text-sm md:text-base max-w-4xl mx-auto">
          These Fees Are For Guidance Only And Dependent On The Time And Materials Used. Full Quotations Will Be Given Prior To Treatment Commencing.
        </p>
      </section>

      {/* Denplan Care Fees */}
      <section className="py-16 px-4">
        <div className="container bg-blue-50  mx-auto max-w-5xl">
          <div className=" border-2 border-blue-300  rounded-2xl p-6 md:p-8 overflow-x-auto">
            <h3 className="font-bold text-gray-900 mb-6 text-center md:text-left">
              Denplan Care Fees from April 2025
            </h3>
            <table className="w-full min-w-[500px] text-xs md:text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th></th>
                  <th className="text-center">A</th>
                  <th className="text-center">B</th>
                  <th className="text-center">C</th>
                  <th className="text-center">D</th>
                  <th className="text-center">E</th>
                </tr>
              </thead>
              <tbody>
                {denplanCosts.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 font-semibold text-gray-700">{row.plan}</td>
                    <td className="text-center">{row.A}</td>
                    <td className="text-center">{row.B}</td>
                    <td className="text-center">{row.C}</td>
                    <td className="text-center">{row.D}</td>
                    <td className="text-center">{row.E}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Denplan Info */}
      <section className="py-12 px-4 bg-[#0A2540] text-white text-center">
        <h3 className="text-base md:text-2xl font-bold max-w-5xl mx-auto">
          Denplan Care Provides All Routine Care Required Provided By Our Practice...
        </h3>
      </section>

      {/* Denplan Essentials */}
      <section className="py-16 px-4">
        <div className="container mx-auto bg-blue-50  max-w-5xl">
          <div className=" border-2 border-blue-300  rounded-2xl p-6 md:p-8">
            <h3 className="font-bold text-gray-900 mb-6 text-center md:text-left">
              Denplan Essentials from fees April 2025
            </h3>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <Check className="text-green-500 mr-0 sm:mr-3 mb-2 sm:mb-0 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-gray-700">Starting £7.68 (M)</p>
                  <p className="text-sm text-gray-600">
                    Provides 2 examinations a year, 2 sets if needed, and 2 hygiene visits a year
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start">
                <Check className="text-green-500 mr-0 sm:mr-3 mb-2 sm:mb-0 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-gray-700">Starting £10.69 (E)</p>
                  <p className="text-sm text-gray-600">
                    Provides 2 examinations a year, 2 sets if needed, and 4 hygiene visits a year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Info Banner */}
      <section className="py-12 px-4 bg-[#0A2540] text-white text-center">
        <h3 className="text-base md:text-2xl font-bold max-w-5xl mx-auto">
          All Other Treatment Receives 10% Off Our Private Fees...
        </h3>
      </section>

      {/* Appointment & Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Booking Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">
                Book <span className="text-blue-600">Your Appointment</span>
              </h2>

              <div className="space-y-4 mt-6">
                {["firstName", "lastName", "contactNumber", "email", "service"].map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : field === "contactNumber" ? "tel" : "text"}
                    name={field}
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="bg-blue-50 rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39619.5173618112!2d0.413592!3d51.637499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c0f76404dcfd%3A0x8406ec58bbfb1189!2s15%20The%20Pantiles%20Dental%20Practice%20Billericay%2C%20Essex!5e0!3m2!1sen!2sus!4v1759916415163!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pantiles Dental Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeesPage;

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import WelcomeSection from '../components/WelcomSection';

const Fees = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WelcomeSection/>
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Fees
