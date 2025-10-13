import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import AddTestimonialHome from '../components/AddTestimonialHome';
import useTestimonialsGSheet from '../hooks/useTestimonialsGSheet';
import Footer from '../components/Footer';
import testimonialshero from '../assets/Testimonials_hero1.jpeg';

const Testimonials = () => {
  const { list: testimonials, add: addTestimonial, loading, error } = useTestimonialsGSheet();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTestimonial = (newTestimonial) => {
    addTestimonial(newTestimonial);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header />

   {/* ----------  HERO – full-screen picture ---------- */}
<section className="relative h-[62vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
  {/* background picture – full bleed */}
  <img
    src= {testimonialshero}
    alt="Friendly female dentist with young patient in dental clinic"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* subtle darken overlay so white text pops */}
  <div className="absolute inset-0 bg-black/40" />

  {/* text on top */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center max-w-4xl mx-auto px-4"
  >
    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
      Patient Testimonials
    </h1>
    <p className="text-xl lg:text-2xl leading-relaxed">
      Read what our patients say about their experience with<br />
      15 The Pantiles Dental Practice.
    </p>
  </motion.div>
</section>

      {/* Patient Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Happy Patients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied patients about their experience with our dental practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <div className="flex text-yellow-400 mb-2">
                      {'★★★★★'.split('').map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  See More
                </button>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="border border-gray-400 text-gray-600 font-semibold py-3 px-8 hover:bg-gray-100 transition-colors"
            >
              ADD TESTIMONIALS
            </motion.button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <AddTestimonialHome
          onClose={() => setIsModalOpen(false)}
          onAddTestimonial={handleAddTestimonial}
        />
      )}

      <Footer />
    </div>
  );
};

export default Testimonials;
