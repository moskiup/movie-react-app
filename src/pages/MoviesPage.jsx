import { useEffect } from 'react';
import { CardsGrid } from '../components/cardsgrid/CardsGrid';
import { category } from '../api/tmdbApi';
import { Search } from '../components/search/search';

export function MoviePage() {
  return (
    <>
      <Search category="movies" />
      <CardsGrid category={category.movie} />;
    </>
  );
}
