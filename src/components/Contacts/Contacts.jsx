import React from 'react';
import './Contacts.scss';
import ContactsForm from './components/ContactsForm.jsx';

const Contacts = () => {
  return (
    <div id="contacts" className="container contacts-wrapper">
      <h3 className="section-header">контакты</h3>

      <div className="contacts">
        <div className="contact-us contact-block">
          <h4 className="contacts-title contacts-title__us">
            Свяжитесь с нами
          </h4>

          <div className="contacts-item__description">
            <img src="../../../src/assets/icons/telegram.svg" alt="" />
            <p className="contacts-item__title">Telegram</p>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Максим, СEO «Лида или да»</p>
            <div className="contacts-item__description">
              <img src="../../../src/assets/icons/email.svg" alt="" />
              <p>maks@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Общий адрес</p>
            <div className="contacts-item__description">
              <img src="../../../src/assets/icons/email.svg" alt="" />
              <p>hello@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Рекламный отдел</p>
            <div className="contacts-item__description">
              <img src="../../../src/assets/icons/email.svg" alt="" />
              <p>ads@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Отдел разработки ИИ</p>
            <div className="contacts-item__description">
              <img src="../../../src/assets/icons/email.svg" alt="" />
              <p>ai@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Сотрудничество</p>
            <div className="contacts-item__description">
              <img src="../../../src/assets/icons/email.svg" alt="" />
              <p>partners@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Вакансии</p>
            <div className="contacts-item__description">
              <img src="../../../src/assets/icons/email.svg" alt="" />
              <p>jobs@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item__phones">
            <img src="../../../src/assets/icons/phone.svg" alt="" />
            <div>
              <p>+7 (968) 882-51-03</p>
              <p>+7 (995) 000-53-03</p>
            </div>
          </div>
        </div>

        <div className="contacts-form contact-block">
          <h4 className="contacts-title">Оставьте заявку</h4>

          <ContactsForm />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
