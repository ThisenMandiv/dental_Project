const STORAGE_KEY = 'pantiles-reviews';

export const getTestimonials = async () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
};

export const postTestimonial = async (item) => {
  const testimonials = await getTestimonials();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([item, ...testimonials]));
};
