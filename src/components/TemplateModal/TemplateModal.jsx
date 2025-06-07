import React, { useEffect } from 'react';
import './TemplateModal.scss';
import { lockScroll, unlockScroll } from '../../helpers/scrollLock.js';

const TemplateModal = ({ isOpen, onClose, children }) => {
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-wrapper">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content-wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default TemplateModal;
