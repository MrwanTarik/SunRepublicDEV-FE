import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

function Modal({ children, hideModal }) {
  const modalRoot = document.getElementById('modal-root');

  const handleKeyDown = useCallback((e) => {
    if (e.code === 'Escape') {
      hideModal();
    }
    if (e.target === e.currentTarget) {
      hideModal();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return createPortal(
    <div className={styles.overlay} onClick={handleKeyDown}>
      <div className={styles.window}>{children}</div>
    </div>,
    modalRoot
  );
}

export default Modal;
