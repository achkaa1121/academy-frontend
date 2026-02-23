import type { IQuery } from "@/modules/types";
import { useQuery } from "@tanstack/react-query";
export const useGetMoviesTans = (pageNumber: number) => {
  const { data, isLoading, isError } = useQuery<IQuery>({
    queryKey: ["movies"],
    queryFn: async () => {
      return fetch(
        `http://localhost:3000/movie/movies?page=${pageNumber}`,
      ).then((res) => {
        return res.json();
      });
    },
  });
  return {
    movies: data?.movies,
    loading: isLoading,
    isError,
    totalPages: data?.totalPages,
  };
};
