import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import logo from '../../images/logo.svg';
import logoMini from '../../images/logo-mobile.svg';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [logic, setLogic] = useState(false);

  const onChecked = () => {
    setLogic(!logic);
  }

  useEffect(() => {
    document.body.style.overflow = logic ? 'hidden': 'unset';
  }, [logic])
  
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
    <header className={style.wrapper}>
      <div className={style.row}>
        <img src={width > 600 ? logo : logoMini} width={width > 600 ? 108 : 30} height={width > 600 ? 40 : 24} alt="Логотип копании" />
        <div className={style.burger} onClick={onChecked}>
          <span className={!logic ? style.span : style.spanActive}></span>
          <span className={!logic ? style.span : style.spanActive}></span>
        </div>
        <a className={style.link} href="tel:+7 (991) 922-78-82">+7 (991) 922-78-82</a>
      </div>
      <div className={!logic ? style.tab : style.tabActive}>
        <div className={style.tabLink}>
          <Link className={style.navLink} to="/politics">Политика конфиденциальности</Link>
          <Link className={style.navLink} to="/agreement">Пользовательское соглашение</Link>
          <Link className={style.navLink} to="/delivery">Продажа и доставка</Link>
          <Link className={style.navLink} to="/inform">Юридическая информация</Link>
        </div>
      </div>
      <div className={!logic ? style.overlay : style.overlayActive}></div>
    </header>
  );
}

export default Header;