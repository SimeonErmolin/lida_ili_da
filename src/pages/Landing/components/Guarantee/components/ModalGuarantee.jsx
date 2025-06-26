import React from 'react';
import GuaranteeForm from './GuaranteeForm.jsx';

const ModalGuarantee = () => {
  return (
    <div className="modal-guarantee">
      <div>
        <h3 className="modal-guarantee__title">Проблема</h3>

        <p className="modal-guarantee__description">
          Магазин получал клиентов из интернета, но средняя стоимость одной
          заявки оставалась на уровне 1 250 ₽. Реклама работала, но{' '}
          <span>менеджеры тратили слишком много времени</span> на их обработку.
        </p>
      </div>

      <h3 className="modal-guarantee__title">Решение</h3>

      <div className="modal-guarantee__cards">
        <div className="modal-guarantee__cards--card">
          <div className="card-header">
            <span>1</span>
            <p className="card-title">Оптимизировали таргетинг</p>
          </div>
          <p>
            Обнаружили ошибку: реклама транслировалась на слишком широкую
            аудиторию — более 25 000 человек. <br />
            Это приводило к потоку нерелевантных заявок и неэффективному
            расходованию бюджета.
          </p>
        </div>

        <div className="modal-guarantee__cards--card">
          <div className="card-header">
            <span>2</span>
            <p className="card-title">Сузили аудиторию до 4-6 тысяч человек</p>
          </div>
          <p>
            Исключили нецелевых пользователей. <br />
            Сконцентрировались на тех, кто действительно заинтересован в покупке
            двери.
          </p>
        </div>

        <div className="modal-guarantee__cards--card">
          <div className="card-header">
            <span>3</span>
            <p className="card-title">Нашли новый сегмент клиентов</p>
          </div>
          <p>
            Выявили аудиторию, которую владелец магазина раньше не учитывал —
            малый гостиничный бизнес.
          </p>
        </div>

        <div className="modal-guarantee__cards--card">
          <div className="card-header">
            <span>4</span>
            <p className="card-title">Спецификация рекламы</p>
          </div>
          <ul>
            <li>
              Сфокусировали рекламу на дверях с электронными замками как удобном
              решении для отелей и мини-гостиниц.
            </li>
            <li>
              Подготовили рекламные объявления, объясняющие преимущества
              бесконтактного доступа.
            </li>
          </ul>
        </div>

        <div className="modal-guarantee__cards--card">
          <div className="card-header">
            <span>5</span>
            <p className="card-title">
              Протестировали новые рекламные креативы
            </p>
          </div>
          <p>
            Провели три A/B теста рекламных объявлений, чтобы определить, какие
            триггеры работают лучше.
          </p>
        </div>

        <div className="modal-guarantee__cards--card">
          <div className="card-header">
            <span>6</span>
            <p className="card-title">Запустили ретаргетинг</p>
          </div>
          <ul>
            <li>
              Cфокусировали бюджет на объявлениях, которые показали лучший
              результат.
            </li>
            <li>
              Это помогло вернуть дополнительных клиентов, которые колебались
              перед покупкой.
            </li>
          </ul>
        </div>
      </div>

      <h3 className="modal-guarantee__title">результаты за 3 месяца</h3>

      <div className="modal-guarantee__blocks">
        <div className="main-blocks">
          <div className="modal-guarantee__blocks--block romi">
            <p className="romi__title">ROMI</p>
            <p className="romi__description">
              возвращаемость маркетинговых инвестиций
            </p>
            <p className="romi__percent">+17%</p>

            <p className="romi__percent--description">489% вместо 472%</p>
          </div>

          <div className="modal-guarantee__blocks--block">
            <p className="bid-header">Стоимость заявки</p>
            <p className="bid-cost">1 250 ₽</p>
            <p className="bid-cost__description">вместо 1 390 ₽</p>
          </div>

          <div className="modal-guarantee__blocks--block">
            <p className="bid-header">Количество заявок</p>
            <p className="bid-cost">74</p>
            <p className="bid-cost__description">вместо 60</p>
            <p className="bid-text">
              Конверсия из заявки в покупку увеличилась с 46,9% до 48,6%
            </p>
          </div>

          <div className="modal-guarantee__blocks--block">
            <p className="average-bill-title">Средний чек</p>
            <p className="bid-cost">+4%</p>
            <p className="bid-cost__description">37 200 ₽ вместо 35 700 ₽</p>
          </div>
        </div>

        <div className="new-segment">
          <p>Новый сегмент клиентов</p>
          <p>владельцы мини-отелей и гостиниц</p>
        </div>
      </div>

      <h3 className="modal-guarantee__title">почему мы эффективны</h3>

      <p className="modal-guarantee__description">
        Бизнес начал <span>зарабатывать на 94 424 ₽ больше</span> в месяц{' '}
        <span>только с рекламных продаж.</span> Не всегда нужно увеличивать
        бюджет, чтобы добиться лучших результатов.
      </p>

      <div className="modal-guarantee__footer">
        <div>
          <h3 className="modal-guarantee__footer--title">
            Хотите такой же результат?
          </h3>
          <p className="modal-guarantee__footer--description">
            Оставьте номер телефона, мы с вами свяжемся
          </p>
        </div>

        <GuaranteeForm />
      </div>
    </div>
  );
};

export default ModalGuarantee;
