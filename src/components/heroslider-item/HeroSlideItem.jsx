import apiConfig from '../../api/apiConfig';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonFill } from '../buttonfill/ButtonFill';
import { ButtonOutline } from '../button-outline/ButtonOutline';
import { Modal } from '../modal/Modal';
import './hero-slider-item.scss';

export function HeroSlideItem(props) {
  const item = props.item;
  const videSrc = '';
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  useEffect(() => {
    const setModalActive = async () => {
      // const modal = document.querySelector(`#modal_${item.id}`);
      // if (videos.results.length > 0) {
      //   videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
      //   modal
      //     .querySelector('.modal__content > iframe')
      //     .setAttribute('src', videSrc);
      // } else {
      //   modal.querySelector('.modal__content').innerHTML = 'No trailer';
      // }
      // modal.classList.toggle('active');
    };

    setModalActive();
  }, []);

  return (
    <div
      className={`hero-slide-item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="content container">
        <div className="info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Link to={`/movie/${item.id}`}>
              <ButtonFill texto="See Details" />
            </Link>
            <ButtonOutline
              texto="Watch Trailer"
              onclick={() => prueba(videSrc)}
            />
          </div>
        </div>
        <div className="poster">
          <img src={apiConfig.w300Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
}

const TrailerModal = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <iframe
        ref={iframeRef}
        width="100%"
        height="500px"
        title="trailer"
      ></iframe>
    </Modal>
  );
};
