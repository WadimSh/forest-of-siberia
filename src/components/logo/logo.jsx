import { useEffect, useState } from 'react';

import logo from '../../images/logo.svg';
import logoMini from '../../images/logo-mobile.svg';

function Logo() {
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
    <img src={width > 600 ? logo : logoMini} width={width > 600 ? 108 : 30} height={width > 600 ? 40 : 24} alt="Логотип копании" />
  );
}

export default Logo;