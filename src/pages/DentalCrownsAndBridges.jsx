import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import dentureshero from "../assets/dentures_hero.jpg";
import crownshero from "../assets/CrownAndBridgehero.jpg";
import crownsandhero1 from "../assets/CrownAndBridge2.jpg";

const DentalCrownsAndBridges = () => {
  const [activeTab, setActiveTab] = useState(0);

  const fittingSteps = [
    "Dental crowns & bridges are usually made from a hard, white substance that can be modified by adding colour or shading to give a more realistic appearance of a natural tooth.",
    "A bridge is made up of a crown next to a missing tooth, or one crown either side of missing teeth, with a false tooth or teeth in between which restores the space caused by missing teeth.",
    "Crowns and bridges can be made from a number of different materials and your dentist is the best person to advise you as to which best material is suitable depending on the type of crown or bridge required and where it is being placed in your mouth.",
  ];

  const tabs = [
    {
      title: "Preparing The Tooth For A Crown or Bridge",
      content: `Firstly the tooth is prepared under local anaesthetic so the crown or bridge is able to be fitted on the tooth after which moulds (impressions) are taken of both your upper and lower teeth.
This is done so that the technician making your crown or bridge is able to construct it correctly so it will sit within your bite. At this appointment, the dentist will also choose the shade for the crown or bridge which most closely matches the natural shade of your teeth.
The impressions are then sent to a dental lab, where the technician will build the crown or bridge. This normally takes approximately two weeks so in the meantime your dentist may put a temporary crown or bridge on your tooth or teeth to protect during this time.`,
    },
    {
      title: "Fitting The Dental Crown or Bridge",
      content: `At the second visit, the temporary restoration is removed and the new crown or bridge fitted.`,
    },
    {
      title: "How Long Do Dental Crowns/Bridges Last?",
      content: `If it is taken care of properly a crown or bridge can last for many years. The crown or bridge itself cannot decay but the teeth underneath it can.
It is therefore extremely important to make sure that you clean around the crown or bridge as you would your own teeth and use to use floss or interdental brushes to clean in between the crown or bridge and adjacent teeth.
It may be necessary for you to see the dental hygienist more regularly to ensure that the restorations are kept in good condition.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${crownshero})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-white pt-70 leading-tight">
            Dental crowns & bridges
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100">
            Book your hygiene appointment with our lovely and experienced hygienist for a pearly white smile
          </p>
        </div>
      </section>

      {/* Description Card */}
      <div className="max-w-5xl mx-auto bg-blue-900 mt-10 text-white rounded-2xl shadow-lg text-xl p-6 md:p-10">
        <p className="leading-relaxed">
          <span className="font-semibold">Removable dentures</span> are Crown is a tooth-shaped covering that fits over your tooth. It is used to strengthen and protect the tooth following root canal treatment if a tooth has suffered damage or just has a large tooth filling. Crowns can also be used for cosmetic purposes to improve the appearance of a tooth.
        </p>
      </div>

      {/* Steps Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What Are Dental Crowns/Bridges Made From?
              </h2>
              <ul className="space-y-4">
                {fittingSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src= {crownsandhero1}
                  alt="Smiling patient"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heading Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-12 leading-relaxed">
            How To Get Dental Crowns & Bridges <br />Fitted in Essex?
          </h2>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-3 mb-10 flex-nowrap">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all ${
                  activeTab === index
                    ? "bg-gray-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed space-y-5 mb-10">
            {tabs[activeTab].content.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {/* Optional custom heading for last tab */}
            {activeTab === 2 && (
              <h2 className="text-2xl font-bold mt-4 text-gray-900">
                Enquire about our Dental Crowns and Bridges service at our Dental Practice in Billericay, Essex
              </h2>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DentalCrownsAndBridges;
