import { MovieCard } from "../moviecard/MovieCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link} from 'react-router-dom';

import './list-slide.scss';

export function ListSlide(props){

  const movies = props.movies ||[];
  const title = props.titulo;
  const id= props.id;
  

function handleReach(){
  console.log('termino');
}

  return(
    <div className="list-container">
      <h1>{title}</h1>
  <Swiper
                  grabCursor={true}
                  spaceBetween={10}
                  slidesPerView={1}
                  className="slide-list"
                  
      >

        {
          movies&&movies.map((item, i)=> { 
            return (<SwiperSlide key={item.id} >
              <Link to={`/movie/${item.id}`}>
                  <MovieCard movie={item} />
              </Link>
            </SwiperSlide>)
          })
        }
        </Swiper> 
        </div>
  );
}