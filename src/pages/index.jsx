import React from 'react';
import Card from 'components/Card';
import IntroVideo from 'components/IntroVideo';
import AboutTheme from 'components/AboutTheme';
import '../common/main.scss';
import DefaultLayout from '../layouts';
import HighlightsLink from '../components/HighlightsLink';

function Home() {
  return (
    <DefaultLayout>
      <IntroVideo />
      <AboutTheme />
      <Card />
      <HighlightsLink />
    </DefaultLayout>
  );
}

export default Home;
