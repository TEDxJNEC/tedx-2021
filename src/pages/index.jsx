import React from 'react';
import { Helmet } from 'react-helmet';
import IntroVideo from 'components/IntroVideo';
import AboutTheme from 'components/AboutTheme';
import '../common/main.scss';
import DefaultLayout from '../layouts';
import Card from '../components/ComingsoonCard';
import HighlightsLink from '../components/HighlightsLink';
import Partners from '../components/Partners';

function Home() {
  return (
    <DefaultLayout>
      <Helmet>
        <meta
          name="description"
          content="TEDxJNEC is all about sparking conversations and making great ideas accessible. We believe passion is contagious, and wish to spread our speaker’s commitment to innovation thus creating a unique space where we expand our Perceptions."
        />
        <meta
          name="keywords"
          content="tedx, jnec, tedxjnec, jnec, mgmjnec, aurangabad, tedxaurangabad, best, event, tedxtalk, talk, tedtalk, events, engineering, college, pruthvi, shetty, web, kintsugi"
        />
        <meta name="author" content="pruthvishetty" />

        <meta property="og:url" content="https://tedxjnec.com/" />
        <meta property="og:title" content="TEDx JNEC | Kintsugi" />
        <meta
          property="og:description"
          content="TEDxJNEC is all about sparking
    conversations and making great ideas accessible. We believe passion is
    contagious, and wish to spread our speaker’s commitment to innovation thus
    creating a unique space where we expand our Perceptions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TEDxJNEC" />
        <meta property="og:locale" content="en_us" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@tedxjnec" />
        <meta name="twitter:creator" content="@pruthvi2103" />
        <meta name="twitter:url" content="https://tedxjnec.com/" />
        <meta name="twitter:title" content="TEDx JNEC | Kintsugi" />
        <meta
          name="twitter:description"
          content="TEDxJNEC is all about sparking
    conversations and making great ideas accessible. We believe passion is
    contagious, and wish to spread our speaker’s commitment to innovation thus
    creating a unique space where we expand our Perceptions."
        />
        <link rel="author" href="//github.com/pruthvi2103" />
        <link rel="canonical" href="//tedxjnec.com" />
      </Helmet>
      <IntroVideo />
      <AboutTheme />
      <Card />
      <Partners />
      <HighlightsLink />
    </DefaultLayout>
  );
}

export default Home;
