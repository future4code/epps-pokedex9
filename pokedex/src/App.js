import './App.css';
import GlobalState from './Global/GlobalState';
import Router from './Routes/Router';
import React from 'react'

function App() {

  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
