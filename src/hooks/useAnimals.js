import React, { useEffect, useState } from 'react';
import { fetchAnimals } from '../services/animals';
export function useAnimals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchAnimals();
      setAnimals(resp);
    };
    fetchData();
  }, []);
  return animals;
}
