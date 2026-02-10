import { NavigationMnu } from "./NavigationMenu";
import { useGetMovies } from "../hooks/useGetMovies";
export const MainLayout = async () => {
  const movies = await useGetMovies();
  console.log(movies);
  return (
    <>
      <NavigationMnu />
    </>
  );
};
