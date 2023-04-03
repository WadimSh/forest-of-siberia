import { Link } from 'react-router-dom';

import Logo from '../logo/logo';

import style from './footer.module.css';

function Footer({ clickTab, aboutRef, lumberRef, frameRef }) {
    
  return (
    <footer className={style.wrapper}>
      <div className={style.nav}>
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
        </ul>
      </div>
      <div className={style.row}>
        <p className={style.copyright}>&copy; {new Date().getFullYear()}. "Лес Сибири"</p>
        <div className={style.tabLink}>
          <Link className={style.navLink} to="/politics">Политика конфиденциальности</Link>
          <Link className={style.navLink} to="/agreement">Пользовательское соглашение</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;