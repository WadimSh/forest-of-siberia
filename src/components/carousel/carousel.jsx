import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import items from "../../utils/items";
import style from './carousel.module.css';

const itemse = items.map((item, index) => (
  <img className={style.img} src={item} alt={item} key={index}/>
));

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, index) => (
    <img className={style.img} src={item} alt={item} key={index} onClick={() => (setThumbIndex(index), setThumbAnimation(true))} />
  ));
}

const responsive = {
  0: { items: 3 },
  600: { items: 5 },
  1200: { items: 7 },
};

function Carousel() {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);
    if (e.type === 'action') {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);
    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };
      
  return (
    <div className={style.wrapper}>
      <AliceCarousel
        activeIndex={mainIndex}
        animationType="fadeout"
        animationDuration={800}
        disableDotsControls
        disableButtonsControls
        items={itemse}
        
        onSlideChange={syncMainBeforeChange}
        onSlideChanged={syncMainAfterChange}
        touchTracking={!thumbAnimation}
      />
      <div className={style.previu}>
        <div className={style.btnPrev} onClick={slidePrev}></div>
        <div className={style.list}>
          <AliceCarousel
            responsive={responsive}
            activeIndex={thumbIndex}
            disableDotsControls
            disableButtonsControls
            items={thumbs}
            mouseTracking={false}
            onSlideChanged={syncThumbs}
            touchTracking={!mainAnimation}
          />
        </div>
        <div className={style.btnNext} onClick={slideNext}></div>
      </div>
    </div>
  )
}

export default Carousel;