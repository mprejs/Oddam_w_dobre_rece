import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './scss/App.scss';
import Home from './components/Home'
import Logowanie from './components/Logowanie'
import Rejestracja from './components/Rejestracja'
import Wylogowano from './components/Wylogowano'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className='pageContainter'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/logowanie' component={Logowanie} />
          <Route path='/rejestracja' component={Rejestracja} />
          <Route path='/wylogowano' component={Wylogowano} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
