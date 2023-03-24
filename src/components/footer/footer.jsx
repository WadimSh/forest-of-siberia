import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.css';
import logo from '../../images/logo.svg';
import logoMini from '../../images/logo-mobile.svg';

function Footer() {
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
        <ul>
          <li>
            <a href="#about">О нас</a>
          </li>
          <li>
            <a href="#lumber">Пиломатериалы</a>
          </li>
          <li>
            <a href="#frame">Каркасные дома</a>
          </li>
        </ul>
      </div>
      <div className={style.row}>
        <p>&copy; {new Date().getFullYear()}. ООО "Лес Сибири"</p>
        <div>
          <Link to="/politics">Политика конфиденциальности</Link>
          <Link to="/agreement">Пользовательское соглашение</Link>
          <Link to="/delivery">Продажа и доставка</Link>
          <Link to="/inform">Юридическая информация</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;