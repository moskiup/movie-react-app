import './button-outline.scss';

export function ButtonOutline(props) {
  const { text, size = 'lg' } = props;

  return (
    <button className={`outline ${size}`} onClick={() => props.onclick()}>
      {text}
    </button>
  );
}
