import { Routes, Route } from "react-router";
import { MainLayout } from "./modules/home/components/MainLayout";
import { TopMovies } from "./modules/topMovies/components/TopMovies";
import { PopularMovies } from "./modules/popularMovies/components/PopularMovies";
import { MovieGenre } from "./modules/genre/components/MoviesGenre";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/topMovies" element={<TopMovies />} />
      <Route path="/popularMovies" element={<PopularMovies />} />
      <Route path="/genres" element={<MovieGenre />} />
    </Routes>
  );
};
