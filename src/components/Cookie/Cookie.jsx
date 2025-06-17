import React from 'react';
import './Cookie.scss';

const Cookie = () => {
  return (
    <div className="cookie-wrapper">
      <img src="public/assets/icons/funnyCookie.svg" alt="" />

      <div>
        <p>Мы используем cookie-файлы</p>
        <p>Для повышения удобства работы с сайтом</p>
      </div>

      <button>Хорошо</button>
    </div>
  );
};

export default Cookie;
