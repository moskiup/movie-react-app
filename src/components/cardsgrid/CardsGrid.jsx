import { MovieCard } from '../moviecard/MovieCard';
import { Loader } from '../loader/Loader';
import { useEffect, useRef, useState } from 'react';
import './cardsgrid.css';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

export function CardsGrid(props) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const unaVez = useRef(true);
  const baseUrl = props.category === category.movie ? 'movies/' : 'series/';

  useEffect(() => {
    const getlist = async () => {
      if (props.category === category.movie) {
        const response = await tmdbApi.getMovieList(movieType.popular, {
          page,
        });
        if (unaVez.current || page > 1) {
          setMovies((prev) => [...prev, ...response.results]);
          unaVez.current = false;
        }
      } else if (props.category === category.tv) {
        const response = await tmdbApi.getTvList(tvType.top_rated, { page });
        if (unaVez.current || page > 1) {
          setMovies((prev) => [...prev, ...response.results]);
          unaVez.current = false;
        }
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
          {movies.map((item, i) => {
            return (
              <Link key={i} to={`${item.id}`}>
                <li>
                  <MovieCard movie={item} />
                </li>
              </Link>
            );
          })}
        </ul>
      </InfiniteScroll>
    </>
  );
}
