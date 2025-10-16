import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import invisalignhero from "../assets/invisalignhero.png";

const Invisalign = () => {
  const treatmentSteps = [
    {
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400",
      title: "Step 1",
      description:
        "We will take you through the form assessment process to show you photos to determine whether you are suitable for Invisalign treatment.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=400",
      title: "Step 2",
      description:
        "A treatment is right for you, we'll take impressions. Once the laboratory receive your dental impressions, at your teeth. Then we'll create you a digital treatment plan to show you how your teeth will move during your treatment. This usually takes two weeks.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400",
      title: "Step 3",
      description:
        "We'll give you a series of aligners to wear over your oral hygiene at home - we recommend wearing each set of aligners for a week before moving on to the next aligner in your sequence for 22 hours a day [you should remove them when eating, drinking anything hot or cleaning your teeth]. Invisalign means there are no obstructions to your daily life, enabling you maintain good dental health every year arises",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400",
      title: "Step 4",
      description:
        "We'll normally you back to the practice once a every 6-8 weeks to monitor the progress of your oral hygiene aligners. At the end of your treatment period, you may need to wear a retainer to maintain the positioning of your teeth post-treatment.",
    },
  ];

  const biteIssues = [
    {
      title: "Crossbite",
      subtitle: "CAN WE FIX WITH INVISALIGN IN BILLERICAY ESSEX?",
      beforeAfter:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300",
      beforeText: "BEFORE",
      afterText: "AFTER",
      buttonText: "Over 18 only",
      description:
        "Crossbite occurs when one or more of your upper teeth sit inside of your lower teeth - the opposite of the lower teeth. By your lower teeth, your jaw is forced to one side or another which can result in uneven jaw or teeth wear and can lead to bone and gum loss.",
    },
    {
      title: "Crowding",
      subtitle: "BEFORE AND AFTER",
      beforeAfter:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300",
      beforeText: "BEFORE",
      afterText: "AFTER",
      buttonText: "Over 18 only",
      description:
        "Crowding of your teeth can lead to severe plaque build-up over time. This can result in extremely problematic tooth decay and/or gum disease. By treating these teeth with Invisalign, including a severe build up of plaque and bacteria, you can ensure that it doesn't progress due to the difficulty in cleaning.",
    },
    {
      title: "Deep bite",
      subtitle: "BEFORE AND AFTER",
      beforeAfter:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300",
      beforeText: "BEFORE",
      afterText: "AFTER",
      buttonText: "Over 18 only",
      description:
        "If you have a deep bite, you may notice that you have issues for cleanser near your lower teeth. With a deep bite, the top and bottom bite too far down onto the lower teeth - potentially at the gum line - this can cause painful irritation plus more serious dental problems.",
    },
    {
      title: "Gapped teeth",
      subtitle: "CAN WE FIX WITH INVISALIGN IN BILLERICAY ESSEX?",
      beforeAfter:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300",
      beforeText: "BEFORE",
      afterText: "AFTER",
      buttonText: "Over 18 only",
      description:
        "Spacing occurs where you have gaps between your teeth - essentially your jaw bone is too wide, having more space in your mouth than is needed for your teeth. This often leads to gum problems, as the gaps can become food traps where bacteria can increase a risk of periodontal (gum) and gum disease.",
    },
    {
      title: "Open bite",
      subtitle: "CAN WE FIX WITH INVISALIGN IN BILLERICAY ESSEX?",
      beforeAfter:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300",
      beforeText: "BEFORE",
      afterText: "AFTER",
      buttonText: "Over 18 only",
      description:
        "With an open bite, the lower and upper teeth don't touch when they bite. This can occur in difficulty in biting or chewing food at the front of your mouth or teeth. Pronunciation (clear) your teeth.",
    },
    {
      title: "Underbite",
      subtitle: "CAN WE FIX WITH INVISALIGN IN BILLERICAY ESSEX?",
      beforeAfter:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300",
      beforeText: "BEFORE",
      afterText: "AFTER",
      buttonText: "Over 18 only",
      description:
        "You need review to have more forward the bottom teeth; this force when in front or too far forward wear in front or jaw juts out. People with this issue can often end up with pain which the jaw joint, teeth wearing down or jaw pain.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
     
      <section
        className="relative bg-cover bg-center bg-no-repeat px-6 md:px-20 py-24 md:py-40 text-white flex flex-col justify-center min-h-[400px] md:min-h-[750px]"
        style={{ backgroundImage: `url(${invisalignhero})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>{" "}
        {/* Optional overlay */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Invisaligns
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100">
            If you're unhappy with the way your teeth look, or feel self
            conscious about smiling, Invisalign could be the solution for you.
          </p>
          <br />
          <br />
          <br />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />

  {/* Description Card */}
      <div className="max-w-4xl mx-auto bg-white -mt-16 mb-16 px-4 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
          <p className="text-gray-800 text-center leading-relaxed">
            We have a small NHS contract that only allows us to provide NHS
            dental services for a limited number patients. Please contact for
            details of availability.
          </p>
        </div>
      </div>

      {/* Benefits Section with Blue Box and Images */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Blue Box */}
          <div className="bg-blue-100 rounded-2xl p-8 space-y-6">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Invisalign aligners are virtually invisible to people around you
                allowing you keep doing their day work and social events. And
                they won't interfere with eating or other activities. Unlike
                traditional metal braces they don't have a way and staining them
                so you have etc.
              </p>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed">
                Most of us Invisalign will be completed within one year but this
                does vary for each individual patient. Invisalign is problem
                getting you into Hollywood looking mouth or smaller teeth, or an
                adult who previously had orthodontic treatment giving you a
                longer timeframe might then smile better. The time you need to
                stay appearance. You may then be given new appointment dates for
                ongoing appointments.
              </p>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full"></div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400"
                alt="Invisalign aligner"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=600"
              alt="Teeth comparison"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Treatment Steps Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {treatmentSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <button className="bg-gray-900 text-white px-6 py-2 rounded text-sm font-semibold mb-4">
                  {step.title}
                </button>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bite Issues Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {biteIssues.map((issue, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="text-center py-6 border-b">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {issue.title}
                  </h3>
                  <p className="text-xs text-gray-600">{issue.subtitle}</p>
                </div>

                <div className="relative">
                  <img
                    src={issue.beforeAfter}
                    alt={`${issue.title} comparison`}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 flex items-center justify-center">
                      <span className="bg-white px-3 py-1 rounded text-xs font-semibold">
                        {issue.beforeText}
                      </span>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                      <span className="bg-white px-3 py-1 rounded text-xs font-semibold">
                        {issue.afterText}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <button className="bg-gray-900 text-white px-6 py-2 rounded text-sm font-semibold mb-4">
                    {issue.buttonText}
                  </button>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {issue.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Start Wearing
            <br />
            Your Smile With Confidence
          </h2>
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800"
            alt="Invisalign product"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Invisalign;
