import { MovieCard } from '../moviecard/MovieCard';
import { Loader } from '../loader/Loader';
import { useEffect, useRef, useState } from 'react';
import './cardsgrid.scss';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import { Link, useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

export function CardsGrid(props) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const unaVez = useRef(true);
  let { keyword } = useParams();

  useEffect(() => {
    const getlist = async () => {
      let response = null;
      let data = [];
      if (keyword !== undefined) {
        response = await tmdbApi.search(props.category, {
          page,
          query: keyword,
        });
        if (page === 1) {
          if (response?.results) {
            data = response.results.filter((x) => x.poster_path !== null);
            setMovies(data);
            unaVez.current = false;
          }
        }
      } else {
        if (props.category === category.movie) {
          response = await tmdbApi.getMovieList(movieType.popular, { page });
        } else if (props.category === category.tv) {
          response = await tmdbApi.getTvList(tvType.top_rated, { page });
        }
        if (unaVez.current || page > 1) {
          data = response.results.filter((x) => x.poster_path !== null);
          setMovies((prev) => [...prev, ...data]);
          unaVez.current = false;
        }
      }
    };
    getlist();
  }, [page, keyword]);

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
