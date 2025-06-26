import React, { useState } from 'react';

const EditableField = ({ label, initialValue, paymentStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const isMobile = window.innerWidth < 1024;

  return (
    <div className="input-block">
      <div className="input-block__header">
        <p className="input-block__header--title">{label}</p>
        {paymentStatus !== 'paid' && (
          <div className="tooltip-wrapper">
            {isEditing ? (
              <button
                onClick={() => setIsEditing(false)}
                className="tooltip-btn"
              >
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
