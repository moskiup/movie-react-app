import apiConfig from '../../api/apiConfig';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import { ButtonOutline } from '../button-outline/ButtonOutline';
import './hero-slider-item.scss';

export function HeroSlideItem(props) {
  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);

    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
      modal
        .querySelector('.modal__content > iframe')
        .setAttribute('src', videSrc);
    } else {
      modal.querySelector('.modal__content').innerHTML = 'No trailer';
    }

    modal.classList.toggle('active');
  };

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
              <Button texto="Ver Ahora" />
            </Link>
            <ButtonOutline texto="Ver Trailer" />
          </div>
        </div>
        <div className="poster">
          <img src={apiConfig.w300Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
}
