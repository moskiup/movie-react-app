import './button-outline.scss';

export function ButtonOutline(props) {
  const { texto } = props;
  return (
    <button className="outline" onClick={() => props.onclick()}>
      {texto}
    </button>
  );
}
