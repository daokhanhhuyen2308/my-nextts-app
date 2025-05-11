import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addMovieToWatchlist,
  removeMovieFromWatchlist,
} from "@/app/services/firebase/watchlist.service";
import { BriefMovie } from "../types/movieDataTypes";

const useWatchlistMutation = (accountId: string) => {
  const queryClient = useQueryClient();
  
  const addMovieWatchlistMutation = useMutation({
    mutationFn: (movie: BriefMovie) => addMovieToWatchlist(accountId, movie),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["watchlistMovies", accountId],
      });
    },
  });
  const removeMovieWatchlistMutation = useMutation({
    mutationFn: (movieId: number) =>
      removeMovieFromWatchlist(accountId, movieId),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["watchlistMovies", accountId],
      });
    },
  });
  return {
    addMovieWatchlistMutation,
    removeMovieWatchlistMutation,
  };
};

export default useWatchlistMutation;
