import React, { useState } from 'react';
import './Cookie.scss';

const Cookie = () => {
  const [isShow, setShow] = useState(true);

  return (
    <>
      {isShow && (
        <div className="cookie-wrapper">
          <img src="public/assets/icons/funnyCookie.svg" alt="" />

          <div>
            <p>Мы используем cookie-файлы</p>
            <p>Для повышения удобства работы с сайтом</p>
          </div>

          <button onClick={() => setShow(false)}>Хорошо</button>
        </div>
      )}
    </>
  );
};

export default Cookie;
