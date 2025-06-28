import React from 'react';
import EditableField from './EditableField.jsx';

const TemplateOrderFormed = ({
  link,
  paymentStatus,
  name,
  phone,
  email,
  paymentLink,
}) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(link).catch((err) => {
      console.error('Ошибка при копировании:', err);
    });
  };

  return (
    <div className="order-formed">
      <div className="card">
        <p className="card__title">Заказ сформирован</p>

        <div className="check-order">
          <p className="check-order__title">Ссылка на просмотр заказа</p>

          <p className="check-order__link">{link}</p>

          <div className="check-order__copy-link">
            <p>Сохраните ссылку для дальнейшего использования</p>
            <img
              src="/assets/order/copy.svg"
              alt=""
              onClick={handleCopyClick}
            />
          </div>
        </div>

        <div className="status-payment">
          <p className="status-payment__title">Статус оплаты</p>
          <div className="status-payment__status">
            <img
              src={`/assets/order/${paymentStatus === 'pending' ? 'orange.svg' : 'green.svg'}`}
              alt=""
            />
            <p>{paymentStatus === 'pending' ? 'Ожидает оплаты' : 'Оплачено'}</p>
          </div>
        </div>
      </div>

      <div className="order-formed__check-data">
        <p className="order-formed__check-data--title">
          {paymentStatus === 'pending'
            ? 'Проверьте введённые данные перед оплатой'
            : 'Персональные данные'}
        </p>

        <EditableField
          label="ФИО"
          initialValue={name}
          paymentStatus={paymentStatus}
          identifier={link}
        />
        <EditableField
          label="Телефон"
          initialValue={phone}
          paymentStatus={paymentStatus}
          identifier={link}
        />
        <EditableField
          label="Email"
          initialValue={email}
          paymentStatus={paymentStatus}
          identifier={link}
        />
      </div>

      <div className="order-formed__warning">
        <img src="/assets/order/warning.svg" alt="" />
        <p>Чтобы изменить тариф вернитесь к разделу «Тарифы»</p>
      </div>

      {paymentStatus === 'pending' && (
        <a href={paymentLink} className="order-formed__btn">
          Перейти к оплате
        </a>
      )}
    </div>
  );
};

export default TemplateOrderFormed;
