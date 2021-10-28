
import React from 'react';
import Home from '../Home/HomeContainer.js';
import Info from '../Info/Info.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/info' component={Info} />
    </Switch>
  </BrowserRouter>
);

export default App;