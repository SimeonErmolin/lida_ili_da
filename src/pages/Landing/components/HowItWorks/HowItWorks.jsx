import React, { useEffect, useRef, useState } from 'react';
import './HowItWorks.scss';

const HowItWorks = () => {
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
      id="how-it-works"
      className={`container cards-section ${visible ? 'animate' : ''}`}
      ref={sectionRef}
    >
      <h3 className="section-header">как это работает</h3>
      <div className="cards">
        <div className="card card__1">
          <p>
            Запускаем <br />
            интернет-рекламу <br />
            дверей в вашем <br />
            городе
          </p>
        </div>
        <div className="card card__2">
          <p>
            Пользователь попадает <br />в наш ИИ-бот
          </p>
        </div>
        <div className="card card__3">
          <p>
            Консультируем <br />
            по тех.вопросам <br />и дизайну, вовлекаем
          </p>
        </div>
        <div className="card card__4">
          <p>
            Вы получаете <br />
            прогретую заявку <br />в удобном формате
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
