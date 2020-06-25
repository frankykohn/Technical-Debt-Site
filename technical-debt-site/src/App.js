import React from 'react';
import Background from './components/Background/Background';

import MainPage from './screens/MainPage/MainPage';

import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Background/>
      <MainPage/>
    </div>
  );
}

export default App;
