import { useQuery } from "@tanstack/react-query";
import type { IMovie } from "../../types";
export const useGetMoviesTans = () => {
  const { data, isLoading, isError } = useQuery<IMovie[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      return fetch("http://localhost:3000/movie/movies").then((res) => {
        return res.json();
      });
    },
  });
  return { movies: data, loading: isLoading, isError };
};
