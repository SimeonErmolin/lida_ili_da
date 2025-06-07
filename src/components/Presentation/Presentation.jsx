import React, { useEffect, useState } from 'react';
import './Presentation.scss';
import PresentationNotice from './components/PresentationNotice.jsx';
import PresentationVideo from './components/PresentationVideo.jsx';
import PresentationChat from './components/PresentationChat.jsx';

const Presentation = () => {
  const [videoIsVisible, setVideoIsVisible] = useState(false);
  const [chatIsVisible, setChatIsVisible] = useState(false);
  const [noticeShown, setNoticeShown] = useState(false);

  const oldChatExist = true;
  const sessionChosen = videoIsVisible || chatIsVisible;

  const handleStartOver = () => {
    setVideoIsVisible(true);
    setChatIsVisible(false);
    setNoticeShown(false);
  };

  const handleContinue = () => {
    setChatIsVisible(true);
    setVideoIsVisible(false);
    setNoticeShown(false);
  };

  const handleVideoEndOrClick = () => {
    setVideoIsVisible(false);
    setChatIsVisible(true);
    setNoticeShown(true);
  };

  useEffect(() => {
    if (!oldChatExist) {
      handleStartOver();
    }
  }, [oldChatExist]);

  return (
    <div id="presentation" className="presentation-wrapper">
      <div className="container presentation">
        {oldChatExist && !sessionChosen && (
          <div className="set-session">
            <div className="set-session__btns">
              <button
                className="set-session__btns--btn"
                onClick={handleStartOver}
              >
                Начать сначала
              </button>
              <button
                className="set-session__btns--btn continue"
                onClick={handleContinue}
              >
                Продолжить
              </button>
            </div>
          </div>
        )}

        {noticeShown && (
          <PresentationNotice
            setShowNotice={setNoticeShown}
            setVideoIsVisible={setVideoIsVisible}
          />
        )}

        {videoIsVisible && (
          <PresentationVideo
            onEnded={handleVideoEndOrClick}
            onClick={handleVideoEndOrClick}
          />
        )}

        {chatIsVisible && <PresentationChat chatIsVisible />}
      </div>
    </div>
  );
};

export default Presentation;
