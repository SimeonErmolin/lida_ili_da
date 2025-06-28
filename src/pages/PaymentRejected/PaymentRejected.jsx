import React from 'react';
import './PaymentRejected.scss';
import { useNavigate } from 'react-router-dom';

const PaymentRejected = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-rejected-wrapper">
      <div>
        <div className="payment-rejected">
          <img
            src="/assets/payment-statuses/Rejected.svg"
            alt=""
            className="payment-rejected__image"
          />
          <p className="payment-rejected__title">Не удалось оплатить</p>
          <p className="payment-rejected__description">
            Оформите новый заказ <br />в разделе «Тарифы»
          </p>
        </div>

        <button onClick={() => navigate('/')}>На сайт</button>

        <img
          src="/assets/payment-statuses/RRRRRREDDD.svg"
          alt=""
          className="bottom-shadow"
        />
      </div>
    </div>
  );
};

export default PaymentRejected;
