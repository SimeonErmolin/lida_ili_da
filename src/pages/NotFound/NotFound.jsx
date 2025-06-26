import React from 'react';
import './NotFound.scss';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h2>Ссылка больше не работает</h2>
      <p>
        Перейдите на сайт,
        <br /> чтобы создать новый заказ
      </p>
      <button onClick={() => navigate('/')}>На сайт</button>
    </div>
  );
};

export default NotFound;
