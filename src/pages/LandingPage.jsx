import {MovieGrid} from './../components/moviegrid/MovieGrid.jsx';
import {HeroSlider} from './../components/heroslider/HeroSlider.jsx';
import {ListSlide} from './../components/list-slide/ListSlide.jsx';
import tmdApi , { tvType , movieType } from '../api/tmdbApi.js';

import { useState , useEffect } from 'react';


export function LandingPage(){
  
  const [topMovies, setTopMovies] = useState(null);
  const [topSeries, setTopSeries] = useState(null);
  const [trendSeries, setTrendSeries] = useState(null);
  const [trendMovies, setTrendMovies] = useState(null);

  const handleReachEnd = (id) => {

    console.log(id);
  
  }


  useEffect(()=>{
    const getMovies = async()=>{
      const data_top_mov = await tmdApi.getMovieList(movieType.top_rated );
      const data_top_tv = await tmdApi.getTvList(tvType.top_rated);
      const data_trend_tv = await tmdApi.getTvList(tvType.on_the_air);
      const data_trend_movies = await tmdApi.getMovieList(movieType.popular);

      setTopMovies(data_top_mov.results);
      setTopSeries(data_top_tv.results);
      setTrendSeries(data_trend_tv.results);
      setTrendMovies(data_trend_movies.results);

    };
    getMovies();


  },[])





  return(
    <>
      <HeroSlider />
      {trendMovies&&<ListSlide movies={trendMovies} titulo="Popular Movies" id={1} handleReachEnd={handleReachEnd}/>}
      {trendSeries&&<ListSlide movies={trendSeries} titulo="Series on air" id={2} handleReachEnd={handleReachEnd}/>}
      {topMovies&&<ListSlide movies={topMovies} titulo="Movies TopRated" id={3} handleReachEnd={handleReachEnd}/>}
      {topSeries&&<ListSlide movies={topSeries} titulo="Series TopRated" id={4} handleReachEnd={handleReachEnd}/>}
      

    </>);
}

