import React from 'react';
import './MediaAboutUs.scss';

const MediaAboutUs = () => {
  return (
    <>
      <div className="container media-about-us-wrapper">
        <h3 className="section-header">сми о нас</h3>

        <div className="medias-container">
          <div className="medias-container__item">
            <div className="medias-container__item--img yagla">
              <img src="../../../src/assets/mediaAboutUs/YAGLA.svg" alt="" />
            </div>
            <p>YAGLA</p>
          </div>

          <div className="medias-container__item">
            <div className="medias-container__item--img adpass">
              <img src="../../../src/assets/mediaAboutUs/ADPASS.svg" alt="" />
            </div>
            <p>ADPASS</p>
          </div>

          <div className="medias-container__item">
            <div className="medias-container__item--img">
              <img src="../../../src/assets/mediaAboutUs/tenchat.svg" alt="" />
            </div>
            <p>TenChat</p>
          </div>

          <div className="medias-container__item">
            <div className="medias-container__item--img">
              <img
                src="../../../src/assets/mediaAboutUs/workspace.svg"
                alt=""
              />
            </div>
            <p>WORKSPACE</p>
          </div>

          <div className="medias-container__item">
            <div className="medias-container__item--img">
              <img src="../../../src/assets/mediaAboutUs/VC.svg" alt="" />
            </div>
            <p>VC.RU</p>
          </div>

          <div className="medias-container__item">
            <div className="medias-container__item--img spark">
              <img src="../../../src/assets/mediaAboutUs/SPARK.svg" alt="" />
            </div>
            <p>SPARK.RU</p>
          </div>

          <div className="medias-container__item">
            <div className="medias-container__item--img">
              <img src="../../../src/assets/mediaAboutUs/dtf.svg" alt="" />
            </div>
            <p>DTF</p>
          </div>

          <div className="medias-container__item">
            <div className="medias-container__item--img">
              <img src="../../../src/assets/mediaAboutUs/sostav.svg" alt="" />
            </div>
            <p>Sostav</p>
          </div>
        </div>
      </div>

      <div className="lines">
        <img
          src="../../../src/assets/mediaAboutUs/whiteLine.svg"
          alt=""
          className="lines__white"
        />
        <img
          src="../../../src/assets/mediaAboutUs/purpleLine.svg"
          alt=""
          className="lines__purple"
        />
      </div>
    </>
  );
};

export default MediaAboutUs;
