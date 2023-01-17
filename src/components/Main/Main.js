import React, { useEffect, useState } from 'react';
import './Main.css';
// import { animals } from '../../data';
import Animal from '../Animal/Animal';
import background from '../../background.png';
import { fetchAnimals } from '../../services/animals';

export default function Main() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchAnimals();
      setAnimals(resp);
    };
    fetchData();
  }, []);
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal key={animal.name} {...animal} />
      ))}
    </main>
  );
}
