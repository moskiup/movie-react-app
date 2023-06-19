import './button.scss';

function Button(props) {
  const { text, size = 'lg', classStyle } = props;

  return (
    <button className={classStyle} onClick={() => props.onclick()}>
      {text}
    </button>
  );
}

export function ButtonOutline(props) {
  const { text, size = 'lg' } = props;

  return (
    <Button
      classStyle={`btn outline ${size}`}
      text={text}
      onClick={() => props.onclick()}
    >
      {text}
    </Button>
  );
}

export function ButtonFill(props) {
  const { text, size = 'lg' } = props;
  return (
    <Button
      classStyle={`btn fill ${size}`}
      text={text}
      onClick={() => props.onclick()}
    >
      {text}
    </Button>
  );
}
