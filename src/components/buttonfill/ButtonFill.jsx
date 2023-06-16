import './buttonfill.scss';

export function ButtonFill(props) {
  const { texto } = props;
  return <button className="fill">{texto}</button>;
}
