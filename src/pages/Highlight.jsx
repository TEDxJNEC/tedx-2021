import React from 'react';
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
        <h1>HIGHLIGHTS</h1>
        {renderHighlightData()}
      </DefaultLayout>
    </div>
  );
};
export default Highlight;
