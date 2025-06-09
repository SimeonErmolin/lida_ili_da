import React, { useEffect, useRef } from 'react';
import './MediaAboutUs.scss';

const MediaAboutUs = () => {
  const cardsRef = useRef([]);
  const whiteLineRef = useRef(null);
  const purpleLineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('medias-container__item')) {
              entry.target.classList.add('visible');
            }
            if (entry.target === whiteLineRef.current) {
              whiteLineRef.current.classList.add('visible');
            }
            if (entry.target === purpleLineRef.current) {
              purpleLineRef.current.classList.add('visible');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    if (whiteLineRef.current) observer.observe(whiteLineRef.current);
    if (purpleLineRef.current) observer.observe(purpleLineRef.current);

    return () => observer.disconnect();
  }, []);

  const mediaItems = [
    { name: 'YAGLA', img: 'YAGLA.svg', class: 'yagla' },
    { name: 'ADPASS', img: 'ADPASS.svg', class: 'adpass' },
    { name: 'TenChat', img: 'tenchat.svg' },
    { name: 'WORKSPACE', img: 'workspace.svg' },
    { name: 'VC.RU', img: 'VC.svg' },
    { name: 'SPARK.RU', img: 'SPARK.svg', class: 'spark' },
    { name: 'DTF', img: 'dtf.svg' },
    { name: 'Sostav', img: 'sostav.svg' },
  ];

  return (
    <>
      <div className="container media-about-us-wrapper">
        <h3 className="section-header">сми о нас</h3>

        <div className="medias-container">
          {mediaItems.map((media, index) => (
            <div
              className="medias-container__item"
              key={media.name}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div
                className={`medias-container__item--img ${media.class || ''}`}
              >
                <img
                  src={`../../../src/assets/mediaAboutUs/${media.img}`}
                  alt={media.name}
                />
              </div>
              <p>{media.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lines">
        <img
          ref={whiteLineRef}
          src="../../../src/assets/mediaAboutUs/whiteLine.svg"
          alt=""
          className="lines__white"
        />
        <img
          ref={purpleLineRef}
          src="../../../src/assets/mediaAboutUs/purpleLine.svg"
          alt=""
          className="lines__purple"
        />
      </div>
    </>
  );
};

export default MediaAboutUs;
