import { useEffect, useState } from 'react';
import { getTestimonials, postTestimonial } from '../api/testimonials';

export default function useTestimonialsGSheet() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTestimonials();
        setList(data);
      } catch (err) {
        console.error('Error loading testimonials:', err);
        setError('Failed to load testimonials');
        setList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const add = async (item) => {
    try {
      setError(null);
      await postTestimonial(item);
      setList((prevList) => [item, ...prevList]);
    } catch (err) {
      console.error('Error adding testimonial:', err);
      setError('Failed to add testimonial');
      throw err;
    }
  };

  return { list, add, loading, error };
}
