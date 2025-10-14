import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import dentureshero from '../assets/dentures_hero.jpg';

const RemovableDenturesPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Example fitting steps for dentures
  const fittingSteps = [
    "Initial dental assessment and impressions of your mouth.",
    "Creation of a wax model to check fit and bite.",
    "Try-in of the denture for adjustments.",
    "Final fitting and instructions for care and maintenance."
  ];

  const tabs = [
    {
      title: 'General Dental Checkups',
      content: `Regular check ups are an integral part of any dental routine. In order to keep on top of your dental health, you should be having regular professional assessments of your mouth. We recommend that you attend at least once annually however, should you need more regular check-ups, this can be arranged.

During routine check ups, we'll remove plaque and tartar while also testing for gum disease and mouth cancers. Should you need it, we can also provide you with helpful advice with regards to brushing your teeth for maximum benefit while also advising on flossing and mouth wash procedures.

If you're in need of fillings, root canal or even extraction to get your mouth back to being clean, fresh and healthy, our team are on hand to provide whatever treatment you may require.

If you're looking for general dentistry services in Shenfield, Rayleigh or even Wickford, rest assured The Pantiles Dental Practice are here to help.`
    },
    {
      title: 'Our Hygienist Services Are Second To None',
      content: `Visiting a hygienist at least once every six months we believe is crucial to keeping your smile looking and feeling healthy. Not only will a hygienist give your mouth a thorough clean, leaving your pearly whites looking much brighter and whiter but they'll also help prevent gum disease, bad breath and oral cancer.

Our hygienists are equipped with the very best knowledge, skills and tools to tackle those truly hard to reach places. They'll give you a thorough deep clean to ensure even those with a home dental routine that's second to none, leave with a mouth cleaner than they've ever known.`
    },
    {
      title: 'General Dentistry Services In Billericay',
      content: `Rest assured our general dentistry services in Billericay have you covered. Our clients venture from Brentwood to Basildon, Rayleigh and beyond because they know that with The Pantiles Dental Practice, they're in good hands every single step of the way.

You can trust in us to handle your dental history carefully, ensuring your dental health is our priority at all times. From toddlers through to adults, the Pantiles Dental practice is here for you.`
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
{/* Hero Section */}
<section
  className="relative min-h-screen bg-cover bg-center bg-no-repeat"
style={{
          backgroundImage: `url(${dentureshero})`,
        }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white pt-60 leading-tight">
      Removable  Dentures
    </h1>
    <p className="mt-4 text-lg md:text-xl text-gray-100">
      Book Your Hygiene Appointment With Our Lovely And Experienced Hygienist For A Pearly White Smile.
    </p>
  </div>
</section>

      {/* Description Card */}
<div className="max-w-5xl mx-auto bg-blue-900 mt-10 text-white rounded-2xl shadow-lg text-xl p-6 md:p-10">
  <p className="leading-relaxed">
    <span className="font-semibold">Removable dentures</span> are removable false teeth made from either acrylic or metal that replace missing teeth.
  </p>
</div>


      {/* How Are Dentures Fitted Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How Are Dentures Fitted To Your Mouth?
              </h2>
              
              <ul className="space-y-4">
                {fittingSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>

              <div className=" border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-blue-900 font-semibold">
                  Your dentist will give you options depending on your circumstances.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden ">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop" 
                  alt="Smiling patient" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Of Dentures Section */}
      <section className="px-4 py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Types Of Dentures Fitted
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Full Dentures Card */}
            <div className=" rounded-2xl overflow-hidden ">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">
                  Full Dentures
                </h3>
                <div className="rounded-xl p-6 mb-6 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop" 
                    alt="Full dentures" 
                    className="w-93 h-auto object-contain rounded-2xl"
                  />
                </div>
                <p className="text-gray-100 leading-relaxed text-center">
                  Complete dentures, which also known as Full dentures, are prosthetic teeth that will be fitted if all your upper and/or lower teeth need to be removed. They fit snugly over your gums and jawbone.
                </p>
              </div>
            </div>

            {/* Partial Dentures Card */}
            <div className=" rounded-2xl overflow-hidden ">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">
                  Partial Dentures
                </h3>
                <div className=" rounded-xl p-6 mb-6 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop" 
                    alt="Partial dentures" 
                    className="w-93 h-auto object-contain rounded-2xl"
                  />
                </div>
                <p className="text-gray-100 leading-relaxed text-center">
                  If you have some of your own natural teeth, you may only need a Partial denture to fill in the gaps left by missing teeth. Partial dentures are made from a metal or plastic plate with a number of false teeth attached. These are either fastened to your natural teeth with a metal clasp so they can be unclipped and removed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Info Tabs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed space-y-5">
            {tabs[activeTab].content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      
      <Footer   />
    </div>
  );
}

export default RemovableDenturesPage;
