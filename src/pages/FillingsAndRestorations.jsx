import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import filingnresthero from "../assets/filingnrest-hero.jpeg";
import filling1 from "../assets/filling1.jpeg";
import filling2 from "../assets/filling2.jpeg";
import filling3 from "../assets/filling3.jpeg";
import fillingVideo from "../assets/fillingVideo.mp4";

const FillingsAndRestorations = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${filingnresthero})`,
        }}
      >
        {" "}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent"></div>
        <div className="relative z-10 flex items-center justify-start min-h-screen px-4 md:px-8">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Fillings And Restorations
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white">
                Book Your Hygiene Appointment With Our Lovely And Experienced
                Hygienist For A Pearly White Smile
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="px-4 md:px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="mb-16 bg-gradient-to-br from-blue-900 to-blue-900 p-8 md:p-12 rounded-xl">
            <p className="text-lg md:text-xl leading-relaxed text-white">
              If you have a hole in your tooth caused by tooth decay or if your
              tooth is cracked or damaged, then you may need a Tooth Filling or
              Restoration. The procedure of having a filling is usually carried
              out whilst you are awake with a local anaesthetic used to make
              sure you cannot feel the area being worked on.
            </p>
          </div>

          {/* How Are Tooth Fillings Completed */}
          <div className="mb-16 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#223B6E] mb-8">
              How Are Tooth Fillings Completed?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li>
                    • Any Decay Is Removed And The Cavity Shaped To Support The
                    Filling
                  </li>
                  <li>
                    • The Cavity Is Then Filled With Your Desired Filling Type
                  </li>
                  <li>
                    • The Material Used To Fill The Tooth Depends On Which Tooth
                    In The Mouth Needs Treating As Well As Other Factors Such As
                    The Strength Of Your Bite
                  </li>
                  <li>
                    • Please Make Sure To Let Your Dentist Know If You Would
                    Like A Specific Filling Such As A White Tooth Coloured
                    Filling
                  </li>
                </ul>
                <p className="mt-6 text-lg">
                  If you have the tooth filled and treated as soon as possible
                  after you notice decay or a crack this will prevent the tooth
                  from deteriorating further and will also avoid the need for
                  more extensive dental treatment.
                </p>
              </div>
              <div className="space-y-6">
                <video
                  src={fillingVideo}
                  autoPlay
                  loopF
                  muted
                  playsInline
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Types of Tooth Filling */}
          <div className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-[#223B6E] mb-12">
              Types Of Tooth Filling
            </h2>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={filling1}
                  alt="Amalgam Fillings"
                  className="w-full h-68 object-contain p-4"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Amalgam Fillings</h3>
                  <p>
                    Silver amalgam fillings have been used for over 150 years
                    and are a tried and tested method of filling teeth. These
                    are particularly durable and cost-effective.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={filling2}
                  alt="Composite Filling"
                  className="w-full h-68 object-contain p-4"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Composite Filling</h3>
                  <p>
                    White composite fillings are made from a tooth-coloured
                    material that looks just like a natural tooth, providing
                    excellent aesthetic results.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={filling3}
                  alt="Glass Ionomer Fillings"
                  className="w-full h-68 object-contain p-4"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Glass Ionomer Fillings
                  </h3>
                  <p>
                    Made from a mixture of glass and organic acid, these
                    fillings bond chemically to your teeth and release fluoride
                    to help prevent further decay.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Replacing An Old Tooth Filling */}
          <div className="mb-16 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-[#223B6E] mb-8">
              Replacing An Old Tooth Filling
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-[#223B6E] mr-3 text-xl">•</span>
                <p className="text-lg">
                  We Normally Advise Changing Fillings When Your Dentist
                  Advises. This Makes Sure The Structure Of Your Teeth Is
                  Preserved Instead Of Causing Damage When Removing The Old
                  Filling.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-[#223B6E] mr-3 text-xl">•</span>
                <p className="text-lg">
                  If You Do Want To Replace An Old Unsightly Filling Or Have
                  Been Advised To Do So By Your Dentist Because Of Decay Or
                  Other Damage Then We Can Provide You With Mercury-Free
                  Tooth-Coloured Fillings Which Are Composed Of Synthetic
                  Resins, Glass Particulates And A Setting Ingredient.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-[#223B6E] mr-3 text-xl">•</span>
                <p className="text-lg">
                  Please Contact Your Dentist If You Have Any Worries Or
                  Concerns About Your Fillings Or Are Simply Interested In
                  Replacing Old Fillings With More Cosmetic Ones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FillingsAndRestorations;
