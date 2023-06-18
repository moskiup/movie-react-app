import { MovieCard } from './../moviecard/MovieCard';
import { Loader } from './../loader/Loader';
import { useEffect, useRef, useState } from 'react';
import './MovieGrid.css';
import tmdbApi, { movieType } from './../../api/tmdbApi';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

export function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const unaVez = useRef(true);

  useEffect(() => {
    const getlist = async () => {
      const response = await tmdbApi.getMovieList(movieType.popular, { page });
      if (unaVez.current || page > 1) {
        setMovies((prev) => [...prev, ...response.results]);
        unaVez.current = false;
      }
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
          {movies.map((movie, i) => {
            return (
              <Link key={i} to={`/movie/${movie.id}`}>
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
