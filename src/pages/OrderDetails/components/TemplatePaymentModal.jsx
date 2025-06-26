import React, { useEffect } from 'react';
import { lockScroll, unlockScroll } from '../../../helpers/scrollLock.js';
import TemplatePayment from './TemplatePayment.jsx';

const TemplatePaymentModal = ({ currentTariff, isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      lockScroll();
    }
    return () => {
      if (isOpen) {
        unlockScroll();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <TemplatePayment
      currentTariff={currentTariff}
      isModal={true}
      onClose={onClose}
      children={children}
    />
  );
};

export default TemplatePaymentModal;
