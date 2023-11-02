import style from './renovation.module.css';
import { itemsGallery, workList } from '../../utils/galleryItem';

function Renovation({ renovRef }) {
  return (
    <section className={style.wrapper} ref={renovRef}>
      <div className={style.textBox}>
        <h2 className={style.title}>
          // РЕМОНТ КВАРТИР
        </h2>
        <ul className={style.list}>
          {workList.map((item, index) =>
            <li key={index} className={style.item}>{item}</li>
          )}
        </ul>
        <p className={style.text}>
          <strong>
            Обеспечим Вам комфортное и&nbsp;уютное жилье или рабочее место с&nbsp;минимальными затратами.
            <br></br>
            Сделаем все быстро, качественно и&nbsp;с&nbsp;наименьшими хлопотами для Вас.
          </strong>
        </p>
      </div>
      <div className={style.galleryBox}>
        {itemsGallery.map((item, index) =>
          <img key={index} className={style.img} src={item} alt="Фотографии ремонтов в квартирах" />
        )}
      </div>
    </section>
  );
}

export default Renovation;