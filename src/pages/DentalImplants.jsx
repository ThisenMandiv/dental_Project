import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import denpalessentilahero from '../assets/denpalessentilahero.jpg';

// Placeholder images - replace with your actual imports
const dentalImplantsHero = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=400&fit=crop";
const titaniumImg = "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=200&h=300&fit=crop";
const zirconiaImg = "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=200&h=300&fit=crop";
const ceramicImg = "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=200&h=300&fit=crop";
const singleToothImg = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=200&fit=crop";
const multipleTeethImg = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=200&fit=crop";

const DentalImplants = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[350px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dentalImplantsHero})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Dental<br />Implants
          </h1>
          <p className="mt-4 text-base text-white max-w-sm">
            REPLACE MISSING TEETH WITH DENTAL IMPLANTS FOR A PERMANENT SECURE SOLUTION
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-800 leading-relaxed mb-8">
            A Dental implant is a titanium screw as such, often referred to as a 'fixture' which is an artificial tooth root onto which a crown can be attached. It is drilled into your jaw bone at a hospital or at a dental practice and provides a support mechanism to act as an anchor which can replace a single tooth, a full set of teeth or as a means of fixing dentures. Implants are a long-lasting and safe replacement for missing teeth, and a permanent solution to address a lost root tooth at any stage in someone else's life – even if they have complete denture wearers.
          </p>

          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* About Dental Implant */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl p-8">
              <div className="bg-[#1a2847] text-white text-center py-3 rounded-2xl mb-6">
                <h3 className="text-base font-bold">About Dental Implant</h3>
              </div>
              <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
                <p>Dental Implant is designed to replace the missing teeth, and act as root of natural tooth, to which artificial teeth (crowns, bridges) can attach. Before this implants are made of:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Three pieces</li>
                  <li>Titanium material</li>
                  <li>Screw in surgeon</li>
                  <li>Long term solution</li>
                </ul>
              </div>
            </div>

            {/* Why Use Dental Implant */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl p-8">
              <div className="bg-[#1a2847] text-white text-center py-3 rounded-2xl mb-6">
                <h3 className="text-base font-bold">Why Use An Dental Implant</h3>
              </div>
              <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
                <p>Dental Implants are a safe, well-established technique. When fitted by a trained and experienced dental surgeon, they normally offer reliable, long lasting results, will restore to its original state:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Smile</li>
                  <li>Chewing efficiently</li>
                  <li>Face appearance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Long Do Dental Implants Last */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            How Long Do Dental Implants Last?
          </h2>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              The success of your dental implant will be determined in whether it has integrated correctly into the jaw bone. If you've lost more teeth later, these integrations may not take place. With good oral hygiene and diet, you can give your regular maintenance appointments.
            </p>
            <p>
              Implants that are properly maintained can possibly last longer than tooth life, as natural teeth will no longer require extraction due to the chance that failure would likely result from failure in your care plan once you decide which implant brand is right for where they're located within bone in both jaw's. Not getting good at home oral care undermines not only potentially losing these replacements but does damage to other oral and tooth's tissues as well as the implants together, even damaging the bone itself and affecting the tooth tissue in the process. These effects require an increased amount of care by a dentist to address and to bring oral health back to the normal standard.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Used */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Materials Used in Dental Implants
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Titanium */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-48 bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                <img src={titaniumImg} alt="Titanium" className="w-full h-full object-cover opacity-50" />
              </div>
              <div className="bg-[#1a2847] text-white text-center py-2 px-6 rounded-lg mb-3 w-full">
                <h4 className="text-sm font-bold">Titanium Implant</h4>
              </div>
              <p className="text-gray-800 text-sm text-center leading-relaxed">
                Titanium is widely regarded as one of the best dental implant materials due to its strength, durability, and high biocompatibility. Titanium integrates well with the body and is highly resistant to corrosion. Titanium High-grade.
              </p>
            </div>

            {/* Zirconia */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-48 bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                <img src={zirconiaImg} alt="Zirconia" className="w-full h-full object-cover opacity-50" />
              </div>
              <div className="bg-[#1a2847] text-white text-center py-2 px-6 rounded-lg mb-3 w-full">
                <h4 className="text-sm font-bold">Zirconia Implant</h4>
              </div>
              <p className="text-gray-800 text-sm text-center leading-relaxed">
                Zirconia is a highly biocompatible material that is widely used in dental implants. It is known for its strength and aesthetic qualities, making it an excellent choice for those seeking a natural-looking solution. Zirconia High-grade.
              </p>
            </div>

            {/* Ceramic */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-48 bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                <img src={ceramicImg} alt="Ceramic" className="w-full h-full object-cover opacity-50" />
              </div>
              <div className="bg-[#1a2847] text-white text-center py-2 px-6 rounded-lg mb-3 w-full">
                <h4 className="text-sm font-bold">Ceramic crown for Implant</h4>
              </div>
              <p className="text-gray-800 text-sm text-center leading-relaxed">
                Ceramic materials are used to make the crown attached to the implant for teeth to avoid the metallic look common with traditional dental implant materials. Ceramic crowns are durable, aesthetic, and a great long-lasting solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Are Dental Implants Needed */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Are Dental Implants Needed?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Single Tooth */}
            <div className="flex flex-col items-center">
              <div className="w-full h-48 bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                <img src={singleToothImg} alt="Single Tooth" className="w-full h-full object-cover opacity-50" />
              </div>
              <div className="bg-[#1a2847] text-white text-center py-2 px-8 rounded-lg mb-3">
                <h4 className="text-sm font-bold">Single missing tooth Replacement</h4>
              </div>
              <p className="text-gray-800 text-sm text-center leading-relaxed">
                Replacing a single root in a single tooth. In such cases, our dentists can position a dental implant in a single space. No need to grind neighboring teeth for conventional bridge or use.
              </p>
            </div>

            {/* Multiple Teeth */}
            <div className="flex flex-col items-center">
              <div className="w-full h-48 bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                <img src={multipleTeethImg} alt="Multiple Teeth" className="w-full h-full object-cover opacity-50" />
              </div>
              <div className="bg-[#1a2847] text-white text-center py-2 px-8 rounded-lg mb-3">
                <h4 className="text-sm font-bold">Multiple missing teeth Replacement</h4>
              </div>
              <p className="text-gray-800 text-sm text-center leading-relaxed">
                Implant supported bridges can be built from one to several dental implants and are an option to those who have lost one or more teeth.
              </p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-3xl p-8 md:p-10 max-w-4xl mx-auto">
            <p className="text-gray-800 leading-relaxed text-sm">
              "A major surgical work can be costly, performed for all possible reasons to heal the illness, save a life statement, extend a life with devices or medication and extend a life a last resort usually related to a chronic/serious illness. In several cases, major surgery might involve complex and major operations or changes to organ tissue (a biopsy, bone, organs with artificial organ or bone. The one who needs in Organ receivers will be able to decide on way up."
            </p>
          </div>
        </div>
      </section>

      {/* Types of Tooth/Dental Implants */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Types of Tooth / Dental Implants
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Row 1 */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl p-8 h-64 flex items-center justify-center">
              <h3 className="text-xl font-bold text-gray-900">Single Tooth Implant Replacement</h3>
            </div>
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl p-8 h-64 flex items-center justify-center">
              <h3 className="text-xl font-bold text-gray-900">Multiple Tooth Implant Replacement</h3>
            </div>

            {/* Row 2 */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl p-8 h-64 flex items-center justify-center">
              <h3 className="text-xl font-bold text-gray-900">Full Jaw Rehabilitation on 4 or 6 Implants</h3>
            </div>
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl p-8 h-64 flex items-center justify-center">
              <h3 className="text-xl font-bold text-gray-900">Immediate/Dentures Stabilized on implants</h3>
            </div>

            {/* Row 3 */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl p-8 h-64 flex items-center justify-center">
              <h3 className="text-xl font-bold text-gray-900">Conventional (Fixed-Bridge Treatment</h3>
            </div>
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl p-8 h-64 flex items-center justify-center">
              <h3 className="text-xl font-bold text-gray-900">Incisor Anchor (Sutures)</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Procedure To Get Tooth/Dental Implants
          </h2>

          <div className="bg-gray-200 rounded-3xl p-8 md:p-10 max-w-4xl mx-auto mb-8">
            <p className="text-gray-800 leading-relaxed text-sm">
              In most cases, a dental implant is a minor surgery carried out usually in a dental office, carried out within an dental surgeon is a certain expert is a the field as it should be at least there is a treatment you need a consultation to guide to it, help you know all that you need to follow a Dentist's recommendation a dental surgeon which is a Dental Implants is a surgical treatment is an experienced all about is to fix teeth in an is an im...
            </p>
          </div>

          {/* Procedure Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-sm font-medium transition-colors">
              1st site preparation
            </button>
            <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-sm font-medium transition-colors">
              Implant is placed
            </button>
            <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-sm font-medium transition-colors">
              Restoration made
            </button>
          </div>

          <div className="bg-gray-200 rounded-3xl p-8 md:p-10 max-w-4xl mx-auto">
            <p className="text-gray-800 leading-relaxed text-sm">
              The first step is a close dental, test/number, the implant, or implants as indicated on all of which will be on a basis as it assess in detail, size or width measurement for optimal result and will is a teeth with the x to site to use, is to be…
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentalImplants;