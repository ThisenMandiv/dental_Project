import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import compositeBondingHero from '../assets/compositehero.jpg';



const CompositeBonding = () => {
  return (
    <div className="min-h-screen bg-white">
        <Header/>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${compositeBondingHero})` }}
      >
        <div className="absolute inset-0 bg-blue-900/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Composite<br />Bonding
          </h1>
          <p className="mt-6 text-lg text-white max-w-md">
            Book Your Hygiene Appointment With Our Lovely And Experienced Hygienist For A Pearly White Smile
          </p>
        </div>
      </section>

      {/* Description Card */}
      <div className="max-w-4xl mx-auto bg-white -mt-0 mb-16 px-4 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
          <p className="text-gray-800 leading-relaxed">
            Composite bonding is typically used to repair discoloration, filling defects, and close gaps between teeth. A composite resin is fitted to a tooth and molded to mimic the tooth's natural shape. Since the resin's color matches that of your teeth, it will appear to be a natural component of the tooth. You may be able to achieve a smile you're happier with through composite bonding. To learn more about composite bonding, get in touch with the Bupa Dental Care office that is closest to you.
          </p>
        </div>
      </div>

      {/* Two Benefits Cards */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fast and effective */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl overflow-hidden p-8">
              <div className="bg-[#1a2847] text-white text-center py-4 rounded-2xl mb-6">
                <h3 className="text-lg font-bold">Fast and effective</h3>
              </div>
              <div className="space-y-4 text-gray-800 leading-relaxed">
                <p>
                  Often, composite bonding only requires one dental appointment. It's a quick and efficient technique to address minor aesthetic problems.
                </p>
                <p>
                  As soon as the composite is put, it is hardened using a curing light, and by the conclusion of the visit, the tooth is ready for comfortable biting.
                </p>
              </div>
            </div>

            {/* Non-invasive */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl overflow-hidden p-8">
              <div className="bg-[#1a2847] text-white text-center py-4 rounded-2xl mb-6">
                <h3 className="text-lg font-bold">Non-invasive</h3>
              </div>
              <div className="space-y-4 text-gray-800 leading-relaxed">
                <p>
                  Moreover, bonding is a non-invasive process. Alternatives like crowns and veneers involve the permanent removal of a portion of the tooth.
                </p>
                <p>
                  The tooth's surface just needs to be roughened for the resin to adhere in order to apply composite bonding, leaving the tooth's structural integrity untouched.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Procedure To Get Composite Bonding
          </h2>

          {/* Procedure Pills - Top Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="px-8 py-4 bg-gray-200 text-gray-800 rounded-full text-base font-medium">
              Select a shade
            </div>
            <div className="px-8 py-4 bg-gray-200 text-gray-800 rounded-full text-base font-medium">
              Prepare your tooth
            </div>
            <div className="px-8 py-4 bg-gray-200 text-gray-800 rounded-full text-base font-medium">
              Apply the composite resin material
            </div>
          </div>

          {/* Procedure Pills - Bottom Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-8 py-4 bg-gray-200 text-gray-800 rounded-full text-base font-medium">
              Cure the material
            </div>
            <div className="px-8 py-4 bg-gray-200 text-gray-800 rounded-full text-base font-medium">
              Polish your tooth
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-gray-200 rounded-3xl p-8 md:p-10 max-w-4xl mx-auto">
            <p className="text-gray-800 leading-relaxed">
              A composite resin material that closely resembles the color of your natural teeth is chosen by your dentist using a shade guide.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CompositeBonding;