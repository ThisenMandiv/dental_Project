import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import hero from '../assets/veneers-hero.jpeg';
import card1 from '../assets/veneers1.jpeg';
import card2 from '../assets/veneers2.jpeg';

const Veneers = () => {
  return (
    <div className="bg-white">
      <Header/>
      {/* Full-bleed hero */}
      <div
        className="relative w-full h-48 md:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Dental Veneers</h1>
            <p className="text-lg md:text-xl opacity-90">Dental veneers are a cosmetic dental solution to repair chipped teeth, close small gaps and improve the shape, position or colour of teeth.</p>
          </div>
        </div>
      </div>

      {/* Overlapping intro card */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="mt-6 bg-white rounded-xl shadow-md p-5 md:p-7 mx-2 md:mx-0">
          <p className="text-gray-700 text-center md:text-left">
            Dental veneers are a <span className="text-blue-600 font-medium">cosmetic dental procedure</span> which can be used to repair chipped teeth or close small gaps, where braces are considered unsuitable. They can also help to improve the shape, position or colour of teeth; you could compare them to having a fake nail on your fingertip.
          </p>
        </div>
      </div>

      {/* Two info cards */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#f6fbfc] rounded-lg p-5 shadow-sm max-w-md mx-auto">
            <div className="bg-white rounded-lg overflow-hidden mb-4">
              <img src={card1} alt="what are veneers made from" className="w-full rounded object-cover h-40 md:h-48" />
            </div>
            <h3 className="bg-[#17375a] text-white text-center px-4 py-2 rounded-md font-semibold mb-4">What Are Dental Veneers Made From?</h3>
            <p className="text-gray-700">They are made from a thin layer of dental porcelain and placed over the front-facing surface of the tooth. The procedure has been likened to false nails being stuck on top of real nails. If well maintained once fitted a veneer should last for many years, but just like normal teeth, they can be broken or chipped.</p>
          </div>

          <div className="bg-[#f6fbfc] rounded-lg p-5 shadow-sm max-w-md mx-auto">
            <div className="bg-white rounded-lg overflow-hidden mb-4">
              <img src={card2} alt="advantages of veneers" className="w-full rounded object-cover h-40 md:h-48" />
            </div>
            <h3 className="bg-[#17375a] text-white text-center px-4 py-2 rounded-md font-semibold mb-4">What Are The Advantages Of Dental Veneers?</h3>
            <p className="text-gray-700">Veneers can be a less damaging way to repair small cracks and chips than crowns, which require large parts of the tooth to be removed. They will give better results than a composite filling for certain cases and offer excellent aesthetic improvements.</p>
          </div>
        </div>
      </section>

      {/* Procedure heading and pills */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17375a] mb-6">Procedure To Get Tooth/Dental <span className="block text-[#17375a]">Veneers</span></h2>

          {/* Pills (buttons) */}
          <Pills />
        </div>
      </section>


  <Footer />
 
    </div>
  );
};

export default Veneers;

// Pills component with sliding panels
function Pills() {
  const steps = [
    {
      id: 'diagnosis',
      title: 'Diagnosis & Treatment Planning',
      content: `This first stage involves active participation between you and your dentist. You can explain to your dentist the result that you are trying to achieve and you can ask any questions you might have concerning the procedure.

At this appointment, your dentist will examine your teeth and gums to make sure dental veneers are appropriate and discuss what the procedure will involve and some of its limitations. He or she also may take x-rays and possibly make impressions of your mouth and teeth.`
    },
    {
      id: 'preparation',
      title: 'Preparation of Tooth For Dental Veneer',
      content: `In order to prepare a tooth for a veneer, a small amount of enamel from the tooth surface is removed, which is about the same thickness as the veneer which will be added. Your dentist will then take and impression or mould of your teeth.

These moulds are sent to a dental laboratory, which constructs your veneer. It usually takes about two weeks for the laboratory to make the veneers and send them back to your dentist.`
    },
    {
      id: 'bonding',
      title: 'Bonding The Tooth & Dental Veneer',
      content: `A glue cement is applied to the veneer, which is then placed on your tooth. Once the veneer is placed in the correct position on your tooth, your dentist will apply a special light directly onto the veneer which activates chemicals in the cement causing it to harden very quickly. The final steps involve removing any excess cement, evaluating your bite and making final adjustments as necessary.`
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        {steps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            className={`px-6 py-3 rounded-full text-sm transition-shadow border ${
              active === i ? 'bg-[#17375a] text-white border-transparent shadow-md' : 'bg-[#e6f3f7] text-gray-800 border-[#d7eef4]'
            }`}
            aria-pressed={active === i}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {steps.map((s) => (
            <div key={s.id} className="flex-shrink-0 w-full px-4">
              <div className="bg-gray-100 p-6 md:p-8 rounded shadow-lg h-full min-h-[140px]">
                <p className="text-gray-700 whitespace-pre-line">{s.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Header/>
    </div>
  );
}
