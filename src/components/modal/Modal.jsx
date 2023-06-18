import { useState, useRef, useEffect } from 'react';

export function Modal(props) {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove('active');
    if (props.onClose) props.onClose();
  };

  return (
    <div
      ref={contentRef}
      id={props.id}
      className={`modal ${active ? 'active' : ''}`}
      onClick={closeModal}
    >
      {
        <div className="modal__content__close" onClick={closeModal}>
          <i className="bx bx-x"></i>
        </div>
      }
      {props.children}
    </div>
  );
}
