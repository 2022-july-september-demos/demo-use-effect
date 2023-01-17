import React from 'react';
import './Main.css';
import { animals } from '../../data';
import Animal from '../Animal/Animal';
import background from '../../background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal key={animal.name} {...animal} />
      ))}
    </main>
  );
}
