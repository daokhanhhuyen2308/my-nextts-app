export const QUERY_KEY = {    
    getFavoriteMovies: (accountId: string, page: number) => ["movieFavorites", accountId, page],
    getWatchlistMovies: (accountId: string, page: number) => ["movieWatchlist", accountId, page],
}