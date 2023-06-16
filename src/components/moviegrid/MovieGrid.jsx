import { MovieCard } from './../moviecard/MovieCard';
import { Loader } from './../loader/Loader';
import { useEffect, useState } from 'react';
import './MovieGrid.css';
import tmdbApi, { movieType } from './../../api/tmdbApi';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

export function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getlist = async () => {
      const response = await tmdbApi.getMovieList(movieType.popular, { page });
      setMovies((prev) => [...prev, ...response.results]);
      if (isLoading) setTimeout(() => setIsLoading(false), 1200);
    };

    getlist();
  }, [page]);

  const fetchMoreData = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {isLoading ? <Loader /> : null}
        <ul className="movie-container">
          {movies.map((movie) => {
            return (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <li>
                  <MovieCard movie={movie} />
                </li>
              </Link>
            );
          })}
        </ul>
      </InfiniteScroll>
    </>
  );
}
