import {
  getMovieCredits,
  getMovieDetails,
  getMovieImages,
  getMovieRecommendations,
  getMovieReviews,
  getMovieTrailer,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
  searchMovies,
} from "@/app/services/tmdb/movieTMDBService";
import {
  Movie,
  MovieCreditsResponse,
  MovieDetailResponse,
  MovieImagesResponse,
  MovieListResponse,
  MovieReviewsResponse,
  MovieVideosResponse,
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
