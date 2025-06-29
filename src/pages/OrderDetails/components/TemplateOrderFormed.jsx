import React, { useEffect, useState } from 'react';
import EditableField from './EditableField.jsx';
import { BaseUrl } from '../../../App.jsx';
import { useNavigate } from 'react-router-dom';

const TemplateOrderFormed = ({ link, paymentStatus, name, phone, email }) => {
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(`https://lidailida.ru/orders${link}`)
      .catch((err) => {
        console.error('Ошибка при копировании:', err);
      });
  };

  const proceedToPayment = async () => {
    try {
      const paymentLinkResponse = await fetch(
        `${BaseUrl}application/payment-link/?identifier=${link}`
      );

      if (!paymentLinkResponse.ok) {
        setNotFound(true);
        return;
      }

      const paymentLink = await paymentLinkResponse.json();

      if (paymentLink) {
        window.location.href = paymentLink.payment_link;
      } else {
        alert('Ссылка на оплату не получена, попробуйте снова');
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      setNotFound(true);
    }
  };

  useEffect(() => {
    if (notFound) {
      navigate('/404');
    }
  }, [notFound, navigate]);

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
        <button className="order-formed__btn" onClick={proceedToPayment}>
          Перейти к оплате
        </button>
      )}
    </div>
  );
};

export default TemplateOrderFormed;
