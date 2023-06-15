import './button.scss';

export function Button(props) {
  const { texto } = props;
  return <button className="fill">{texto}</button>;
}
