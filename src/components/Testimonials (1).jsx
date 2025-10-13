import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import happyClients1 from '../assets/happyclient1.png';
import happyClients2 from '../assets/happyclient2.png';
import happyClients3 from '../assets/happyclient3.png';
import { X } from 'lucide-react';
import useTestimonials from '../hooks/useTestimonials';

/* ----------  hard-coded “seed” reviews (keep exactly as before) ---------- */
const hardCoded = [
  {
    title: 'Highly Recommend',
    quote: 'I can confidently say they\'re the best! The staff is always welcoming, and Doctors are exceptionally skilled.',
    name: 'Stella Herman',
    location: 'Macejkovicbury',
    avatarUrl: 'https://picsum.photos/seed/stella/100/100',
    imageUrl: happyClients1,
    rating: 5,
  },
  {
    title: 'Gentle and Caring',
    quote: 'I can confidently say they\'re the best! The staff is always welcoming, and Doctors are exceptionally skilled.',
    name: 'Beulah Mertz',
    location: 'Chelsieshire',
    avatarUrl: 'https://picsum.photos/seed/beulah/100/100',
    imageUrl: happyClients2,
    rating: 5,
  },
  {
    title: 'A Wonderful Experience',
    quote: 'I can confidently say they\'re the best! The staff is always welcoming, and Doctors are exceptionally skilled.',
    name: 'Wilfred Jerde',
    location: 'Wisokytown',
    avatarUrl: 'https://picsum.photos/seed/wilfred/100/100',
    imageUrl: happyClients3,
    rating: 5,
  },
];



/* ----------  main component  ---------- */
export default function Testimonials() {
  const { list, add } = useTestimonials();
  const [showForm, setShowForm] = useState(false);

  console.log('Testimonials component - Current list:', list); // Debug log

  // merge: hard-coded first, then user reviews
  const slides = [...hardCoded, ...list];

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
          Our Happy Patients
        </motion.h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="!pb-12"
        >
          {slides.map((t, idx) => (
            <SwiperSlide key={t.id ?? idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pt-24"
              >
                <div className="absolute top-0 left-0 right-0 h-48">
                  <img
                    src={t.imageUrl ?? 'https://picsum.photos/seed/user/600/300'}
                    alt="Review background"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="relative bg-white rounded-2xl shadow-lg p-6 pt-8 mx-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{t.title}</h3>
                    <div className="flex text-yellow-400" aria-label={`${t.rating} stars`}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < t.rating ? '★' : '☆'}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-center mb-6">“{t.quote}”</p>
                  <div className="flex items-center justify-center">
                    <img
                      src={t.avatarUrl ?? `https://picsum.photos/seed/${t.name}/100/100`}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-bold text-gray-800">{t.name}</p>
                      <p className="text-gray-500 text-sm">{t.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ADD BUTTON + MODAL TRIGGER */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="border border-gray-400 text-gray-600 font-semibold py-3 px-8 hover:bg-gray-100 transition"
          >
            Add Testimonial
          </motion.button>
        </div>
      </div>

      {/* MODAL FORM */}
      <AnimatePresence>
        {showForm && <TestimonialModal onClose={() => setShowForm(false)} onSubmit={add} />}
      </AnimatePresence>
    </section>
  );
}

/* ----------  modal form  ---------- */
function TestimonialModal({ onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);

  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;
    onSubmit({
      id: Date.now(),
      title: 'Patient Review',
      name: name.trim(),
      location: location.trim(),
      quote: quote.trim(),
      rating,
      avatarUrl: `https://picsum.photos/seed/${Date.now()}/100/100`,
      imageUrl: `https://picsum.photos/seed/${Date.now()}/600/300`,
      date: new Date().toISOString(),
    });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-navy-900 mb-4">Leave a Review</h3>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="label">Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              placeholder="Jane Doe"
              maxLength={30}
              required
            />
          </div>

          <div>
            <label className="label">Town (optional)</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input"
              placeholder="Billericay"
              maxLength={30}
            />
          </div>

          <div>
            <label className="label">Your Experience *</label>
            <textarea
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className="input"
              rows={4}
              placeholder="Tell us about your visit…"
              maxLength={250}
              required
            />
          </div>

          <div>
            <label className="label">Star Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  onClick={() => setRating(n)}
                  className={`text-2xl ${n <= rating ? 'text-yellow-400' : 'text-slate-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">
            Post Review
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
