import { getWatchlistMovies } from "@/app/services/firebase/watchlist.service";
import { usePaginatedMovies } from "./customs/usePaginatedMovies";

const useWatchlistMovies = (accountId: string, page: number = 1) => {
    return usePaginatedMovies({
        accountId,
        page,
        type: "watchlist",
        fetchFn: getWatchlistMovies,
    })
}

export default useWatchlistMovies;