import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonFill, ButtonOutline } from '@components/button/Button';
import tmdApi, { category } from '@api/tmdbApi';
import { TrailerModal } from '../trailermodal/TrailerModal';
import apiConfig from '@api/apiConfig';
import './hero-slider-item.scss';

export function HeroSlideItem(props) {
  const item = props.item;
  const videSrc = '';
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const [idvideo, setIdvideo] = useState(0);
  const [urlVideo, setUrlvideo] = useState('');

  useEffect(() => {
    if (idvideo > 0) {
      const setModalActive = async () => {
        const videos = (await tmdApi.getVideos(category.movie, idvideo)) || [];
        if (videos.results.length > 0) {
          setUrlvideo('https://www.youtube.com/embed/' + videos.results[0].key);
        }
      };
      setModalActive();
    }
  }, [idvideo]);

  const asignarVideo = (id) => {
    setIdvideo(id);
  };

  return (
    <>
      <div
        className={`hero-slide-item ${props.className}`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="content container">
          <div className="info">
            <h2 className="title">{item.title}</h2>
            <div className="overview">{item.overview}</div>
            <div className="btns">
              <Link to={`/movies/${item.id}`}>
                <ButtonFill text="See Details" />
              </Link>
              <ButtonOutline text="Watch Trailer" onclick={() => asignarVideo(item.id)} />
            </div>
          </div>
          <div className="poster">
            <img src={apiConfig.w300Image(item.poster_path)} alt="" />
          </div>
        </div>
      </div>
      {urlVideo !== '' ? <TrailerModal urlVideo={urlVideo} id={idvideo}></TrailerModal> : null}
    </>
  );
}
