import style from './contacts.module.css';

function Contacts({ tabRef }) {
  return (
    <section className={style.wrapper} ref={tabRef} id="contacts">
      <h2 className={style.title}>
        // КОНТАКТЫ
      </h2>
      <div className={style.overlay}>
        <ul className={style.list}>
          <li className={style.item}>
            <a className={style.link} href="mailto:les-sib-rf@mail.ru">les-sib-rf@mail.ru</a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="tel:+7 (991) 922-78-82">+7 (991) 922-78-82</a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="https://t.me/lessibrf" target="_blank">
              <div className={style.telegram}></div>
            </a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="https://wa.me/79257302695" target="_blank">
            <div className={style.whatsapp}></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacts;