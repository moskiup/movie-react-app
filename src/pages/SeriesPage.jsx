import { category } from '../api/tmdbApi';
import { CardsGrid } from '../components/cardsgrid/CardsGrid';
import { Search } from '../components/search/search';

export function SeriesPage() {
  return (
    <>
      <Search category="series" />
      <CardsGrid category={category.tv} />;
    </>
  );
}
