import {
  addMovieToFavorite,
  addMovieToWatchlist,
  getMovieCredits,
  getMovieDetails,
  getMovieFavorite,
  getMovieImages,
  getMovieRecommendations,
  getMovieReviews,
  getMovieTrailer,
  getMovieWatchlist,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
  removeMovieFavorite,
  removeMovieFromWatchlist,
  searchMovies,
} from "@/app/services/movieService";
import {
  Movie,
  MovieCreditsResponse,
  MovieDetailResponse,
  MovieImagesResponse,
  MovieListResponse,
  MovieReviewsResponse,
  MovieVideosResponse,
  TMDBActionResponse,
} from "@/app/types/movieDataTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularMovies = createAsyncThunk<MovieListResponse, void>(
  "movies/fetchPopularMovies",
  async () => {
    const response = await getPopularMovies();
    return response;
  }
);

export const fetchTrendingMovies = createAsyncThunk<MovieListResponse, void>(
  "movies/fetchTrendingMovies",
  async () => {
    const response = await getTrendingMovies();
    if (!response) {
      throw new Error("Failed to fetch trending movies");
    }
    return response;
  }
);

export const fetchTopRatedMovies = createAsyncThunk<MovieListResponse, void>(
  "movies/fetchTopRatedMovies",
  async () => await getTopRatedMovies()
);

export const fetchUpcomingMovies = createAsyncThunk(
  "movies/fetchUpcomingMovies",
  async () => await getUpcomingMovies()
);

export const fetchMovieDetails = createAsyncThunk<MovieDetailResponse, number>(
  "movies/fetchMovieDetails",
  async (id) => {
    const response = await getMovieDetails(id);
    return response;
  }
);

export const fetchMovieCredits = createAsyncThunk<MovieCreditsResponse, number>(
  "movies/fetchMovieCredits",
  async (id) => {
    const response = await getMovieCredits(id);
    return response;
  }
);

export const fetchMovieReviews = createAsyncThunk<MovieReviewsResponse, number>(
  "movies/fetchMovieReviews",
  async (id) => {
    const response = await getMovieReviews(id);
    return response;
  }
);

export const fetchMovieRecommendations = createAsyncThunk<
  MovieListResponse,
  number
>("movies/fetchMovieRecommendations", async (id) => {
  const response = await getMovieRecommendations(id);
  return response;
});

export const fetchMovieImages = createAsyncThunk<MovieImagesResponse, number>(
  "movies/fetchMovieGenres",
  async (id) => {
    const response = await getMovieImages(id);
    return response;
  }
);

export const fetchMovieTrailer = createAsyncThunk<MovieVideosResponse, number>(
  "movies/fetchMovieTrailer",
  async (id) => {
    const response = await getMovieTrailer(id);
    return response;
  }
);

export const fetchSearchMovies = createAsyncThunk<MovieListResponse, string>(
  "search/fetchSearchMovies",
  async (query) => {
    const response = await searchMovies(query);
    return response;
  }
);

export const fetchMovieFavorite = createAsyncThunk<MovieListResponse, number>(
  "movies/fetchMovieFavorite",
  async (accountId) => {
    const response = await getMovieFavorite(accountId);
    return response;
  }
);

export const fetchMovieWatchlist = createAsyncThunk<MovieListResponse, number>(
  "movies/fetchMovieWatchlist",
  async (accountId) => {
    const response = await getMovieWatchlist(accountId);
    return response;
  }
);

export const fetchAddMovieToFavorite = createAsyncThunk<
  TMDBActionResponse,
  { accountId: number; movie: Movie }
>("movies/fetchAddMovieToFavorite", async ({ accountId, movie }) => {
  const response = await addMovieToFavorite(accountId, movie.id);
  return response;
});

export const fetchAddMovieToWatchlist = createAsyncThunk<
  TMDBActionResponse, //ReturnType (PayloadAction) -> mapping vào action.payload
  { accountId: number; movie: Movie } //ThunkArg -> nằm trong mục action.meta.arg
>("movies/fetchAddMovieToWatchlist", async ({ accountId, movie }) => {
  const response = await addMovieToWatchlist(accountId, movie.id);
  return response;
});

export const fetchRemoveMovieFromFavorite = createAsyncThunk<
  TMDBActionResponse,
  { accountId: number; movie: Movie }
>(
  "movies/fetchRemoveMovieFromFavorite",
  async ({ accountId, movie }, thunkAPI) => {
    const response = await removeMovieFavorite(accountId, movie.id);
    thunkAPI.dispatch(fetchMovieFavorite(accountId));
    return response;
  }
);

export const fetchRemoveMovieFromWatchlist = createAsyncThunk<
  TMDBActionResponse,
  { accountId: number; movie: Movie }
>(
  "movies/fetchRemoveMovieFromWatchlist",
  async ({ accountId, movie }, thunkAPI) => {
    const response = await removeMovieFromWatchlist(accountId, movie.id);
    thunkAPI.dispatch(fetchMovieWatchlist(accountId));
    return response;
  }
);