import React, { useState } from 'react';
import { BaseUrl } from '../../../App.jsx';

const fieldNameMap = new Map([
  ['ФИО', 'fio'],
  ['Телефон', 'phone_number'],
  ['Email', 'email'],
]);

const EditableField = ({ label, initialValue, paymentStatus, identifier }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const isMobile = window.innerWidth < 1024;

  const fieldName = fieldNameMap.get(label) || '';

  const onSubmit = async () => {
    try {
      const payload = { [fieldName]: value };

      const response = await fetch(
        `${BaseUrl}application/?identifier=${identifier}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Ошибка при отправке:', errorData);
        alert('Что-то пошло не так. Попробуйте ещё раз.');
        return;
      }

      setIsEditing(false);
    } catch (e) {
      console.error('Ошибка при создании заказа:', e);
    }
  };

  return (
    <div className="input-block">
      <div className="input-block__header">
        <p className="input-block__header--title">{label}</p>
        {paymentStatus !== 'paid' && (
          <div className="tooltip-wrapper">
            {isEditing ? (
              <button onClick={onSubmit} className="tooltip-btn">
                Сохранить
              </button>
            ) : (
              <>
                <img
                  src="/assets/order/pencil.svg"
                  alt=""
                  onClick={() => setIsEditing(true)}
                />
                {!isMobile && (
                  <img
                    src="/assets/order/Tooltip.svg"
                    alt=""
                    className="tooltip-image"
                  />
                )}
              </>
            )}
          </div>
        )}
      </div>

      {isEditing ? (
        <input
          className="input-block__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <p className="input-block__data">{value}</p>
      )}
    </div>
  );
};

export default EditableField;
