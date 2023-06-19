import { HeroSlider } from '@components/heroslider/HeroSlider.jsx';
import { ListSlide } from '@components/list-slide/ListSlide.jsx';
import tmdApi, { tvType, movieType } from '../api/tmdbApi.js';

import { useState, useEffect } from 'react';
import { Loader } from '@components/loader/Loader.jsx';

export function LandingPage() {
  const [topMovies, setTopMovies] = useState(null);
  const [topSeries, setTopSeries] = useState(null);
  const [trendSeries, setTrendSeries] = useState(null);
  const [trendMovies, setTrendMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const data_top_mov = await tmdApi.getMovieList(movieType.top_rated);
      const data_top_tv = await tmdApi.getTvList(tvType.top_rated);
      const data_trend_tv = await tmdApi.getTvList(tvType.on_the_air);
      const data_trend_movies = await tmdApi.getMovieList(movieType.popular);

      setTopMovies(data_top_mov.results);
      setTopSeries(data_top_tv.results);
      setTrendSeries(data_trend_tv.results);
      setTrendMovies(data_trend_movies.results);
      setIsLoading(false);
    };
    getMovies();
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <HeroSlider />
      {trendMovies && (
        <ListSlide movies={trendMovies} category="movies" title="Popular Movies" id={1} />
      )}
      {trendSeries && (
        <ListSlide movies={trendSeries} category="series" title="Series on air" id={2} />
      )}
      {topMovies && (
        <ListSlide movies={topMovies} category="movies" title="Movies TopRated" id={3} />
      )}
      {topSeries && (
        <ListSlide movies={topSeries} category="series" title="Series TopRated" id={4} />
      )}
    </>
  );
}
