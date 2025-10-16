import React, { useState } from "react";
import sedatiohero from "../assets/sedatiohero.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

const sedationHero = sedatiohero;

const SedationDentist = () => {
  const [activeSedationQuestion, setActiveSedationQuestion] = useState(0);
  const [activeAnxiousQuestion, setActiveAnxiousQuestion] = useState(0);

  const sedationData = [
    {
      question: "How Safe Is Sedation Dentistry?",
      content: "Conscious Sedation (IV sedation) is an extremely safe technique when administered by trained professionals. At our clinic, we use advanced monitoring equipment to track your pulse, blood pressure, and blood oxygen levels throughout the procedure and during recovery. Our staff has specific training in sedation care, ensuring your safety at all times."
    },
    {
      question: "Effects of Dentist Sedation",
      content: "You will feel very relaxed and possibly sleepy, with a general sense of detachment from what is going on. During your procedure, you stay conscious but deeply relaxed. The amnesic effect means you'll remember very little of the procedure afterwards, and you'll often lose track of time - long appointments can feel like they're over in minutes."
    },
    {
      question: "How Are You Sedated at The Dentist?",
      content: "The sedation is given through a small plastic tube (cannula) put into a vein on the back of your hand or inside your elbow. The insertion is quick and simple. The sedation is administered in small amounts over time until you're sufficiently relaxed for the procedure to begin. We use Midazolam, a benzodiazepine that creates a general state of relaxation."
    },
    {
      question: "How Long Does Sedation Last For?",
      content: "The length of dental sedation depends on your treatment needs. We maintain sedation at a satisfactory level throughout your procedure. While the immediate effects wear off enough for discharge (usually within 1-2 hours), some effects can linger for up to 24 hours. You'll need someone to escort you home and should avoid driving, operating machinery, or making important decisions for the rest of the day."
    },
    {
      question: "Risks of Dentist Sedations?",
      content: "IV sedation is very safe when performed by trained professionals. Potential risks are minimal but can include bruising at the injection site, temporary drowsiness, or rare allergic reactions. We thoroughly review your medical history beforehand and use continuous monitoring to ensure your safety throughout the procedure."
    },
    {
      question: "What does it feel like? Will I be asleep?",
      content: "You'll feel deeply relaxed and possibly sleepy, but you won't be fully asleep. Many patients doze off during treatment, but the sedative is designed as a relaxant rather than to 'put you to sleep'. You'll remain conscious enough to respond to verbal cues or gentle physical prompts, but you'll feel detached from the procedure."
    },
    {
      question: "How Is IV sedation given?",
      content: "IV sedation is administered through a small cannula placed in a vein in your hand or arm. The sedative (Midazolam) is given in carefully controlled small doses until you reach the desired level of relaxation. The process is gradual and carefully monitored by our trained team throughout your treatment."
    },
    {
      question: "Is it safe? Are there any contraindications?",
      content: "IV sedation is extremely safe when performed by qualified professionals. We conduct a thorough medical assessment beforehand. Contraindications may include certain medical conditions, allergies to sedative medications, pregnancy, or recent substance use. We review your complete medical history to ensure sedation is appropriate for you."
    },
    {
      question: "Is it still necessary to be numbed with local anaesthetic? Will my dentist numb my gums before or after I'm sedated?",
      content: "Yes, local anaesthetic is still required to numb the treatment area. If you're anxious about injections, we wait until the IV sedation has taken effect before administering the local anaesthetic. By this stage, most patients are relaxed enough not to be concerned about the numbing process. We ensure the local anaesthetic is fully effective before beginning any dental procedure."
    }
  ];

  const anxiousData = [
    {
      question: "Is there anything to help me overcome my fear of the dentist?",
      content: "Yes, absolutely. We specialize in helping patients overcome dental anxiety. IV sedation is an excellent option for phobic patients, allowing you to receive necessary dental care in complete comfort and relaxation. We're sympathetic to dental fears and have helped many anxious patients receive treatment they've been putting off for years."
    },
    {
      question: "What is sedation?",
      content: "Sedation in dentistry involves using medication to help patients relax during dental procedures. Conscious sedation (like IV sedation) allows you to remain awake but in a deeply relaxed state. You'll be able to respond to instructions but will feel detached from the procedure and likely remember very little of it afterwards."
    },
    {
      question: "How will IV sedation in the surgery affect me?",
      content: "IV sedation will make you feel deeply relaxed and drowsy. You'll be unaware of the treatment details but still able to cooperate with your dentist. Time will seem to pass very quickly. Afterward, you'll have little memory of the procedure. The effects take time to wear off completely, so you'll need someone to escort you home and should rest for the remainder of the day."
    },
    {
      question: "Pre – operative instructions",
      content: "Before your sedation appointment: • Fast for 6 hours before your procedure (no food or milk) • You may have clear fluids (water, black tea/coffee) up to 2 hours before • Arrange for a responsible adult to escort you home and stay with you for 4-6 hours after • Wear comfortable clothing • Avoid alcohol for 24 hours before • Inform us of any medication changes"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sedationHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-grey-100/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Sedation<br />Dentists
          </h1>
          <p className="mt-6 text-lg text-white max-w-md">
            Book Your Hygiene Appointment With Our Lovely And Experienced Hygienist For A Pearly White Smile
          </p>
        </div>
      </section>

      {/* Why Use Sedation Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Why Use A Sedation Dentist?
          </h2>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              <span className="font-bold">At 15 The Pantiles</span>, we have found that dental sedation can help nervous patients to overcome their fear and allows them to have dental treatment in relaxation and comfort.
            </p>
            <p>
              <span className="font-bold">Conscious Sedation</span> (also known as 'IV sedation) is an extremely safe technique that encourages a deep state of relaxation. <span className="font-bold">At 15 The Pantiles, we use a sedative called Midazolam.</span> This is not designed to 'put you to sleep', but is a relaxant (although we find that many patients fall asleep during treatment).
            </p>
            <p>
              Patients are usually responsive during treatment (you may hear voices and respond to the gentle squeeze of your hand) but the amnesic effect of the drug means that patients remember very little of the procedure afterwards. In addition, patients treated under conscious sedation will often lose track of time, and a very long appointment will appear to be over in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Information About Sedation Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Information About Sedation Dentist Service
          </h2>

          {/* Question Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {sedationData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSedationQuestion(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeSedationQuestion === index
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                {item.question}
              </button>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-gray-200 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto min-h-[200px]">
            <div className="text-gray-800 leading-relaxed">
              {sedationData[activeSedationQuestion].content}
            </div>
          </div>
        </div>
      </section>

      {/* Anxious Patients Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Anxious Patients
          </h2>

          {/* Question Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {anxiousData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveAnxiousQuestion(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeAnxiousQuestion === index
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                {item.question}
              </button>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-gray-200 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto min-h-[200px]">
            <div className="text-gray-800 leading-relaxed">
              {anxiousData[activeAnxiousQuestion].content}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default SedationDentist;