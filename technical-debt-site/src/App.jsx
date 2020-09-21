import React from 'react';
import Background from './components/Background/Background';

import MainPage from './screens/MainPage/MainPage';
//import RevPage from './screens/RevPage/RevPage';
import FlipScreen from './screens/FlipScreen/FlipScreen';

import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Switch>
          <Route exact path='/gallery'>
            <Background/>
            <MainPage/>
          </Route>
          {/*<Route exact path='/rev'>
            <RevPage/>
          </Route>*/}
          <Route exact path='/'>
            <FlipScreen/>
          </Route>
          <Route>
            <FlipScreen/>
          </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
