import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TemplateMobileModal from './TemplateMobileModal.jsx';

const tariffsData = {
  base: {
    title: 'Оформить тариф Базовый',
    cost: '20 001 ₽/мес.',
    list: [
      'Ретаргетинг + 3 рекламные связки',
      'Подключение Google-таблицы',
      'UTM-конструктор',
      'Лид-трекер с аналитикой',
      'Приоритет в поддержке',
      'Обучение менеджера',
      'Настройка рекламы',
      'Использование ИИ-бота',
      'Еженедельный отчёт о лидах',
    ],
  },
  optimal: {
    title: 'Оформить тариф Оптимальнй',
    cost: '18% от продаж',
    list: [
      'Настройка рекламы',
      'Использование ИИ-бота',
      'Еженедельный отчёт о лидах',
    ],
  },
  maximum: {
    title: 'Оформить тариф Максимум',
    cost: '40 001 ₽/мес.',
    list: [
      'Ведение паблика ВК',
      'А/В тесты креативов',
      'УТП под Ваш магазин',
      'Аудит по прибыли (6ч/мес)',
      'Подключение менеджера в боте',
      'Интеграция в CRM',
      'Ретаргетинг + 3 рекламные связки',
      'Подключение Google-таблицы',
      'UTM-конструктор',
      'Лид-трекер с аналитикой',
      'Приоритет в поддержке',
      'Обучение менеджера',
      'Настройка рекламы',
      'Использование ИИ-бота',
      'Еженедельный отчёт о лидах',
    ],
  },
};

const TemplatePayment = ({ currentTariff, isModal, onClose, children }) => {
  const tariffData = tariffsData[currentTariff];

  const [showListModal, setShowListModal] = useState(false);
  const isMobile = window.innerWidth < 1024;

  return (
    <div className="order-details" onClick={onClose}>
      <div className="order-details__main" onClick={(e) => e.stopPropagation()}>
        {isMobile ? (
          <>
            <div className="order-details__main--fields">
              <p className="order-header">{tariffData.title}</p>
              <p className="order-cost">{tariffData.cost}</p>

              <button
                className="show-tariff-list-btn"
                onClick={() => setShowListModal(true)}
              >
                Состав тарифа
                <img src="/assets/icons/arrowRightBlack.svg" alt="" />
              </button>

              {showListModal && (
                <TemplateMobileModal
                  setShowListModal={setShowListModal}
                  title={tariffData.title}
                  cost={tariffData.cost}
                  children={
                    <div className="tariff-list-modal__content--list">
                      {tariffData.list.map((item) => (
                        <div className="item" key={item}>
                          <img src="/assets/order/circlePurrrp.svg" alt="" />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  }
                />
              )}

              {children}
            </div>

            {isModal === false ? (
              <Link to="/" className="order-details__main--btn">
                ×
              </Link>
            ) : (
              <button className="order-details__main--btn" onClick={onClose}>
                ×
              </button>
            )}
          </>
        ) : (
          <>
            <div className="order-details__main--description-tariff">
              <p className="order-header">{tariffData.title}</p>
              <p className="order-cost">{tariffData.cost}</p>

              <div className="description-tariff__list">
                {tariffData.list.map((item) => (
                  <div className="description-tariff__list--item" key={item}>
                    <img src="/assets/order/circleWhite.svg" alt="" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-details__main--fields">{children}</div>

            {isModal === false ? (
              <Link to="/" className="order-details__main--btn">
                ×
              </Link>
            ) : (
              <button className="order-details__main--btn" onClick={onClose}>
                ×
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TemplatePayment;
