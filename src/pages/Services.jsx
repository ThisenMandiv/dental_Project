import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import WelcomeSection from '../components/WelcomSection';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WelcomeSection/>
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default ServicesPage
