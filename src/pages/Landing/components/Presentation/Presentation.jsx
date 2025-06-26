import React, { useEffect, useRef, useState } from 'react';
import './Presentation.scss';
import PresentationNotice from './components/PresentationNotice.jsx';
import PresentationVideo from './components/PresentationVideo.jsx';
import PresentationChat from './components/PresentationChat.jsx';

const LOCAL_STORAGE_KEY = 'presentation_chat_messages';

const Presentation = () => {
  const sectionRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [videoIsVisible, setVideoIsVisible] = useState(false);
  const [chatIsVisible, setChatIsVisible] = useState(false);
  const [noticeShown, setNoticeShown] = useState(false);
  const [oldChatExist, setOldChatExist] = useState(true);

  const smoothScrollTo = (targetY, duration = 2000) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      const parsed = JSON.parse(stored);

      if (Array.isArray(parsed) && parsed.length > 0) {
        setOldChatExist(true);
      } else {
        throw new Error('Parsed is not a non-empty array');
      }
    } catch (e) {
      setOldChatExist(false);
    }
  }, []);

  const handleStartOver = () => {
    setVideoIsVisible(true);
    setChatIsVisible(false);
    setNoticeShown(false);
    localStorage.removeItem('presentation_chat_messages');
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasScrolled) {
          setHasScrolled(true);

          document.body.style.overflow = 'hidden';
          sectionRef.current.classList.add('visible');

          const sectionTop =
            sectionRef.current.getBoundingClientRect().top +
            window.scrollY -
            100;

          smoothScrollTo(sectionTop, 400);

          setTimeout(() => {
            document.body.style.overflow = 'auto';
            setHasScrolled(true);
          }, 800);
        }
      },
      {
        threshold: 0.3,
      }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasScrolled]);

  return (
    <div id="presentation" className="presentation-wrapper" ref={sectionRef}>
      <div className="container presentation">
        {oldChatExist && (
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
