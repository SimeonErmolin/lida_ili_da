import React from 'react';
import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="container cards-section">
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
