import React from 'react';

const TemplateMobileModal = ({ setShowListModal, title, cost, children }) => {
  return (
    <div className="tariff-list-modal" onClick={() => setShowListModal(false)}>
      <div
        className="tariff-list-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tariff-list-modal__content--header">
          <p>{title}</p>
          <p>{cost}</p>
        </div>

        {children}

        <button
          className="tariff-list-modal__content--close"
          onClick={() => setShowListModal(false)}
        >
          Назад
        </button>
      </div>
    </div>
  );
};

export default TemplateMobileModal;
