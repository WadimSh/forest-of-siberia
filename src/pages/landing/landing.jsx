import { useRef } from 'react';

import Cover from '../../components/cover/cover';
import About from '../../components/about/about';
import Lumber from '../../components/lumber/lumber';
import Frame from '../../components/frame/frame';
import Contacts from '../../components/contacts/contacts';
import Sliders from '../../components/slider/slider';
import Renovation from '../../components/renovation/renovation';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import style from './landing.module.css';

function Landing() {
  const contactsRef = useRef();
  const aboutRef = useRef();
  const lumberRef = useRef();
  const frameRef = useRef();
  const renovRef = useRef();

  const clickTab = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header 
        clickTab={clickTab}
        aboutRef={aboutRef}
        lumberRef={lumberRef}
        frameRef={frameRef}
        contactsRef={contactsRef}
        renovRef={renovRef}
      />
      <main className={style.wrapper}>
        <Cover 
          clickTab={clickTab} 
          contactsRef={contactsRef} 
        />
        <Lumber 
          lumberRef={lumberRef} 
        />
        <Frame 
          frameRef={frameRef} 
        />
        <Sliders />
        <Renovation
          renovRef={renovRef}
        />
        <About 
          aboutRef={aboutRef} 
        />
        <Contacts 
          contactsRef={contactsRef}
        />
      </main>
      <Footer 
        clickTab={clickTab}
        lumberRef={lumberRef}
        frameRef={frameRef}
        renovRef={renovRef}
      />
    </>
  );
}

export default Landing;