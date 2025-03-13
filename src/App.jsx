import { cardsData } from './data';
import Container from './components/Container/Container';

export default function App() {
  return (
    <div>
      <main>
        <Container cardsData={cardsData} />
      </main>
    </div>
  );
}
