import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-headline">KINTSUGI</h1>
      </header>
      <Content />
    </div>
  );
}

export default App;
