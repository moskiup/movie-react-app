import tmdApi, { movieType } from './../../api/tmdbApi.js';
import { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSlideItem } from '../heroslider-item/HeroSlideItem';
import { TrailerModal } from '../trailermodal/TrailerModal.jsx';
import './hero-slider.scss';

export function HeroSlider() {
  //fondo , pelicula , genre , descripcion
  SwiperCore.use([Autoplay]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        // const response = await tmdApi.getMovieList(movieType.upcoming , { language:'es-ES'});
        const response = await tmdApi.getMovieList(movieType.upcoming);
        setMovies(response.results.slice(1, 4));
      } catch {
        console.log('error');
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movies.map((movie, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={movie}
                className={`${isActive ? 'active' : ''}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movies.map((item, i) => (
        <TrailerModal key={'a' + i} item={item} />
      ))}
    </div>
  );
}
