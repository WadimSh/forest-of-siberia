import { useRef } from 'react';

import Cover from '../../components/cover/cover';
import About from '../../components/about/about';
import Lumber from '../../components/lumber/lumber';
import Frame from '../../components/frame/frame';
import Contacts from '../../components/contacts/contacts';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import style from './landing.module.css';

function Landing() {
  const contactsRef = useRef();

  const clickTab = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className={style.wrapper}>
      <Header />
      <Cover clickTab={clickTab} tabRef={contactsRef} />
      <About />
      <Lumber />
      <Frame />
      <Contacts tabRef={contactsRef}/>
      <Footer />
    </main>
  );
}

export default Landing;