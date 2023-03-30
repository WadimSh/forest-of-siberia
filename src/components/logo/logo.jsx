import style from './logo.module.css'
import logo from '../../images/logo.svg';

function Logo() {
  
  return ( 
    <img className={style.logo} src={logo} width={108} height={40} alt="Логотип копании" />
  );
}

export default Logo;