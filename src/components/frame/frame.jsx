import style from './frame.module.css';

import frame1 from '../../images/frame1.jpg';
import frame2 from '../../images/frame2.jpg';
import frame3 from '../../images/frame3.jpg';
import frame4 from '../../images/frame4.jpg';
import frame5 from '../../images/frame5.jpg';
import frame6 from '../../images/frame6.jpg';
import frame7 from '../../images/frame7.jpg';
import frame8 from '../../images/frame8.jpg';
import frame9 from '../../images/frame9.jpg';

function Frame() {
  return (
    <section className={style.wrapper} id="frame">
      <div className={style.textBox}>
        <h2 className={style.title}>
          // КАРКАСНЫЕ ДОМА
        </h2>
        <p className={style.text}>
          Проектируем и&nbsp;строим каркасные дома из&nbsp;дерева и&nbsp;ЛСТК. Используем современные 
          сертифицированные материалы&nbsp;&mdash; буронабивные железобетонные сваи, ветрозащиту &laquo;Изоплат&raquo;,
          негорючий фиброцементный сайдинг и&nbsp;т.д.
        </p>
        <p className={style.text}>
          Благодаря этому ваш дом под ключ:
        </p>
        <ul className={style.list}>
          <li className={style.item}>
            будет удерживать тепло в&nbsp;2&nbsp;раза лучше, чем здания из&nbsp;кирпича;
          </li>
          <li className={style.item}>
            простоит без капитального ремонта до&nbsp;70&nbsp;лет;
          </li>
          <li className={style.item}>
            не&nbsp;усядет&nbsp;&mdash; можно сразу выполнять отделку;
          </li>
          <li className={style.item}>
            выдержит ветровые и&nbsp;сейсмические нагрузки.
          </li>
        </ul>
        <p className={style.text}>
          Соблюдаем ГОСТы и&nbsp;СНИПы. Никаких споров с&nbsp;соседями и&nbsp;проблем 
          с&nbsp;инженерными коммуникациями&nbsp;&mdash; построим дом строго 
          по&nbsp;действующим нормативам.
        </p>
        <p className={style.text}>
          Используем проверенные материалы. Закупаем стройматериалы у&nbsp;официальных 
          дилеров с&nbsp;соответствующими документами и&nbsp;гарантиями.
        </p>
        <p className={style.text}>
          Даем 2&nbsp;года гарантии на&nbsp;работу.
        </p>
        <p className={style.text}>
          Сдадим дом под ключ к&nbsp;обещанной дате или выплатим штраф за&nbsp;просрочку.
        </p>
      </div>
      <div className={style.galleryBox}>
        <img className={style.img} src={frame1} alt="Фотографии этапов постройки ряда домов" />
        <img className={style.img} src={frame6} alt="Фотографии этапов постройки ряда домов" />
        <img className={style.img} src={frame7} alt="Фотографии этапов постройки ряда домов" />
        <img className={style.img} src={frame2} alt="Фотографии этапов постройки ряда домов" />
        <img className={style.img} src={frame4} alt="Фотографии этапов постройки ряда домов" />
        <img className={style.img} src={frame8} alt="Фотографии этапов постройки ряда домов" />
        <img className={style.img} src={frame3} alt="Фотографии этапов постройки ряда домов" />
        <img className={style.img} src={frame5} alt="Фотографии этапов постройки ряда домов" />
        <img className={style.img} src={frame9} alt="Фотографии этапов постройки ряда домов" />
        <img className={style.img} src={frame6} alt="Фотографии этапов постройки ряда домов" />
      </div>
    </section>
  );
}

export default Frame;