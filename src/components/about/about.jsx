import style from './about.module.css';

import aboutone from '../../images/about-one.jpg';
import abouttwo from '../../images/about-two.jpg';
import aboutthree from '../../images/about-three.jpg';

function About() {
  return (
    <section className={style.wrapper} id="about">
      <div className={style.textBox}>
        <h2 className={style.title}>
          // О&nbsp;НАС
        </h2>
        <p className={style.text}>
          Наша компания предлагает пиломатериалы из&nbsp;северного леса хвойных пород: 
          ель, сосна, лиственница, кедр. Район заготовки: Архангельская область и&nbsp;Карелия. 
        </p>
        <p className={style.text}>
          В&nbsp;наличии на&nbsp;складе и&nbsp;под заказ: доска строительная, доска припускная, 
          брус, брусок и&nbsp;другие пиломатериалы. Доска строганная и&nbsp;не&nbsp;строганная. 
          Погонажные изделия (вагонка, имитация бруса, блокхаус и&nbsp;т.д.). 
        </p>
        <p className={style.text}>
          Собственная сушильная камера даёт возможность производить продукцию любой влажности, 
          дисковая распиловка обеспечивает максимально точную геометрию.
        </p>
        <p className={style.text}>
          Помимо указанных размеров, возможны индивидуальные заказы по&nbsp;согласованной цене.
        </p>
        <p className={style.text}>
          У&nbsp;нас:
        </p>
        <ul className={style.list}>
          <li className={style.item}>
            Широкий ассортимент пиломатериалов погонажных изделий;
          </li>
          <li className={style.item}>
            Оплата: наличными, б/н (б/ндс, с&nbsp;ндс);
          </li>
          <li className={style.item}>
            Удобная логистика;
          </li>
          <li className={style.item}>
            Разнообразные виды упаковки защищают продукцию при доставке.
          </li>
        </ul>
        <p className={style.text}>
          Соблюдение технологии производства и&nbsp;хранения&nbsp;&mdash; гарантируют качество.
        </p>  
        <p className={style.text}>
          Готовы к&nbsp;долгосрочному взаимовыгодному сотрудничеству.
        </p>
      </div>
      <div className={style.imgBox}>
        <img className={style.img} src={aboutone} width={546} height={340} alt="Изображения производственных процессов лесозаготовки" />
        <img className={style.img} src={abouttwo} width={546} height={340} alt="Изображения производственных процессов лесозаготовки" />
        <img className={style.img} src={aboutthree} width={546} height={340} alt="Изображения производственных процессов лесозаготовки" />
      </div>
    </section>
  );
}

export default About;