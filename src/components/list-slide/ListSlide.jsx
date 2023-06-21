import { MovieCard } from '../moviecard/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper/core';
import { Link } from 'react-router-dom';
import './list-slide.scss';
import 'swiper/css/effect-fade';

SwiperCore.use([Scrollbar]);

export function ListSlide(props) {
  const movies = props.movies || [];
  const title = props.title;
  const category = props.category;

  return (
    <div className="list-container">
      <h1>{title}</h1>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        // autoplay={true}
        slidesPerView="auto"
        className="slide-list"
        // scrollbar={{ draggable: true, dragSize: 24 }}
        loop={true}
      >
        {movies &&
          movies.map((item, i) => {
            return (
              <SwiperSlide key={item.id}>
                <Link to={`/${category}/${item.id}`}>
                  <MovieCard movie={item} />
                </Link>
              </SwiperSlide>
            );
          })}
        {/* <div className="swiper-scrollbar"></div> */}
      </Swiper>
    </div>
  );
}
