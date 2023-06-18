import { useEffect } from 'react';
import { CardsGrid } from '../components/cardsgrid/CardsGrid';
import { category } from '../api/tmdbApi';

export function MoviePage() {
  return <CardsGrid category={category.movie} />;
}
