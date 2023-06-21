import './error.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import imgUrl from '@/../public/error404.png';

export function Error() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 1500);
  }, []);
  return (
    <div className="error-container">
      <div>
        <h1>LA PAGINA QUE DESEAS IR NO EXISTE... OOPS</h1>
        <img src={imgUrl} />
      </div>
    </div>
  );
}
