import { useQuery } from "@tanstack/react-query";
import type { IMovie } from "../../types";
export const useGetPopularMoviesTans = () => {
  const { data, isLoading, isError } = useQuery<IMovie[]>({
    queryKey: ["popularMovies"],
    queryFn: async () => {
      return fetch("http://localhost:3000/movie/popularMovies").then((res) => {
        return res.json();
      });
    },
  });
  return { movies: data, loading: isLoading, isError };
};
