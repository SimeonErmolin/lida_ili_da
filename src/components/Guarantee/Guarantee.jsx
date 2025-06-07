import React, { useState } from 'react';
import './Guarantee.scss';
import TemplateModal from '../TemplateModal/TemplateModal.jsx';
import ModalGuarantee from './components/ModalGuarantee.jsx';

const Guarantee = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="container">
      <div className="guarantee">
        <div className="guarantee__header">
          <p className="guarantee__header--title">Гарантия</p>
          <p className="guarantee__header--description">
            Возвращаем 100% рекламного бюджета и 100% <br />
            от стоимости наших услуг, если не будет лидов
          </p>
        </div>

        <div className="guarantee__main">
          <div className="guarantee__main--title">
            <h3>
              <span>вы платите за результат,</span> <br />а не за клик
            </h3>
          </div>

          <div className="guarantee__main--case">
            <div>
              <p className="case-title">Кейс</p>
              <p className="case-description">
                Снизили стоимость заявки <br />с 5000 ₽ до 3490 ₽
              </p>
              <p className="case-percents">
                + 8 % <br />
                ROMI
              </p>
            </div>

            <img
              src="../../../src/assets/bg/guarantee/graph.png"
              alt=""
              className="case-graph"
            />

            <img
              src="../../../src/assets/bg/guarantee/dot.png"
              alt=""
              className="case-graph-dot"
            />

            <button className="case-btn" onClick={() => setModalIsOpen(true)}>
              <img src="../../../src/assets/icons/caseBtn.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <TemplateModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ModalGuarantee />
      </TemplateModal>
    </div>
  );
};

export default Guarantee;
