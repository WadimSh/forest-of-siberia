import { Route, Switch } from 'react-router-dom';

import { Landing, Policy, Agreement, NotFound } from '../pages';

import style from './App.module.css';

function App() {
  
  return (
    <div className={style.app}>
      <Switch>
        <Route path="/" exact={true}>
          <Landing />
        </Route>
        <Route path="/politics" exact={true}>
          <Policy />
        </Route>
        <Route path="/agreement" exact={true}>
          <Agreement />
        </Route>
        <Route path="*" exact={true}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
