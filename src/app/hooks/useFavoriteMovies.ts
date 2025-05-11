import { getFavoriteMovies } from '@/app/services/firebase/favorite.service';
import { usePaginatedMovies } from "./customs/usePaginatedMovies";

const useFavouriteMovies = (accountId: string, page: number = 1) => {
    return usePaginatedMovies({
        accountId,
        page: page,
        type: "favorites",
        fetchFn: getFavoriteMovies,
    })
}

export default useFavouriteMovies;
