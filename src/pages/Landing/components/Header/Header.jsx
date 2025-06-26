import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container header">
        <img src="/assets/logo/logo.png" alt="" className="logo" />
        <div>
          <h1 className="page-header">
            целевые заявки <br />
            <span>для магазина дверей</span>
          </h1>
          <div className="page-header-addon">
            <p className="page-header-addon__text">от нашего </p>
            <a href="#presentation" className="page-header-addon__btn">
              <img src="/assets/icons/mingcute_ai-fill.svg" alt="" />
              <p>ИИ-бота</p>
            </a>
          </div>

          <div className="header-list">
            <p className="header-list__title">
              Тонко настраиваем поведение бота:
            </p>

            <div className="header-list__list">
              <div className="header-list__list--item">
                <img src="/assets/icons/checkMark.svg" alt="" />
                <p>Эмпатично консультирует</p>
              </div>

              <div className="header-list__list--item">
                <img src="/assets/icons/checkMark.svg" alt="" />
                <p>Вовлекает, прогревает</p>
              </div>

              <div className="header-list__list--item">
                <img src="/assets/icons/checkMark.svg" alt="" />
                <p>Отсеивает «холодные» запросы</p>
              </div>
            </div>
          </div>

          <div className="header-btns">
            <a
              href="#contacts"
              className="header-btns__btn header-btns__btn--black"
            >
              Оставить заявку
            </a>
            <a
              href="#presentation"
              className="header-btns__btn header-btns__btn--transparent"
            >
              <p>Посмотреть как это работает</p>
              <img src="/assets/icons/arrowRight.svg" alt="" />
            </a>
          </div>
        </div>

        <img
          src="/assets/bg/header/static-iphone.svg"
          alt=""
          className="background-iphone"
        />

        <video className="background-video" autoPlay muted playsInline>
          <source src="/assets/bg/header/video-header.mp4" type="video/mp4" />
        </video>

        <div className="flying-blocks">
          <div className="flying-block flying-block__1">
            <p>
              Качественные <br />
              заявки
            </p>
          </div>
          <div className="flying-block flying-block__2">
            <p>Конверсия + 35%</p>
            <p className="flying-block__2--description">
              Клиент уже готов на замер
            </p>
          </div>
          <div className="flying-block flying-block__3">
            <p>
              Снижается время <br />
              на обработку клиента
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
