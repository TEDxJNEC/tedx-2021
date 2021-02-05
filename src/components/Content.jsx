import React from 'react';
import '../common/main.scss';

const Content = ({
  headline,
  content,
  iframeLink,
  iFrameTitle,
  reverseOrder = false,
}) => {
  const contentColumn = (
    <div className="column">
      <h1 className="content-headline">{headline}</h1>
      <p className="content">{content}</p>
    </div>
  );

  const iFrameColumn = (
    <div className="column">
      <div className="content-wrapper">
        <iframe
          className="tedx-iframe"
          title={iFrameTitle}
          src={iframeLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );

  let renderedContent = (
    <>
      {contentColumn}
      {iFrameColumn}
    </>
  );

  if (reverseOrder) {
    renderedContent = (
      <>
        {iFrameColumn}
        {contentColumn}
      </>
    );
  }

  return (
    <>
      <section>
        <div className="row">{renderedContent}</div>
      </section>
    </>
  );
};

export default Content;
