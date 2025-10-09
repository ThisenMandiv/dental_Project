import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import happyClients1 from '../assets/happyclient1.png';
import happyClients2 from '../assets/happyclient2.png';
import happyClients3 from '../assets/happyclient3.png';


const testimonials = [
  {
    title: 'Highly Recommend',
    quote: 'I can confidently say they\'re the best! The staff is always welcoming, and Doctors are exceptionally skilled.',
    name: 'Stella Herman',
    location: 'Macejkovicbury',
    avatarUrl: 'https://picsum.photos/seed/stella/100/100',
    imageUrl: happyClients1,
  },
  {
    title: 'Gentle and Caring',
    quote: 'I can confidently say they\'re the best! The staff is always welcoming, and Doctors are exceptionally skilled.',
    name: 'Beulah Mertz',
    location: 'Chelsieshire',
    avatarUrl: 'https://picsum.photos/seed/beulah/100/100',
    imageUrl: happyClients2,
  },
  {
    title: 'A Wonderful Experience',
    quote: 'I can confidently say they\'re the best! The staff is always welcoming, and Doctors are exceptionally skilled.',
    name: 'Wilfred Jerde',
    location: 'Wisokytown',
    avatarUrl: 'https://picsum.photos/seed/wilfred/100/100',
    imageUrl: happyClients3,
  },

];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-12"
        >
          Our Happy Clients
        </motion.h2>
        
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="!pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pt-24"
              >
                <div className="absolute top-0 left-0 right-0 h-48">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={`Testimonial background ${index + 1}`} 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="relative bg-white rounded-2xl shadow-lg p-6 pt-8 mx-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{testimonial.title}</h3>
                  <p className="text-gray-600 italic text-center mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-center">
                    <img 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-400 text-gray-600 font-semibold py-3 px-8 hover:bg-gray-100 transition-colors"
          >
            ADD TESTIMONIALS
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
