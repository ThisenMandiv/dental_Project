import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import nhshero from "../assets/nhshero.jpg";

const NHS = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${nhshero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/60 to-blue-300/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl md:text-7xl font-bold pt-70 text-white leading-tight mb-8">
            National Health Service
          </h1>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />F{/* Description Card */}
      <div className="max-w-4xl mx-auto bg-white -mt-16 mb-16 px-4 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
          <p className="text-gray-800 text-center leading-relaxed">
            We have a small NHS contract that only allows us to provide NHS
            dental services for a limited number patients. Please contact for
            details of availability.
          </p>
        </div>
      </div>
      {/* Treatment Bands Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Band 1 and Band 2 - Two Columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Band 1 */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl overflow-hidden p-8">
              <div className="bg-[#1a2847] text-white text-center py-4 rounded-2xl mb-6">
                <h3 className="text-lg font-bold">
                  Band 1 course of treatment
                </h3>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#2c5aa0]">
                  £25.80
                </span>
              </div>
              <p className="text-gray-800 leading-relaxed text-center">
                This covers an examination, diagnosis (eg X-rays), advice on how
                to prevent future problems, a scale and polish if needed, and
                application of fluoride varnish or fissure sealant. If you
                require urgent care, even if your urgent treatment needs more
                than one appointment to complete, you will only need to pay one
                Band 1 charge.
              </p>
            </div>

            {/* Band 2 */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl overflow-hidden p-8">
              <div className="bg-[#1a2847] text-white text-center py-4 rounded-2xl mb-6">
                <h3 className="text-lg font-bold">
                  Band 2 course of treatment
                </h3>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#2c5aa0]">
                  £70.70
                </span>
              </div>
              <p className="text-gray-800 leading-relaxed text-center">
                This covers everything listed in Band 1 above, plus any further
                treatment such as fillings, root canal work or if your dentist
                needs to take out one or more of your teeth.
              </p>
            </div>
          </div>

          {/* Band 3 - Single Centered Card */}
          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl overflow-hidden p-8">
              <div className="bg-[#1a2847] text-white text-center py-4 rounded-2xl mb-6">
                <h3 className="text-lg font-bold">
                  Band 3 course of treatment
                </h3>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#2c5aa0]">
                  £306.80
                </span>
              </div>
              <p className="text-gray-800 leading-relaxed text-center">
                This covers everything listed in Bands 1 and 2 above, plus
                crowns, dentures and bridges.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NHS;
