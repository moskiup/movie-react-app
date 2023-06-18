import './buttonfill.scss';

export function ButtonFill(props) {
  const { text, size = 'lg' } = props;
  return (
    <button className={`fill ${size}`} onClick={() => props.onclick()}>
      {text}
    </button>
  );
}
