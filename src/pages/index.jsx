import React from 'react';
import logo from '../assets/logo.svg';
import '../common/main.scss';
import DefaultLayout from '../layouts';
import HighlightsLink from '../components/HighlightsLink';

function Home() {
  return (
    <DefaultLayout>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-headline">KINTSUGI</h1>
      </div>
      <HighlightsLink />
    </DefaultLayout>
  );
}

export default Home;
