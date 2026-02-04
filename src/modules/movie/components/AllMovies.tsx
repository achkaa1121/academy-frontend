import { useGetMoviesTans } from "../hooks/useGetMovieTans";
import { LoaderCircle } from "lucide-react";
import { MovieCard } from "./movieCard";
import type { IMovie } from "../types/movie";
export const AllMovies = () => {
  const { movies, loading } = useGetMoviesTans();

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <LoaderCircle className="animate-spin"></LoaderCircle>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4 max-w-200 mx-auto">
      {movies?.map((movie: IMovie) => {
        return <MovieCard movie={movie}></MovieCard>;
      })}
    </div>
  );
};
