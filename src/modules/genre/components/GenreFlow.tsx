import type { genreProps } from "../types";
import { MovieCard } from "@/modules/home/components/MovieCard";
export const GenreFlow: React.FC<genreProps> = ({ genre, movies }) => {
  console.log("GenreFlow");
  return (
    <div className="bg-slate-300 shrink-0 w-40 h-60 rounded-lg overflow-hidden">
      <h1 className="text-black text-3xl">{genre}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies
          .filter((movie) => movie.genres.includes(genre))
          .map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
      </div>
    </div>
  );
};
