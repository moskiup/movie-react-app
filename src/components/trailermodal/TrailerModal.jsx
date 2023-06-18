import { Modal } from '../modal/Modal';

export function TrailerModal(props) {
  const item = props.item;

  // console.log(item);
  // const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
    // <h1>hola</h1>
    <Modal active={props.active} id={`modal_${item.id}`}>
      <iframe width="100%" height="500px" title="trailer"></iframe>
    </Modal>
  );
}
