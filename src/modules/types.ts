import type { ReactNode } from "react";
import type { JSX } from "react/jsx-runtime";

export interface IMovie {
  length: ReactNode;
  map(arg0: (movie: IMovie) => JSX.Element): import("react").ReactNode;
  title: string;
  poster: string;
  plot: string;
  year: string;
  _id: string;
  imdb: {
    rating: string;
  };
  votes: string;
  genres: [string];
  directors: [string];
}
export interface IQuery {
  movies: IMovie;
  totalPages: number;
}
export interface IProps {
  totalPages: number;
}
