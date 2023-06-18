import { category } from '../api/tmdbApi';
import { CardsGrid } from '../components/cardsgrid/CardsGrid';

export function SeriesPage() {
  return <CardsGrid category={category.tv} />;
}
