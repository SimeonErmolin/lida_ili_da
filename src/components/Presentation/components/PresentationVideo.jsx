import React from 'react';

const PresentationVideo = ({ onEnded, onClick }) => {
  return (
    <video
      onEnded={onEnded}
      onClick={onClick}
      autoPlay
      muted
      className="video"
      playsInline
    >
      <source src="/assets/presentation/videolidilida.mp4" type="video/mp4" />
    </video>
  );
};

export default PresentationVideo;
