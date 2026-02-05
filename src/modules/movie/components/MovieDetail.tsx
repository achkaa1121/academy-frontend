import { useParams, Link } from "react-router-dom";
import { useGetMoviesTans } from "../hooks/useGetMovieTans";
import { LoaderCircle, Star, Calendar, Clock, ArrowLeft } from "lucide-react";
import { MessageCircle, Film } from "lucide-react";
export const MovieDetail = () => {
  const { id } = useParams();
  const { movies, loading } = useGetMoviesTans();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="animate-spin text-white w-12 h-12" />
      </div>
    );
  }

  const movie = movies?.find((m) => m._id === id);
  if (!movie) {
    return (
      <div className="text-center text-red-400 mt-20 text-xl font-semibold">
        Movie not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors font-medium mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          Back to movies
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex flex-ro gap-5">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-3/10 rounded-2xl shadow-2xl object-cover"
                />
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    {movie.title}
                  </h1>
                  <div className="items-center gap-1 flex">
                    <Star className=" text-yellow-500 fill-yellow-500 max-h-4" />
                    <span className="text-1xl font-bold text-yellow-500">
                      {movie.imdb.rating}/10
                    </span>
                    <div className=" flex flex-row text-white items-center gap-4">
                      <p>({movie.votes} votes)</p>
                      <span className="flex gap-1.5">
                        <Calendar />
                        {movie.year}
                      </span>
                      <span className="flex gap-1.5">
                        <Clock />
                        {movie.year} min
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col bg-slate-800 rounded-md p-4">
                    <span className="flex flex-row items-center gap-2.5">
                      <Film className="text-yellow-500" />
                      <h2 className="text-xl font-semibold text-white mb-2">
                        Plot
                      </h2>
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {movie.plot}
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-col bg-slate-800 rounded-md p-4 text-white gap-2 w-1/2">
                      <h2>Genres</h2>
                      <div className="flex flex-row gap-5">
                        {movie.genres.map((e) => {
                          return (
                            <>
                              <p className="bg-black text-yellow-500 rounded-full px-3">
                                {e}
                              </p>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <div className="">
                      <h2>Directors</h2>
                      {movie.directors.map((e) => {
                        return (
                          <>
                            <li className=" text-white ">{e}</li>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white flex flex-direction-row text-3xl items-center">
          <MessageCircle className="text-yellow-500" />
          <h1>Comments</h1>
        </div>
      </div>
    </div>
  );
};
