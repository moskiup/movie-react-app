import { MovieCard } from '../moviecard/MovieCard';
import { useEffect, useState } from 'react';
import tmdbApi, { category, tvType } from '../../api/tmdbApi';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { Loader } from './../loader/Loader';
import './SeriesGrid.css';

export function CardGrid() {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getlist = async () => {
      const response = await tmdbApi.getTvList(tvType.top_rated, { page });
      setSeries((prev) => [...prev, ...response.results]);
      if (isLoading) setTimeout(() => setIsLoading(false), 1200);
    };

    getlist();
  }, [page]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={series.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {isLoading ? <Loader /> : null}
        <ul className="series-container">
          {series.map((serie) => (
            <Link key={serie.id} to={`/serie/${serie.id}`}>
              <li>
                <MovieCard />
              </li>
            </Link>
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
}
