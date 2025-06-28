import React from 'react';
import './PaymentSuccess.scss';

const PaymentSuccess = () => {
  return (
    <div className="payment-success-wrapper">
      <div>
        <div className="payment-success">
          <img
            src="/assets/payment-statuses/Success.svg"
            alt=""
            className="payment-success__image"
          />

          <p className="payment-success__title">Успешно оплачено</p>

          <p className="payment-success__description">
            Мы позвоним вам для подтверждения
          </p>
        </div>

        <button onClick={() => navigate('/')}>На сайт</button>

        <img
          src="/assets/payment-statuses/PURRRRPLE.svg"
          alt=""
          className="bottom-shadow"
        />
      </div>
    </div>
  );
};

export default PaymentSuccess;
