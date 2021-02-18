import React from 'react';
import { Helmet } from 'react-helmet';
import Highlights from 'components/Highlights';
import highlightData from 'assets/highlights';
import DefaultLayout from '../layouts';
import '../common/highlights.scss';

const Highlight = () => {
  const renderHighlightData = () => {
    return highlightData.map((data) => {
      const { label, images, youtubeVideos } = data;
      return (
        <Highlights
          label={label}
          images={images}
          youtubeVideos={youtubeVideos}
        />
      );
    });
  };

  return (
    <div>
      <DefaultLayout>
        <Helmet>
          <title>Highlights - TEDx JNEC</title>
          <meta
            name="description"
            content="TEDXJNEC 2018 Was Marathwada’s first ever TED event which aimed at unifying people in their thoughts and motives.The theme of the event was ‘Trailblazers’. "
          />
          <meta
            name="keywords"
            content="ted,tedx, jnec, tedxjnec, team, mgmjnec, aurangabad, tedxaurangabad, best, event, tedxtalk, talk, tedtalk, events, engineering, college, pruthvi, shetty, web, kintsugi, tedxjnec,mgm,mgmu,pruthvishetty,top,events,2019,2020,2018,trailblazers,unboxing,brainbox,box,brain"
          />
          <meta name="author" content="pruthvishetty" />

          <meta property="og:url" content="https://tedxjnec.com/highlights" />
          <meta
            property="og:title"
            content="HIGHLIGHTS | TEDx JNEC | Kintsugi"
          />
          <meta
            property="og:description"
            content="TEDXJNEC 2018 Was Marathwada’s first ever TED event which aimed at unifying people in their thoughts and motives.The theme of the event was ‘Trailblazers’. "
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="TEDxJNEC" />
          <meta property="og:locale" content="en_us" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@tedxjnec" />
          <meta name="twitter:creator" content="@pruthvi2103" />
          <meta name="twitter:url" content="https://tedxjnec.com/about" />
          <meta
            name="twitter:title"
            content="HIGHLIGHTS | TEDx JNEC | Kintsugi"
          />
          <meta
            name="twitter:description"
            content="TEDXJNEC 2018 Was Marathwada’s first ever TED event which aimed at unifying people in their thoughts and motives.The theme of the event was ‘Trailblazers’. "
          />
          <link rel="author" href="//github.com/pruthvi2103" />
          <link rel="canonical" href="//tedxjnec.com/about" />
        </Helmet>
        <h1>HIGHLIGHTS</h1>
        {renderHighlightData()}
      </DefaultLayout>
    </div>
  );
};
export default Highlight;
