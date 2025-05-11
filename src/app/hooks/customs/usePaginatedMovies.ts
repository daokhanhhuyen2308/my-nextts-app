import { QUERY_KEY } from "../../constants/queryKey";
import { MovieListResponse } from "../../types/movieDataTypes";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

type UsePaginatedMoviesProps = {
  accountId: string;
  page: number;
  type: "favorites" | "watchlist";
  fetchFn: (accountId: string, page: number) => Promise<MovieListResponse>;
};

export const usePaginatedMovies = ({
  accountId,
  page,
  type,
  fetchFn,
}: UsePaginatedMoviesProps) => {
  const queryKey =
    type === "favorites"
      ? QUERY_KEY.getFavoriteMovies(accountId, page)
      : QUERY_KEY.getWatchlistMovies(accountId, page);

  return useQuery({
    queryKey: queryKey,
    queryFn: () => fetchFn(accountId, page),
    enabled: !!accountId,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });

};
