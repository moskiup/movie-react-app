import { useState } from 'react';
import { Modal } from '../modal/Modal';

export function TrailerModal(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      active={props.active}
      id={`modal_${props.id}`}
      title={'titulo'}
      isOpen={modalOpen}
      onClose={closeModal}
    >
      <iframe
        width="880px"
        height="500px"
        title="trailer"
        src={props.urlVideo}
        frameBorder="0"
      ></iframe>
    </Modal>
  );
}
