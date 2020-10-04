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
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/oddam-w-dobre-rece' component={Home} />
          <Route path='/logowanie' component={Logowanie} />
          <Route path='/rejestracja' component={Rejestracja} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
