import React from 'react';

const PresentationChat = ({ chatIsVisible }) => {
  return (
    <section className={`chat-section ${chatIsVisible ? 'visible' : 'hidden'}`}>
      <div className="chat">
        <div className="chat-header">
          <div className="chat-header__inner">
            <div className="chat-header__inner--left">
              <div className="back-arrow"></div>
            </div>
            <div className="chat-header__inner--center">
              <div className="chat-title">Консультант по дверям</div>
              <div className="chat-subtitle">бот</div>
            </div>
            <div className="chat-header__inner--right">
              <div className="user-icon">К</div>
            </div>
          </div>
        </div>
        <div className="chat-wrapper">
          <div className="message">
            <p>
              Здравствуйте! Я бот-консультант – создан, чтобы сделать выбор
              двери максимально простым и понятным. <br />Я могу:
              проанализировать фото, подсказать с выбором, объяснить "техничку"
              простым языком. <br />
              <br />
              Расскажите что именно подбираете – и мы начнем.
            </p>
          </div>

          <div className="message user">
            <p>Lorem ipsum dolor.</p>
          </div>
        </div>

        <div className="chat-footer">
          <div className="chat-footer__inner">
            <button className="footer-btn footer-btn__skrepka">
              <img
                src="../../../../src/assets/presentation/skrepka.png"
                alt=""
              />
            </button>

            <div className="chat-footer__inner--input">
              <input type="text" placeholder="Сообщение" />

              <button className="footer-btn footer-btn__stickers">
                <img
                  src="../../../../src/assets/presentation/stickers.png"
                  alt=""
                />
              </button>
            </div>

            <button className="footer-btn footer-btn__microphone">
              <img
                src="../../../../src/assets/presentation/microphone.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationChat;
