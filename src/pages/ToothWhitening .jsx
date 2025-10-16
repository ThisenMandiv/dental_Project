import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import toothwhiteninghero from "../assets/toothwhiteninghero.jpg";

const ToothWhitening = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${toothwhiteninghero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Tooth
            <br />
            Whitening
          </h1>
          <p className="text-white text-lg max-w-xl">
            Book Your Appointment And Our Team Will Get You On The Way For A
            Pearly White Smile
          </p>
        </div>
      </section>

      {/* Introduction Text */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-8 text-gray-700 leading-relaxed">
          <p>
            Tooth whitening is possibly one of the most popular treatments
            within <span className="text-blue-900">cosmetic dentistry</span>. It
            can be incredibly effective, giving you a brighter, whiter smile
            without causing damage to teeth or permanent gum sensitivity. The
            question for many, however, is whether tooth whitening is worth the
            investment? In order to answer this, we thought we'd share just a
            few of the benefits people enjoy when they receive our tooth
            whitening treatment.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-400/20 overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
              <h3 className="text-xl font-bold">
                Why People Get Teeth Whitened ?
              </h3>
            </div>
            <div className="p-6 space-y-4 text-gray-700">
              <p className="font-semibold">
                Did you know, according to recent statistics discovered by the
                American Academy of Cosmetic Dentistry, 96% of adults feel an
                attractive smile is more appealing to potential partners?
              </p>
              <p>
                Did you know 74% of adults feel they have less success career
                wise due to an unattractive smile?
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-400/20 overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
              <h3 className="text-xl font-bold">
                White Teeth Enhance Your Appearance
              </h3>
            </div>
            <div className="p-6 space-y-4 text-gray-700 text-sm">
              <p>
                While you may have the straightest, healthiest smile, you aren't
                immune to the discolouration or everyday staining caused by tea,
                wine and coffee to highly coloured foods such as tomato-based
                sauces and more.
              </p>
              <p>
                This can happen to anyone and everyone. With teeth whitening,
                however, you can combat this totally and produce a much
                brighter, whiter, and cleaner looking smile.
              </p>
              <p>
                This will give you a better image overall and as your smile is
                one of the first things people notice, it helps you make a much
                better first impression too.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-400/20 overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
              <h3 className="text-xl font-bold">
                Cost Of Teeth Whitening services ?
              </h3>
            </div>
            <div className="p-6 space-y-4 text-gray-700">
              <p className="font-semibold">
                Unlike other cosmetic dentistry treatments, teeth whitening
                doesn't cost as much as you might think.
              </p>
              <p>
                This is especially the case for the treatment here at Pantiles,
                which minimises the amount of time you need to spend in the
                dentist's chair. Our custom made-at-home teeth whitening isn't
                just convenient, they're cost-effective too.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-blue-400/20 overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
              <h3 className="text-xl font-bold">
                White Teeth Boost self Confidence
              </h3>
            </div>
            <div className="p-6 space-y-4 text-gray-700">
              <p>
                With whiter teeth, you'll instantly feel better and as a result,
                your confidence will increase hugely.
              </p>
              <p>
                From work to socials, brighter, whiter teeth are hard to miss
                and we guarantee after enjoying whiter teeth for one day, you'll
                notice a huge difference in how you feel about yourself and how
                you carry yourself as a result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* At-Home Kits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            At-Home Tooth Whitening Kits in
            <br />
            Billericay, Essex
          </h2>

          <div className="bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl p-8 md:p-12 space-y-6 text-gray-700">
            <p>
              We provide an at-home kit that produces in-clinic quality results.
              Upon your visit to the practice, we'll take impressions of your
              teeth and create custom made whitening trays.
            </p>
            <p>
              Once the whitening trays have been created, we'll send you home
              with the trays and whitening solution. These trays can then be
              worn at night for around 2 to 3 weeks to produce the desired
              effect.
            </p>
            <p>
              The darker your teeth, the longer the treatment will take however
              rest assured, everyone will enjoy brighter, whiter teeth with this
              safe and effective solution.
            </p>
            <p>
              On top of helping your teeth become much whiter, the tooth
              whitening gel has also been known to help improve gum health too,
              helping them heal and improve their general wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ToothWhitening;
