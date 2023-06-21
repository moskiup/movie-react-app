import { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import './detail.scss';
import { ButtonOutline } from '@components/button/Button';
import { Loader } from '@components/loader/Loader';
import { useDetail } from '@hooks/useDetail';
import apiConfig from '@api/apiConfig';

export function Detail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { credits, movie, isLoading, setLoading, preloadImage } = useDetail({
    location: location.pathname,
    id,
  });

  useEffect(() => {
    if (isNaN(id)) navigate('/', { replace: true });
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
          <img
            src={preloadImage}
            onLoad={() => {
              setLoading(false);
            }}
            style={{ position: 'absolute', height: '0px', width: '0px' }}
          />
        </>
      ) : null}

      {movie && preloadImage !== '' ? (
        <div className="detail-background" style={{ backgroundImage: `url(${preloadImage})` }}>
          <div className="detail-container">
            <DetailInfo movie={movie} />
            <DetailCast credits={credits} />
          </div>
        </div>
      ) : null}
    </>
  );
}

function DetailInfo({ movie }) {
  const imageUrl = apiConfig.w300Image(movie.poster_path ? movie.poster_path : movie.backdrop_path);
  return (
    <>
      <div className="poster">
        <div>⭐{movie && movie.vote_average}</div>
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
