import { Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';

import { Landing, NotFound } from '../pages';

import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
