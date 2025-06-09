import React, { useEffect, useRef, useState } from 'react';
import './WhyItWorks.scss';

const WhyItWorks = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`container why-it-works-wrapper ${visible ? 'animate' : ''}`}
      ref={sectionRef}
    >
      <h3 className="section-header">почему это работает</h3>

      <div className="why-it-works">
        <div className="why-it-works__cards">
          <div className="why-it-works__cards--card">
            <p>
              Лиды <br />
              настроены
            </p>
            <p className="description">на заказ</p>
          </div>

          <div className="why-it-works__cards--card purple">
            <p>Результат</p>
            <p className="description">
              измеряется в лидах <br />и сделках
            </p>
          </div>

          <div className="why-it-works__cards--card purple purple__second">
            <p>Специальность</p>
            <p className="description">только двери</p>
          </div>

          <div className="why-it-works__cards--card">
            <p>бот не грузит</p>
            <p className="description">
              а увлекает, консультирует, <br />
              прогревает
            </p>
          </div>
        </div>

        <p className="wanna-do">Хотите проверить?</p>

        <div className="why-it-works__btns">
          <a href="#contacts" className="why-it-works__btns--btn">
            Оставить заявку
          </a>
          <a href="#presentation" className="why-it-works__btns--btn white">
            <p>Протестировать бота</p>
            <img src="../../../src/assets/icons/arrowRightBlack.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyItWorks;
