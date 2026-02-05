export interface IMovie {
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
