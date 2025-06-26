import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container footer">
        <div className="footer__section">
          <h4 className="footer__section--header">реквизиты</h4>
          <div className="footer__section--content">
            <p>ИП Гришуткин Максим Александрович</p>
            <p>
              Россия, Тверская обл., п. Солнечный, <br />
              ул. Новая, д. 37, кв. 38
            </p>
            <p>ИНН 691302434899</p>
            <p>ОГРН 325690000017980</p>
          </div>
        </div>
        <img src="/assets/logo/whiteLogo.png" alt="" className="footer__logo" />
        <div className="footer__section">
          <h4 className="footer__section--header">документы</h4>
          <div className="footer__section--content">
            <a
              href="/offer_with_guarantee.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__section--links"
            >
              Договор-оферта
            </a>
            <a
              href="/Cookie.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__section--links"
            >
              Соглашение Cookie
            </a>
            <a href="#" className="footer__section--links">
              Согласие на рассылку
            </a>
            <a
              href="/policy-conf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__section--links"
            >
              Положение о конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
