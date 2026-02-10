import { useEffect } from "react";
export const useGetMovies = () => {
  const movies = useEffect(() => {
    fetch("http://localhost:3000/movies").then((res) => {
      return res.json();
    });
  });
  return movies;
};
