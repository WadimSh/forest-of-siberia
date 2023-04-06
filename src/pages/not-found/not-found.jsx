import { Link } from 'react-router-dom';
import style from './not-found.module.css';

function NotFound() {
  
  return (
    <section className={style.wrapper}>
      <h2 className={style.title}>404</h2> 
      <p className={style.subtitle}>К сожалению данная страница не найдена</p>
      <Link to='/' className={style.link}>Вернуться на главную страницу</Link>
    </section>
  );
}

export default NotFound;