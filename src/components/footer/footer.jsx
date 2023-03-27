import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.css';
import logo from '../../images/logo.svg';
import logoMini from '../../images/logo-mobile.svg';

function Footer({ clickTab, aboutRef, lumberRef, frameRef }) {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }
  }, []);
      
  
  return (
    <footer className={style.wrapper}>
      <div className={style.nav}>
        <img src={width > 600 ? logo : logoMini} width={width > 600 ? 108 : 30} height={width > 600 ? 40 : 24} alt="Логотип копании" />
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
        <p className={style.copyright}>&copy; {new Date().getFullYear()}. ООО "Лес Сибири"</p>
        <div className={style.tabLink}>
          <Link className={style.navLink} to="/politics">Политика конфиденциальности</Link>
          <Link className={style.navLink} to="/agreement">Пользовательское соглашение</Link>
          <Link className={style.navLink} to="/delivery">Продажа и доставка</Link>
          <Link className={style.navLink} to="/inform">Юридическая информация</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;