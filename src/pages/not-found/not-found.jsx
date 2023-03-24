import { Link } from 'react-router-dom';
import style from './not-found.module.css';

function NotFound() {
  
  return (
    <section className={style.wrapper}>
      404
      <Link to='/' className={style.link}>Вернуться на главную страницу</Link>
    </section>
  );
}

export default NotFound;