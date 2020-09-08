import React from 'react';
import Background from './components/Background/Background';

import MainPage from './screens/MainPage/MainPage';
import RevPage from './screens/RevPage/RevPage';
import FlipScreen from './screens/FlipScreen/FlipScreen';

import {
  Route,
  withRouter
} from 'react-router-dom';

import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Route exact path='/gallery'>
        <Background/>
        <MainPage/>
      </Route>
      <Route exact path='/rev'>
        <RevPage/>
      </Route>
      <Route exact path='/'>
        <FlipScreen/>
      </Route>
    </div>
  );
}

export default withRouter(App);
