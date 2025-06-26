import React, { useEffect, useRef, useState } from 'react';
import './Contacts.scss';
import ContactsForm from './components/ContactsForm.jsx';

const Contacts = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);

  const [contactVisible, setContactVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === contactRef.current && entry.isIntersecting) {
            setContactVisible(true);
          }
          if (entry.target === formRef.current && entry.isIntersecting) {
            setFormVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <div id="contacts" className="container contacts-wrapper">
      <h3 className="section-header">контакты</h3>

      <div className="contacts">
        <div
          ref={contactRef}
          className={`contact-us contact-block animate top ${contactVisible ? 'visible' : ''}`}
        >
          <h4 className="contacts-title contacts-title__us">
            Свяжитесь с нами
          </h4>

          <div className="contacts-item__description">
            <img src="/assets/icons/telegram.svg" alt="" />
            <p className="contacts-item__title">Telegram</p>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Максим, СEO «Лида или да»</p>
            <div className="contacts-item__description">
              <img src="/assets/icons/email.svg" alt="" />
              <p>maks@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Общий адрес</p>
            <div className="contacts-item__description">
              <img src="/assets/icons/email.svg" alt="" />
              <p>hello@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Рекламный отдел</p>
            <div className="contacts-item__description">
              <img src="/assets/icons/email.svg" alt="" />
              <p>ads@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Отдел разработки ИИ</p>
            <div className="contacts-item__description">
              <img src="/assets/icons/email.svg" alt="" />
              <p>ai@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Сотрудничество</p>
            <div className="contacts-item__description">
              <img src="/assets/icons/email.svg" alt="" />
              <p>partners@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item">
            <p className="contacts-item__title">Вакансии</p>
            <div className="contacts-item__description">
              <img src="/assets/icons/email.svg" alt="" />
              <p>jobs@lidailida.ru</p>
            </div>
          </div>

          <div className="contacts-item__phones">
            <img src="/assets/icons/phone.svg" alt="" />
            <div>
              <p>+7 (968) 882-51-03</p>
            </div>
          </div>
        </div>

        <div
          ref={formRef}
          className={`contacts-form contact-block animate bottom ${formVisible ? 'visible' : ''}`}
        >
          <h4 className="contacts-title">Оставьте заявку</h4>
          <ContactsForm />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
