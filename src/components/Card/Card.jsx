import Button from '../Button/Button';
import style from './Card.module.css';

export default function Card({ cardData }) {
  return (
    <div className={style.card} style={{ backgroundColor: cardData.bgColor }}>
      <div className={style.cardContent}>
        <img className={style.icon} src={cardData.image} alt={cardData.title} />
        <h1 className={style.cardTitle}>{cardData.title}</h1>
        <p className={style.cardDescription}>{cardData.description}</p>
        <Button variant={`btn-${cardData.title.toLowerCase()}`}>
          Learn more
        </Button>
      </div>
    </div>
  );
}
