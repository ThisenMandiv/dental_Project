import { useState } from 'react';
import useTestimonialsGSheet from '../hooks/useTestimonialsGSheet';
import { motion, AnimatePresence } from 'framer-motion';

export default function AddTestimonialHome({ onClose, onAddTestimonial }) {
  const { add, loading, error } = useTestimonialsGSheet();
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim() || submitting) return;

    setSubmitting(true);
    try {
      const newTestimonial = {
        id: Date.now(),
        title: 'Patient Review',
        name: name.trim(),
        quote: quote.trim(),
        rating,
        avatarUrl: `https://picsum.photos/seed/${Date.now()}/100/100`,
        imageUrl: `https://picsum.photos/seed/${Date.now()}/600/300`,
        date: new Date().toISOString(),
      };
      await add(newTestimonial);
      onAddTestimonial(newTestimonial);
      setName(''); setQuote(''); setRating(5);
      alert('Thank you for your review! It has been submitted successfully.');
      onClose();
    } catch (err) {
      console.error('Error submitting review:', err);
      alert('There was an error submitting your review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
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
          >
            ✕
          </button>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Leave a Review</h3>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-slate-700">Name *</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 px-4 py-3"
                placeholder="Jane Doe"
                maxLength={30}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-slate-700">Your Experience *</label>
              <textarea
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 px-4 py-3"
                rows={4}
                placeholder="Tell us about your visit…"
                maxLength={250}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-slate-700">Star Rating</label>
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
            <button
              type="submit"
              disabled={submitting}
              className={`w-full px-6 py-3 rounded-lg font-semibold transition ${
                submitting
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-blue-800 text-white hover:bg-blue-700'
              }`}
            >
              {submitting ? 'Submitting...' : 'Post Review'}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
