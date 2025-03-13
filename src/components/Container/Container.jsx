import style from './Container.module.css';
import Card from '../Card/Card';

export default function Container({ cardsData }) {
  return (
    <div className={style.container}>
      {cardsData.map((card, index) => (
        <Card key={index} cardData={card} />
      ))}
    </div>
  );
}
