import Cover from '../../components/cover/cover';
import About from '../../components/about/about';
import Lumber from '../../components/lumber/lumber';
import Frame from '../../components/frame/frame';
import Contacts from '../../components/contacts/contacts';

import style from './landing.module.css';

function Landing() {
  return (
    <main className={style.wrapper}>
      <Cover />
      <About />
      <Lumber />
      <Frame />
      <Contacts />
    </main>
  );
}

export default Landing;