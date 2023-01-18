import React, { useEffect, useState } from 'react';
import { fetchAnimals } from '../services/animals';
export function useAnimals() {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchAnimals();
        setAnimals(resp);
      } catch (e) {
        setError('Uh oh :( Something went wrong!');
      }
    };
    fetchData();
  }, []);
  return { animals, error };
}
