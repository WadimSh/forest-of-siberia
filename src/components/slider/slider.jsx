import AliceCarousel from 'react-alice-carousel';
import style from './slider.module.css';
import { images } from '../../utils/data';

function Sliders() {
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };

  const items = images.map((img, id) => (
      <img src={img} alt={img} width={290} height={350}/>
  ));
  
  const renderDotsItem = ({ isActive }) => {
    return isActive ? "o" : "*";
  }
    
  return (
    <section className={style.wrapper}>
      <h2 className={style.title}>
        // НАШИ ПРОЕКТЫ
      </h2>
      <AliceCarousel
        infinite
        animationType='fadeout'
        animationDuration={800}
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
        
      />
    </section>
  );
}

export default Sliders;