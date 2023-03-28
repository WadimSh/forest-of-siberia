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
  const aboutRef = useRef();
  const lumberRef = useRef();
  const frameRef = useRef();

  const clickTab = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className={style.wrapper}>
      <Header 
        clickTab={clickTab}
        aboutRef={aboutRef}
        lumberRef={lumberRef}
        frameRef={frameRef}
        contactsRef={contactsRef}
      />
      <Cover 
        clickTab={clickTab} 
        contactsRef={contactsRef} 
      />
      <About 
        aboutRef={aboutRef} 
      />
      <Lumber 
        lumberRef={lumberRef} 
      />
      <Frame 
        frameRef={frameRef} 
      />
      <Contacts 
        contactsRef={contactsRef}
      />
      <Footer 
        clickTab={clickTab}
        aboutRef={aboutRef}
        lumberRef={lumberRef}
        frameRef={frameRef}
      />
    </main>
  );
}

export default Landing;