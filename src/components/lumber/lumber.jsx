import { useState } from 'react';
import style from './lumber.module.css';
import Card from '../card/card';
import cards from '../../utils/data';

function Lumber({ lumberRef }) {
  const [showMore, setshowMore] = useState(false);

  const handleClick = () => {
    setshowMore(true);
  }

  const numberOfItems = showMore ? cards.length : 12;
  
  return (
    <section className={style.wrapper} ref={lumberRef}>
      <div className={style.description}>
        <h2 className={style.title}>
          // ПИЛОМАТЕРИАЛЫ
        </h2>
      </div>
      <div className={style.cardList}>
        {cards.slice(0, numberOfItems).map((card) =>
          <Card
            key={card.id}
            item={card}
          />
        )}
      </div>
      <button className={!showMore ? style.button : style.buttonDisible} onClick={handleClick}>ПОКАЗАТЬ ЕЩЁ</button>
    </section>
  );
}

export default Lumber;