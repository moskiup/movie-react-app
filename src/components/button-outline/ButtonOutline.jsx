import './button-outline.scss';

export function ButtonOutline(props) {
  const { texto } = props;
  const { size = 'lg' } = props;
  return (
    <button className={`outline ${size}`} onClick={() => props.onclick()}>
      {texto}
    </button>
  );
}
