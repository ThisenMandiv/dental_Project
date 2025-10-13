import { useEffect, useState } from 'react';

const STORAGE_KEY = 'pantiles-reviews';   // permanent key

export default function useTestimonials() {
  const [list, setList] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  const add = (item) => setList((prev) => [item, ...prev]);

  return { list, add };
}
