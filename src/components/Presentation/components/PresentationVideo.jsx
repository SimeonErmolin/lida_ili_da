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
      <source src="/assets/presentation/IMG_2574.MOV" type="video/mp4" />
    </video>
  );
};

export default PresentationVideo;
