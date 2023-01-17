import './Main.css';
// import { animals } from '../../data';
import Animal from '../Animal/Animal';
import background from '../../background.png';
import { useAnimals } from '../../hooks/useAnimals';

export default function Main() {
  const animals = useAnimals();

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal key={animal.name} {...animal} />
      ))}
    </main>
  );
}
