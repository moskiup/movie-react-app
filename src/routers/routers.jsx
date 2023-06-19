import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { DetailPage } from '../pages/DetailPage';
import { MoviePage } from '../pages/MoviesPage';
import { SeriesPage } from '../pages/SeriesPage';
import { ErrorPage } from '../pages/ErrorPage';

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/movies" element={<MoviePage />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/movies/:id" element={<DetailPage />} />
      <Route path="/series/:id" element={<DetailPage />} />
      <Route path="/movies/search/:keyword" element={<MoviePage />} />
      <Route path="/series/search/:keyword" element={<SeriesPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
