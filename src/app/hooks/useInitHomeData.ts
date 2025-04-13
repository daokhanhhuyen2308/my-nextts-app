import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../redux/movie/movieThunk";

export const useInitHomeData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTrendingMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);
};
