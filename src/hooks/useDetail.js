import { useState, useEffect } from 'react';
import tmdApi, { category } from '@api/tmdbApi';
import apiConfig from '@api/apiConfig';

export function useDetail({ location, id }) {
  const [credits, setCredits] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [preloadImage, setPreload] = useState('');

  useEffect(() => {
    //REVISAR NO ES NUMERO EL ID

    const getDetail = async () => {
      let _category = location.includes('movies') ? category.movie : category.tv;
      const detail = await tmdApi.detail(_category, id);
      const credits = await tmdApi.credits(_category, id);
      setMovie(detail);
      setCredits(credits);

      const posterUrl = apiConfig.originalImage(
        detail.backdrop_path ? detail.backdrop_path : detail.poster_path
      );
      setPreload(posterUrl);
    };

    getDetail();
  }, []);

  return { credits, movie, isLoading, setLoading, preloadImage };
}
