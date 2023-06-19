import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
import './modal.scss';

export function Modal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      //hide
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    isOpen && (
      <div className="modal active" onClick={onClose}>
        <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose}>X</button>
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    ),
    document.getElementById('app-container')
  );
}
