import { useMutation } from "@tanstack/react-query";
export const useAddMovie = () => {
  const { mutate } = useMutation({
    mutationFn: async (title: string) => {
      console.log(title);
      return fetch(`http://localhost:3000/movie/addMovie`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ title }),
      });
    },
    onSuccess: () => {},
  });
  return { addMovie: mutate };
};
