import style from './contacts.module.css';

function Contacts() {
  return (
    <section className={style.wrapper}>
      <h2 className={style.title}>
        // КОНТАКТЫ
      </h2>
      <div className={style.overlay}>
        <ul className={style.list}>
          <li className={style.item}>
            <a className={style.link} href="">les-sib-rf@mail.ru</a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="">+7 (991) 922-78-82</a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="">
              <div className={style.telegram}></div>
            </a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="">
            <div className={style.whatsapp}></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacts;