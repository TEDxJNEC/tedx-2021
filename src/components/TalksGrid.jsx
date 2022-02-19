import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';
import TalksData from 'assets/video-content';
import { Modal } from './Modal';

export const devices = {
  tablet: '768px',
  laptop: '1200px',
};
const breakpoints = {
  mobile: `(max-width: ${devices.tablet})`,
  tablet: `(min-width: ${devices.tablet})`,
  laptop: `(min-width: ${devices.laptop})`,
};
const TalkThumbnailWrapper = styled.div`
  cursor: pointer;
  height: 200px;
  width: 200px;
  box-shadow: 0 0 1px 1px hsl(48, 93%, 30%), 0 0 5px 3px #f6c90e;
  border-radius: 8px;
  @media ${breakpoints.tablet} {
    height: 360px;
    width: 360px;
  }
`;
export const PlayerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const TalkThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
const TalksGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
`;
const TalksGrid = () => {
  const [selectedSpeakerData, setSelectedSpeakerData] = useState(null);
  const handleModalClose = () => {
    setSelectedSpeakerData(null);
  };
  const handleSpeakerClick = (talkData) => {
    setSelectedSpeakerData(talkData);
  };
  return (
    <>
      <TalksGridWrapper>
        {TalksData.map((talk) => (
          <TalkThumbnailWrapper
            onClick={() => handleSpeakerClick(talk)}
            key={talk.id}
          >
            <TalkThumbnail src={talk.thumbnailSrc} />
          </TalkThumbnailWrapper>
        ))}
      </TalksGridWrapper>
      <Modal isOpen={selectedSpeakerData?.id} onClose={handleModalClose}>
        {selectedSpeakerData && selectedSpeakerData.tedxIframeLink && (
          <PlayerWrapper>
            <ReactPlayer
              style={{ height: '100%', width: '100%' }}
              url={selectedSpeakerData.tedxIframeLink}
            />
          </PlayerWrapper>
        )}
      </Modal>
    </>
  );
};

export default TalksGrid;
