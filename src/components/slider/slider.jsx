import style from './slider.module.css';
import Carousel from '../carousel/carousel';

function Sliders() {
      
  return (
    <section className={style.wrapper}>
      <h2 className={style.title}>
        // НАШИ РАБОТЫ
      </h2>
      <Carousel />
    </section>
  );
}

export default Sliders;