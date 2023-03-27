import { Route, Switch } from 'react-router-dom';

import { Landing, NotFound } from '../pages';

import style from './App.module.css';

function App() {
  
  return (
    <div className={style.app}>
      <Switch>
        <Route path="/" exact={true}>
          <Landing />
        </Route>
        <Route path="*" exact={true}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
