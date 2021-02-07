import React from 'react';
import IntroVideo from 'components/IntroVideo';
import AboutTheme from 'components/AboutTheme';
import '../common/main.scss';
import DefaultLayout from '../layouts';
import Card from '../components/ComingsoonCard';
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
