import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addMovieToFavorite,
  removeMovieFromFavorite,
} from "@/app/services/firebase/favorite.service";
import { BriefMovie } from "../types/movieDataTypes";


const useFavouriteMovieMutation = (accountId: string) => {
    const queryClient = useQueryClient();
    
    const addMovieFavoriteMutation = useMutation({
        mutationFn: (movie: BriefMovie) => addMovieToFavorite(accountId, movie),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ["favoriteMovies", accountId],
            });
        },
    });
    const removeMovieFavoriteMutation = useMutation({
        mutationFn: (movieId: number) =>
            removeMovieFromFavorite(accountId, movieId),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ["favoriteMovies", accountId],
            });
        },
    })
    return {
        addMovieFavoriteMutation,
        removeMovieFavoriteMutation,
    };
}

export default useFavouriteMovieMutation;