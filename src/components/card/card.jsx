import style from './card.module.css';

function Card({ item }) {
  const { img, name, price, logic } = item;
  console.log(item);
  return (
    <div className={style.card}>
        <img className={style.img} src={img} alt="" />
        <h3 className={style.name}>{name}</h3>
        <div className={style.div}>
          <span className={style.price}>{price}</span>
          {logic && <span className={style.metric}>РУБ/М&#179;</span>}
        </div>
        
      </div>
  );
}

export default Card;