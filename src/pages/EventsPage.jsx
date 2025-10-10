import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import eventhero from '../assets/eventshero.jpg';
import sugarfree from '../assets/sugarfree.png';
import stopober from '../assets/stopober.png';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{backgroundImage: `url(${eventhero})`}}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-8xl font-bold text-gray-100 ml-16">
              Events
            </h1>
          </div>
        </div>
      </section>

      {/* Events Cards Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl space-y-16">
          
          {/* Sugar Free September Card */}
          <div id="sugar-free-september" className="bg-white rounded-3xl shadow-lg p-8 border-4 border-blue-200">
            <div className="flex justify-center mb-6">
              <div className="relative">
              
                  <img 
                    src={sugarfree}
                    alt="Sugar Free September"
                    className=" h-80 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="text-center"><div class="text-6xl mb-2">🍬</div><div class="text-2xl font-bold text-red-500">Sugar Free</div><div class="text-xl text-cyan-500">SEPTEMBER</div></div>';
                    }}
                  />
                
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sugar Free September
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sugar-free September is all about giving up the sugars that are added to our foods and drinks (these are called extrinsic sugars if you're interested in the sciencey bit).
              </p>

              <p>
                We already have more than enough sugar in our diets from naturally-occurring sources such as whole fruits, vegetables and milk (these are intrinsic sugars) and we don't need the refined and processed sugar on top!
              </p>

              <p>
                So why not join Denplan and go sugar-free this September and see how much better you feel? After a month, you may even adjust how much sugar you consume going forward, which can only be a good thing!
              </p>
            </div>
          </div>

          {/* Stoptober Card */}
          <div id="stoptober" className="bg-white rounded-3xl shadow-lg p-8 border-4 border-blue-200">
            <div className="flex justify-center mb-6">
              <div className="relative">
               
                  <img 
                    src= {stopober} 
                    alt="Stoptober"
                    className=" h-80 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="text-center"><div class="text-6xl mb-2">🚭</div><div class="text-3xl font-bold"><span class="text-red-600">Stop</span><span class="text-cyan-500">tober</span></div></div>';
                    }}
                  />
               
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sugar Free September
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Smokers across the country have signed up to Stoptober 2016, a 28-day mass quit attempt from Public Health England (PHE), to receive support and encouragement every step of the way from some of the nation's top comedians.
              </p>

              <p>
                But do they also realise that the added benefits that being smoke-free can have on their mouths?
              </p>

              <p>
                It is at the heart of what we do. Smokers are at a significantly higher risk of suffering from gum disease, tooth decay and even mouth cancer. Regular visits to their dentist play a vital role in detecting early signs of potential problems.
              </p>

              <p>
                And to stand an even better chance of quitting, they are encouraged to sign up with their friends, family and colleagues, as evidence reveals that that type of 'social' quitting can significantly improve chances of success. In 2014, smokers taking part in Stoptober were 67% more likely to quit when their spouse quits smoking and 36% more likely when a colleague quits * so why not encourage your employees to sign up and take advantage of the personalised support that Stoptober?
              </p>

              <p>
                To help your employees quit smoking, click here for posters and how to sign up.
              </p>

       <a 
  href="https://www.gov.uk/government/news/sign-up-to-stoptober-with-friends-family-and-colleagues"
  target="_blank" 
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  www.gov.uk/government/news/sign-up-to-stoptober-with-friends-family-and-colleagues
</a>

            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
<Footer />
    </div>
  );
};

export default EventsPage;
