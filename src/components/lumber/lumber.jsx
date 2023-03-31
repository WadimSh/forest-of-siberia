import style from './lumber.module.css';
import Card from '../card/card';
import cards from '../../utils/data';

function Lumber({ lumberRef }) {
  
  return (
    <section className={style.wrapper} ref={lumberRef}>
      <div className={style.description}>
        <h2 className={style.title}>
          // ПИЛОМАТЕРИАЛЫ
        </h2>
      </div>
    <div className={style.cardList}>
      {cards.map((card) =>
        <Card
          key={card.id}
          item={card}
        />
      )}
    </div>
    </section>
  );
}

export default Lumber;