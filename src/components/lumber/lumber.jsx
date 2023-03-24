import style from './lumber.module.css';
import Card from '../card/card';
import cards from '../../utils/data';

function Lumber() {
  
  return (
    <section className={style.wrapper} id="lumber">
      <div className={style.description}>
        <h2 className={style.title}>
          // ПИЛОМАТЕРИАЛЫ
        </h2>
        {/*<a className={style.link} href="/download/DOC-20230314-WA0016.xlsx" download>
          СКАЧАТЬ ПРАЙС-ЛИСТ
          <div className={style.arrow}></div>
        </a>*/}
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