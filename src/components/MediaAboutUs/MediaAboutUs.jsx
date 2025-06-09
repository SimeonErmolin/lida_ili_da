import React, { useEffect, useRef, useState } from 'react';
import './MediaAboutUs.scss';

const MediaAboutUs = () => {
  const cardsRef = useRef(null);
  const whiteLineRef = useRef(null);
  const purpleLineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === cardsRef.current) {
              setVisible(true);
              cardsRef.current.classList.add('visible');
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

    if (cardsRef.current) observer.observe(cardsRef.current);
    if (whiteLineRef.current) observer.observe(whiteLineRef.current);
    if (purpleLineRef.current) observer.observe(purpleLineRef.current);

    return () => observer.disconnect();
  }, []);

  const mediaItems = [
    {
      name: 'YAGLA',
      img: 'YAGLA.svg',
      class: 'yagla',
      link: 'https://yagla.ru/blog/user/1151-grishutkin-maksim/',
    },
    {
      name: 'ADPASS',
      img: 'ADPASS.svg',
      class: 'adpass',
      link: 'https://adpass.ru/company/lida-ili-da/',
    },
    { name: 'TenChat', img: 'tenchat.svg', link: 'https://tenchat.ru/4504959' },
    {
      name: 'WORKSPACE',
      img: 'workspace.svg',
      link: 'https://workspace.ru/id/maksim-grishutkin/?from=work',
    },
    { name: 'VC.RU', img: 'VC.svg', link: 'https://vc.ru/id4848273' },
    {
      name: 'SPARK.RU',
      img: 'SPARK.svg',
      class: 'spark',
      link: 'https://spark.ru/user/258829/blog/254717/pochemu-lida-ili-da-obje',
    },
    { name: 'DTF', img: 'dtf.svg', link: 'https://dtf.ru/id2750493' },
    {
      name: 'Sostav',
      img: 'sostav.svg',
      link: 'https://www.sostav.ru/blogs/281808',
    },
  ];

  return (
    <>
      <div className="container media-about-us-wrapper">
        <h3 className="section-header">сми о нас</h3>

        <div
          className={`medias-container ${visible ? 'visible' : ''}`}
          ref={cardsRef}
        >
          {mediaItems.map((media, index) => (
            <div className="medias-container__item" key={media.name}>
              <div
                className={`medias-container__item--img ${media.class || ''}`}
              >
                <img
                  src={`/assets/mediaAboutUs/${media.img}`}
                  alt={media.name}
                />
              </div>
              <a href={media.link} target="_blank" rel="noopener noreferrer">
                {media.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="lines">
        <img
          ref={whiteLineRef}
          src="/assets/mediaAboutUs/whiteLine.svg"
          alt=""
          className="lines__white"
        />
        <img
          ref={purpleLineRef}
          src="/assets/mediaAboutUs/purpleLine.svg"
          alt=""
          className="lines__purple"
        />
      </div>
    </>
  );
};

export default MediaAboutUs;
