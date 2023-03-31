import { useRef } from 'react';
import style from './cover.module.css';

import cover from '../../images/cover.jpg';

function Cover({ clickTab, contactsRef }) {
  
  return (
    <section className={style.wrapper}>
      <div className={style.description}>
        <h2 className={style.sutitle}>ПРОИЗВОДСТВО И&nbsp;ПРОДАЖА ПИЛОМАТЕРИАЛОВ</h2>
        <span className={style.button} onClick={() => clickTab(contactsRef)}>СДЕЛАТЬ ЗАКАЗ</span>
        <p className={style.text}>Стройте свои мечты из&nbsp;пиломатериалов лесов Сибири.</p>
        <h1 className={style.title}>ЛЕС СИБИРИ</h1>
      </div>
      <img className={style.img} src={cover} width={1340} height={544} alt="Фотография леса на фоне реки" />
    </section>
  );
}

export default Cover;