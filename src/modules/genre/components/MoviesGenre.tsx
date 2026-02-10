import { NavigationMnu } from "@/modules/home/components/NavigationMenu";
import { useGetMoviesTans } from "@/modules/home/hooks/useGetMoviesTans";
import { AlertCircle, Film, LoaderCircle } from "lucide-react";
import { GenreFlow } from "./GenreFlow";
export const MovieGenre = () => {
  const { movies, loading, isError } = useGetMoviesTans();
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100">
        <div className="relative">
          <LoaderCircle className="animate-spin w-12 h-12 text-yellow-400" />
          <div className="absolute inset-0 animate-ping">
            <LoaderCircle className="w-12 h-12 text-yellow-400/30" />
          </div>
        </div>
        <p className="mt-4 text-slate-400 font-medium">
          Loading please wait...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100">
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-slate-400">
            Failed to load movies. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  if (!movies?.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100">
        <NavigationMnu />
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 text-center max-w-md backdrop-blur-sm">
          <Film className="w-16 h-16 text-slate-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            No movies found
          </h2>
          <p className="text-slate-400">
            Start by adding some amazing movies to your collection!
          </p>
        </div>
      </div>
    );
  }
  const genres = [
    "Music",
    "Family",
    "Comedy",
    "History",
    "Romance",
    "Crime",
    "War",
    "Short",
    "Documentary",
    "Sci-Fi",
    "Animation",
    "News",
    "Mystery",
    "Talk-Show",
    "Adventure",
    "Biography",
    "Drama",
    "Fantasy",
    "Sport",
    "Musical",
    "Thriller",
    "Horror",
    "Action",
    "Western",
    "Film-Noir",
  ];
  return (
    <div className="space-y-6 flex">
      <NavigationMnu />
      <div className="flex justify-center">
        <h1 className="flex text-4xl font-bold text-black">Movies by genre</h1>
      </div>
      <div className="flex flex-col">
        {genres.map((genre) => (
          <GenreFlow movies={movies} genre={genre} />
        ))}
      </div>
    </div>
  );
};
