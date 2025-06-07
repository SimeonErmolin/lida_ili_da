import React from 'react';

const PresentationNotice = ({ setShowNotice, setVideoIsVisible }) => {
  const handleClose = () => setShowNotice(false);

  const handleTestClick = () => setShowNotice(false);

  const handleRestartClick = () => {
    setShowNotice(false);
    setVideoIsVisible(true);
  };

  return (
    <div className="notice-wrapper">
      <div className="presentation-notice">
        <button className="modal-close" onClick={handleClose}>
          ×
        </button>

        <p>Теперь можете потестировать бота</p>
        <p className="notice-description">
          Задайте ему вопрос, пришлите фото или запишите аудио про двери
        </p>

        <div className="notice-btns">
          <button className="notice-btns__btn" onClick={handleTestClick}>
            Тестировать!
          </button>
          <button
            className="notice-btns__btn notice-btns__btn--start"
            onClick={handleRestartClick}
          >
            Смотреть сначала
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresentationNotice;
