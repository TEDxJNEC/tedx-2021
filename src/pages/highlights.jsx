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
        </Helmet>
        <h1>HIGHLIGHTS</h1>
        {renderHighlightData()}
      </DefaultLayout>
    </div>
  );
};
export default Highlight;
