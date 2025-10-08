import React from 'react';
import { motion } from 'framer-motion';
import h1 from '../assets/h1.jpg';
import h2 from '../assets/h2.jpg';
import h3 from '../assets/h3.jpg';
import h4 from '../assets/h4.jpg';
import h5 from '../assets/h5.jpg';
import h6 from '../assets/h6.jpg';


const services = [
  {
    title: 'General Dentistry',
    description: 'We provide a wide range of general dentistry from our Billericay practice. Whether you\'re in Billericay itself, Basildon, Ingatestone, Stock, or even further afield, our dental practice can offer you the general dentistry you need to ensure your mouth remains as healthy as possible.',
    imgSrc: h6,
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Cosmetic dentistry is fast becoming a necessity as more and more people strive for the ultimate Hollywood smile. Here at Pantiles Dental, however, we offer a range of different cosmetic dentistry treatments to ensure everyone gets the right course of treatment for them. Let\'s take a closer look at just some of the treatments available in our Billericay dental practice.',
    imgSrc: h5,
  },
  {
    title: 'Dental Implants',
    description: 'The dental implant is designed to replace the missing tooth root and hold the artificial tooth in place. It is a screw made of a titanium screw that replaces the root of a tooth when it fails, and similar to a tooth root, it is placed into the jawbone.',
    imgSrc: h1,
  },
  {
    title: 'Denplan Care',
    description: 'Denplan Care monthly payment plan provides for regular dental care to maintain your dental health. A free dental assessment is made before you join so that the price you pay is dependent on the \'health\' of your mouth. It includes the following treatment, when clinically necessary and where carried out at the practice by your registered dentist.',
    imgSrc: h2,
  },
  {
    title: 'Denplan Essentials',
    description: 'Denplan Essentials monthly payment plan provides for your routine preventive dental care. You also benefit from 10% discount from any further appointments you need. It is easy to set up and no preassessment is necessary.',
    imgSrc: h3,
  },
  {
    title: 'NHS Dental Services',
    description: 'We have a small NHS contract that only allows us to provide NHS dental services for a limited number of patients. Please contact for details of availability.',
    imgSrc: h4,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-center text-[#0A2540] mb-16"
        >
          A Wide Range Of Services For Your Smile
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img src={service.imgSrc} alt={service.title} className="w-full h-56 object-cover"/>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <a href="#" className="text-blue-600 font-semibold hover:underline mt-auto">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
