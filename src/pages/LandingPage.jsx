import { HeroSlider } from '@components/heroslider/HeroSlider.jsx';
import { ListSlide } from '@components/list-slide/ListSlide.jsx';
import { Loader } from '@components/loader/Loader.jsx';
import { useLandingFetch } from '@/hooks/useLandingFetch';

export function LandingPage() {
  const { isLoading, trendMovies, trendSeries, topSeries, topMovies } = useLandingFetch();
  return (
    <>
      {isLoading ? <Loader /> : null}
      <HeroSlider />
      {trendMovies && (
        <ListSlide movies={trendMovies} category="movies" title="Popular Movies" id={1} />
      )}
      {trendSeries && (
        <ListSlide movies={trendSeries} category="series" title="Series on air" id={2} />
      )}
      {topMovies && (
        <ListSlide movies={topMovies} category="movies" title="Movies TopRated" id={3} />
      )}
      {topSeries && (
        <ListSlide movies={topSeries} category="series" title="Series TopRated" id={4} />
      )}
    </>
  );
}
