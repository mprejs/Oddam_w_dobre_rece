import React from 'react';
import {
  BrowserRouter,
  Route,
  withRouter,
  Switch,
  NavLink,
} from 'react-router-dom';
import './scss/App.css';
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
