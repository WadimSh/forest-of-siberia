import { useEffect, useState } from 'react';
import Logo from '../logo/logo';

import style from './header.module.css';

function Header({ clickTab, aboutRef, lumberRef, frameRef, contactsRef }) {
  const [logic, setLogic] = useState(false);

  const onChecked = () => {
    setLogic(!logic);
  }

  useEffect(() => {
    document.body.style.overflow = logic ? 'hidden': 'unset';
  }, [logic])
  
  return ( 
  <>
    <header className={style.wrapper}>
      <div className={style.row}>
        <Logo />
        <ul className={style.list}>
          <li className={style.item} onClick={() => clickTab(aboutRef)}>
            <span className={style.link}>О нас</span>
          </li>
          <li className={style.item} onClick={() => clickTab(lumberRef)}>
            <span className={style.link}>Пиломатериалы</span>
          </li>
          <li className={style.item} onClick={() => clickTab(frameRef)}>
            <span className={style.link}>Каркасные дома</span>
          </li>
          <li className={style.item} onClick={() => clickTab(contactsRef)}>
            <span className={style.link}>Контакты</span>
          </li>
        </ul>
        <div className={style.burger} onClick={onChecked}>
          <span className={!logic ? style.span : style.spanActive}></span>
          <span className={!logic ? style.span : style.spanActive}></span>
        </div>
      </div>
    </header>
    <div className={!logic ? style.overlay : style.overlayActive}></div>
  
  </>
    
  );
}

export default Header;