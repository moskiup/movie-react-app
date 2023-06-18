import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import tmdApi, { category } from './../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './detail.scss';
import { ButtonOutline } from '../button-outline/ButtonOutline';
import { MovieCard } from '../moviecard/MovieCard';

export function Detail() {
  const { id } = useParams();
  const location = useLocation();

  const [credits, setCredits] = useState({});

  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getDetail = async () => {
      let _category = location.pathname.includes('movies')
        ? category.movie
        : category.tv;

      const detail = await tmdApi.detail(_category, id);
      const credits = await tmdApi.credits(_category, id);
      setMovie(detail);
      console.log(movie.genres);
      setCredits(credits);
    };

    getDetail();
  }, []);
  const url = apiConfig.originalImage(
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  );
  const imageUrl = apiConfig.w300Image(
    movie.poster_path ? movie.poster_path : movie.backdrop_path
  );

  return (
    <div
      className="detail-background"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="detail-container">
        <div className="poster">
          <div>⭐{movie.vote_average}</div>
          <img src={imageUrl} />
        </div>
        <div className="info">
          <h1 className="title">{movie.title}</h1>
          <div className="overview">{movie.overview}</div>
          <div className="genres">
            {movie.genres &&
              movie.genres.map((genre) => (
                <ButtonOutline size="sm" key={genre.id} text={genre.name} />
              ))}
          </div>
        </div>
        <div className="cast-container">
          <h1>TOP CAST</h1>
          <div className="cast-card-container">
            {credits.cast &&
              credits.cast.slice(0, 8).map((cast) => {
                if (cast.profile_path !== null) {
                  const imageUrlCast = apiConfig.w300Image(cast.profile_path);
                  return (
                    <div className="cast-card">
                      <img src={imageUrlCast} loading="lazy" />
                      <p className="name">{`${
                        cast.name || cast.original_name
                      }`}</p>
                      <p className="character">{`${cast.character}`}</p>
                    </div>
                  );
                }
              })}{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

/*{
    "adult": false,
    "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    "belongs_to_collection": null,
    "budget": 100000000,
    "genres": [
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 35,
            "name": "Comedy"
        }
    ],
    "homepage": "https://www.thesupermariobros.movie",
    "id": 502356,
    "imdb_id": "tt6718170",
    "original_language": "en",
    "original_title": "The Super Mario Bros. Movie",
    "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    "popularity": 2693.946,
    "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "production_companies": [
        {
            "id": 33,
            "logo_path": "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
            "name": "Universal Pictures",
            "origin_country": "US"
        },
        {
            "id": 6704,
            "logo_path": "/fOG2oY4m1YuYTQh4bMqqZkmgOAI.png",
            "name": "Illumination",
            "origin_country": "US"
        },
        {
            "id": 12288,
            "logo_path": "/e4dQAqZD374H5EuM0W1ljEBWTKy.png",
            "name": "Nintendo",
            "origin_country": "JP"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "JP",
            "name": "Japan"
        },
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2023-04-05",
    "revenue": 1308766975,
    "runtime": 92,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "",
    "title": "The Super Mario Bros. Movie",
    "video": false,
    "vote_average": 7.814,
    "vote_count": 4673
}*/
