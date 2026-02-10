import { useQuery } from "@tanstack/react-query";
import type { IMovie } from "../../types";
export const useGetTopMoviesTans = () => {
  const { data, isLoading, isError } = useQuery<IMovie[]>({
    queryKey: ["topMovies"],
    queryFn: async () => {
      return fetch("http://localhost:3000/movie/topMovies").then((res) => {
        return res.json();
      });
    },
  });
  return { movies: data, loading: isLoading, isError };
};
