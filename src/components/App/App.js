
import React from 'react';
import Home from '../Home/HomeContainer.js';
import Info from '../Info/Info.js';
import Faq from '../Faq/Faq.js';
import styles from './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.js';
import {AnimatedSwitch} from 'react-router-transition';
import List from '../List/ListContainer.js';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/Faq' component={Faq} />
        <Route exact path="/list/:id" component={List} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;