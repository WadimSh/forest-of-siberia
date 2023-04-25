import style from './contacts.module.css';

function Contacts({ contactsRef }) {
  return (
    <section className={style.wrapper} ref={contactsRef}>
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
            <a className={style.link} href="tel:+7 (991) 868-31-42">+7 (991) 868-31-42</a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="https://t.me/lessibrf" target="_blank" aria-aria-label="Telegram">
              <div className={style.telegram}></div>
            </a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="https://wa.me/79257302695" target="_blank" aria-aria-label="WhatsApp">
            <div className={style.whatsapp}></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacts;