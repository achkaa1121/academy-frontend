import { useRef } from "react";
import { useAddMovie } from "../hooks/useAddMovie";

export const AddMovie = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addMovie } = useAddMovie();

  const movieAdd = () => {
    const value = inputRef?.current?.value;

    if (!value) {
      return window.alert("Title oruulna uu");
    }
    console.log(value);
    addMovie(value);
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Movie title" />
      <button onClick={movieAdd}>add movie</button>
    </div>
  );
};
