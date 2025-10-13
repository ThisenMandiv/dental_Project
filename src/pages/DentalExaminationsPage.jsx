import React, { useState, useEffect } from 'react';
import { Search, Activity, Calendar, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import dentalexaminationhero from '../assets/Dental_Examination_hero.jpg';

export default function DentalExaminationsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    service: '',
    message: ''
  });

  // Typewriter animation states
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isTypingComplete1, setIsTypingComplete1] = useState(false);

  const fullText1 = "Dental Examination which is also known as a check-up, allows the dentist to fully evaluate the health of your teeth and gums and to pinpoint any areas of concern, such as early signs of decay, acid erosion or gum disease.";
  const fullText2 = "Regular examinations allow us to help you to maintain a healthy mouth, teeth and gums. If we are able to identify any issues early it is possible to save a lot of pain, time and money!";

  useEffect(() => {
    // First paragraph typing
    if (currentIndex1 < fullText1.length) {
      const timer = setTimeout(() => {
        setDisplayedText1(prev => prev + fullText1[currentIndex1]);
        setCurrentIndex1(prev => prev + 1);
      }, 20); // Adjust typing speed here (milliseconds)
      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete1(true);
    }
  }, [currentIndex1, fullText1]);

  useEffect(() => {
    // Second paragraph typing starts after first is complete
    if (isTypingComplete1 && currentIndex2 < fullText2.length) {
      const timer = setTimeout(() => {
        setDisplayedText2(prev => prev + fullText2[currentIndex2]);
        setCurrentIndex2(prev => prev + 1);
      }, 20); // Adjust typing speed here (milliseconds)
      return () => clearTimeout(timer);
    }
  }, [currentIndex2, fullText2, isTypingComplete1]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    alert('Form submitted!');
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const steps = [
    {
      number: 1,
      title: "Initial Examination",
      description: "Firstly The Dentist Will Thoroughly Examine Your Mouth And Gums.",
      icon: Search
    },
    {
      number: 2,
      title: "Detailed Inspection",
      description: "They Will Use A Tool Closely In Your Mouth To Check For Any Signs Of Decay, Plaque Build Up Or Gum Disease.",
      icon: Search
    },
    {
      number: 3,
      title: "X-Ray Analysis",
      description: "If Necessary For You To Have X-rays Taken To Problem Areas.",
      icon: Activity
    },
    {
      number: 4,
      title: "Cleaning Assessment",
      description: "If Needed They Will Calculate Of Staining Build Up Over Time.",
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
   {/* Hero Section - Fixed height */}
<section
  className="relative bg-cover bg-center bg-no-repeat px-6 md:px-20 py-16 md:py-24 text-white"
  style={{ backgroundImage: `url(${dentalexaminationhero})` }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 via-blue-400/50 to-transparent"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
  
  {/* Content container with fixed height */}
  <div className="relative z-10 min-h-[500px] md:min-h-[550px] flex flex-col">
    {/* Title section */}
    <div className="max-w-3xl mb-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10 leading-tight">
        Dental Examinations
      </h1>
      <p className=" text-lg md:text-xl text-gray-100">
        Book Your Appointment With Our Lovely And Experienced Hygienist For A Pearly White Smile.
      </p>
    </div>
    
    {/* Spacer to push description to bottom */}

    
    {/* Description Card with fixed max height and scrollable content */}
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 mt-2 rounded-b-[30px] md:rounded-b-[40px] max-h-[200px] md:max-h-[180px] overflow-y-auto">

      <p className="text-sm md:text-base leading-relaxed">
        <span className="font-semibold">{displayedText1}</span>
        {/* Blinking cursor */}
        {currentIndex1 < fullText1.length && (
          <span className="ml-1 inline-block w-2 h-4 bg-white animate-pulse"></span>
        )}
      </p>
      <p className="text-sm md:text-base text-white leading-relaxed mt-3 mb-2">
        {displayedText2}
        {/* Blinking cursor for second paragraph */}
        {isTypingComplete1 && currentIndex2 < fullText2.length && (
          <span className="ml-1 inline-block w-2 h-4 bg-white animate-pulse"></span>
        )}
      </p>
    </div>
  </div>
</section>

      {/* What Does A Dental Examination Involve Section */}
      <section className="px-4 py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Does A Dental Examination Involve?
          </h2>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-0">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {step.number}
                    </div>
                    <Icon className="w-8 h-8 text-blue-600" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Bottom Information Card */}
      <div className="p-8 max-w-4xl mx-auto">
        <p className="text-center text-gray-800 text-xl md:text-2xl leading-relaxed font-semibold">
          If you require any further treatment the dentist will discuss all the possible options available, allowing you to make a fully informed decision on the treatment needed.
        </p>
      </div>

      {/* Appointment Booking & Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Booking Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Book <span className="text-blue-600">Your Appointment</span>
              </h2>
              
              <div className="space-y-4 mt-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input
                  type="text"
                  name="service"
                  placeholder="Service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* Map - Increased height */}
            <div className="bg-blue-50 rounded-2xl overflow-hidden shadow-lg h-[700px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39619.5173618112!2d0.413592!3d51.637499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c0f76404dcfd%3A0x8406ec58bbfb1189!2s15%20The%20Pantiles%20Dental%20Practice%20Billericay%2C%20Essex!5e0!3m2!1sen!2sus!4v1759916415163!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pantiles Dental Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}