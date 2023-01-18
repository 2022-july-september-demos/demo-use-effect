import './Main.css';
// import { animals } from '../../data';
import Animal from '../Animal/Animal';
import background from '../../background.png';
import { useAnimals } from '../../hooks/useAnimals';
import { useState } from 'react';

export default function Main() {
  const { animals, error } = useAnimals();
  const [type, setType] = useState('all');
  // Set removes duplicates
  const types = [...new Set(animals.map(({ type }) => type))];

  const filtered = animals.filter((animal) => animal.type === type || type === 'all');

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <select onChange={(e) => setType(e.target.value)}>
        <option value="all">all</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <p style={{ color: 'red' }}>{error}</p>
      {filtered.map((animal) => (
        <Animal key={animal.name} {...animal} />
      ))}
    </main>
  );
}
