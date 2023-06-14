import apiConfig from "../../api/apiConfig";
import tmdApi, { movieType } from "./../../api/tmdbApi.js";
import { useEffect, useState } from "react";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./hero-slider.scss";

import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import { ButtonOutline } from "../button-outline/ButtonOutline";

export function HeroSlider () {
  //fondo , pelicula , genre , descripcion
  SwiperCore.use([Autoplay]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try{
        // const response = await tmdApi.getMovieList(movieType.upcoming , { language:'es-ES'});
        const response = await tmdApi.getMovieList(movieType.upcoming );
        setMovies(response.results.slice(1,4));

    }catch {
      console.log('error')
    }
    }
    getMovies();
    
  }, []);

  return (
    <div className="hero-slider">

      <Swiper
                  modules={[Autoplay]}
                  grabCursor={true}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{delay: 5000}}
      >

        {
          movies.map((movie, i) => 
          
            <SwiperSlide key={i}>
            {({ isActive }) => (
                <HeroSlideItem item={movie} className={`${isActive ? 'active' : ''}`} />
            )}
            </SwiperSlide>
          )
        }
        </Swiper> 
        {
            // movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
        }
        </div>
  );
      }

const HeroSlideItem = (props) => {

  const item = props.item;

  const background = apiConfig.originalImage(item.backdrop_path?item.backdrop_path : item.poster_path);
  const setModalActive = async()=>{
    const modal = document.querySelector(`#modal_${item.id}`);

    const videos = await tmdbApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }

        modal.classList.toggle('active');
  }


  return (
    <div
        className={`hero-slide-item ${props.className}`}
        style={{backgroundImage: `url(${background})`}}
    >
        <div className="content container">
            <div className="info">
                <h2 className="title">{item.title}</h2>
                <div className="overview"  >{item.overview}</div>
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
)
}



/*

const TrailerModal = props => {
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
      <Modal active={false} id={`modal_${item.id}`}>
          <ModalContent onClose={onClose}>
              <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
          </ModalContent>
      </Modal>
  )
}


/*
{
    "adult": false,
    "backdrop_path": "/2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg",
    "genre_ids": [
        28,
        80,
        53
    ],
    "id": 385687,
    "original_language": "en",
    "original_title": "Fast X",
    "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    "popularity": 8363.473,
    "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "release_date": "2023-05-17",
    "title": "Fast X",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 1347
}*/
