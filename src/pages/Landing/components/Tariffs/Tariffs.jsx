import React, { useEffect, useRef, useState } from 'react';
import './Tariffs.scss';
import TemplatePayment from '../../../OrderDetails/components/TemplatePayment.jsx';
import TemplatePaymentForm from '../../../OrderDetails/components/TemplatePaymentForm.jsx';
import TemplatePaymentModal from '../../../OrderDetails/components/TemplatePaymentModal.jsx';

const Tariffs = () => {
  const sectionRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const [selectedTariff, setSelectedTariff] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const smoothScrollTo = (targetY, duration = 2000) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasScrolled) {
          setHasScrolled(true);

          document.body.style.overflow = 'hidden';
          sectionRef.current.classList.add('visible');

          const sectionTop =
            sectionRef.current.getBoundingClientRect().top +
            window.scrollY -
            100;

          smoothScrollTo(sectionTop, 400);

          setTimeout(() => {
            document.body.style.overflow = 'auto';
            setHasScrolled(true);
          }, 800);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasScrolled]);

  return (
    <>
      <div className="tariffs-wrapper" ref={sectionRef}>
        <div className="container">
          <div className="tariffs-block">
            <h3 className="section-header section-header--white">Тарифы</h3>

            <div className="tariffs">
              <div className="tariff tariff--base">
                <div className="tariff__header">
                  <p>Базовый</p>
                </div>

                <div className="tariff__main">
                  <div className="tariff__main--list">
                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Настройка рекламы</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Использование ИИ-бота</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Еженедельный отчёт о лидах</p>
                    </div>

                    <div className="item item__disable">
                      <img src="/assets/icons/snow.svg" alt="" />
                      <p>
                        При подключении конкурента — <br />
                        отключаем
                      </p>
                    </div>
                  </div>

                  <div className="tariff__main--footer">
                    <p>
                      Только 18% <br />
                      от продаж
                    </p>

                    <button
                      onClick={() => {
                        setSelectedTariff('base');
                        setModalIsOpen(true);
                      }}
                    >
                      Выбрать
                    </button>
                  </div>
                </div>
              </div>

              <div className="tariff tariff--optimal">
                <div className="tariff__header">
                  <p>Оптимальный</p>
                </div>

                <div className="tariff__main">
                  <div className="tariff__main--list">
                    <div className="item">
                      <img src="/assets/icons/star.svg" alt="" />
                      <p>Всё из тарифа «Старт»</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>
                        Ретаргетинг + 3 рекламные <br />
                        связки
                      </p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Подключение Google-таблицы</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>UTM-конструктор</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Лид-трекер с аналитикой</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Приоритет в поддержке</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Обучение менеджера</p>
                    </div>
                  </div>

                  <div className="tariff__main--footer">
                    <p>20 001 ₽/мес.</p>

                    <button
                      onClick={() => {
                        setSelectedTariff('optimal');
                        setModalIsOpen(true);
                      }}
                    >
                      Выбрать
                    </button>
                  </div>
                </div>
              </div>

              <div className="tariff tariff--maximum">
                <div className="tariff__header">
                  <p>Максимум</p>
                </div>

                <div className="tariff__main">
                  <div className="tariff__main--list">
                    <div className="item">
                      <img src="/assets/icons/star.svg" alt="" />
                      <p>Всё из тарифа «Стандарт»</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Ведение паблика ВК</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>А/В тесты креативов</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>УТП под Ваш магазин</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Аудит по прибыли (6ч/мес)</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Подключение менеджера в боте</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Интеграция в CRM</p>
                    </div>
                  </div>

                  <div className="tariff__main--footer">
                    <p>40 001 ₽/мес.</p>
                    <button
                      onClick={() => {
                        setSelectedTariff('maximum');
                        setModalIsOpen(true);
                      }}
                    >
                      Выбрать
                    </button>
                  </div>
                </div>
              </div>

              <div className="tariff tariff--one-time">
                <div className="tariff__header">
                  <p>Разовые услуги</p>
                </div>

                <div className="tariff__main">
                  <div className="tariff__main--list">
                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Создание группы ВК</p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>
                        Создание/редизайн <br />
                        лендинга
                      </p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>
                        Написание кастомного бота <br />с Chat GPT, решающего
                        Ваши <br />
                        задачи
                      </p>
                    </div>

                    <div className="item">
                      <img src="/assets/icons/circle.svg" alt="" />
                      <p>Аудит: поиск точек роста</p>
                    </div>
                  </div>

                  <div className="tariff__main--footer">
                    <a href="#contacts">Выбрать</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TemplatePaymentModal
        currentTariff={selectedTariff}
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        children={<TemplatePaymentForm />}
      />
    </>
  );
};

export default Tariffs;
