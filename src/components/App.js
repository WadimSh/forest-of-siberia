import Header from './header/header';
import Footer from './footer/footer';

import { Landing } from '../pages';

import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
