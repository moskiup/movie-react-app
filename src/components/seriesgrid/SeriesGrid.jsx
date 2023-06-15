import { MovieCard } from "../moviecard/MovieCard";
import { useEffect , useState } from "react";
import './SeriesGrid.css';
import tmdbApi ,{ category, tvType  } from '../../api/tmdbApi';
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component'


export function SeriesGrid(){

  const [series , setSeries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{
      const getlist = async()=>{
      const response = await tmdbApi.getTvList( tvType.top_rated , { page} );
      setSeries(prev=> [...prev ,  ...response.results]);
    }

    getlist();
  },[page])

  const fetchMoreData = () => {
    setPage(prevPage => prevPage + 1);
  };


  return(
  <>
    <InfiniteScroll
      dataLength={series.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
    <ul className="series-container">
  
      {series.map(serie=>(
        <Link key={serie.id} to={`/serie/${serie.id}`}>
          <li >
            <MovieCard   movie={serie} /> 
          </li>
        </Link>)
      )}
    </ul>
    </InfiniteScroll>

  </>);
}