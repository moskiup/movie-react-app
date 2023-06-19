import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import tmdApi, { category } from '@api/tmdbApi';
import apiConfig from '@api/apiConfig';
import './detail.scss';
import { ButtonOutline } from '@components/button/Button';
import { Loader } from '@components/loader/Loader';

export function Detail() {
  const { id } = useParams();
  const location = useLocation();

  const [credits, setCredits] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [preloadImage, setPreload] = useState('');
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getDetail = async () => {
      let _category = location.pathname.includes('movies') ? category.movie : category.tv;
      const detail = await tmdApi.detail(_category, id);
      const credits = await tmdApi.credits(_category, id);
      setMovie(detail);
      setCredits(credits);
    };

    getDetail();
  }, []);

  const posterUrl = apiConfig.originalImage(
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  );
  let preload = '';

  function handleLoad() {
    setTimeout(() => {
      setLoading(false);
      setPreload(posterUrl);
    }, 1000);
  }

  return (
    <>
      {isLoading ? <Loader /> : null}
      {isLoading ? (
        <img src={posterUrl} onLoad={handleLoad} style={{ maxWidth: '100%', maxHeight: '100vh' }} />
      ) : (
        <div className="detail-background" style={{ backgroundImage: `url(${preloadImage})` }}>
          <div className="detail-container">
            <DetailInfo movie={movie} />
            <DetailCast credits={credits} />
          </div>
        </div>
      )}
    </>
  );
}

function DetailInfo({ movie }) {
  const imageUrl = apiConfig.w300Image(movie.poster_path ? movie.poster_path : movie.backdrop_path);

  return (
    <>
      <div className="poster">
        <div>⭐{movie.vote_average}</div>
        <img src={imageUrl} />
      </div>
      <div className="info">
        <h1 className="title">{movie.title || movie.name}</h1>
        <div className="overview">{movie.overview}</div>
        <div className="genres">
          {movie.genres &&
            movie.genres.map((genre) => (
              <ButtonOutline size="sm" key={genre.id} text={genre.name} />
            ))}
        </div>
      </div>
    </>
  );
}

function DetailCast({ credits }) {
  return (
    <div className="cast-container">
      <h1>TOP CAST</h1>
      <div className="cast-card-container">
        {credits.cast &&
          credits.cast.slice(0, 8).map((cast) => {
            if (cast.profile_path !== null) {
              const imageUrlCast = apiConfig.w300Image(cast.profile_path);
              return (
                <div className="cast-card" key={cast.id}>
                  <img src={imageUrlCast} loading="lazy" />
                  <p className="name">{`${cast.name || cast.original_name}`}</p>
                  <p className="character">{`${cast.character}`}</p>
                </div>
              );
            }
          })}{' '}
      </div>
    </div>
  );
}
