import tmdApi, { tvType, movieType } from '../api/tmdbApi.js';
import { useState, useEffect } from 'react';

export function useLandingFetch() {
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

  return { isLoading, trendMovies, trendSeries, topSeries, topMovies };
}
