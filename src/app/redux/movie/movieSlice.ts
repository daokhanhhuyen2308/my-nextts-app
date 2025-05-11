import {
  MovieListResponse,
  MovieCreditsResponse,
  MovieDetailResponse,
  MovieReviewsResponse,
  MovieImagesResponse,
  MovieVideosResponse,
} from "@/app/types/movieDataTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieImages,
  fetchMovieRecommendations,
  fetchMovieReviews,
  fetchMovieTrailer,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "./movieThunk";

type MovieState = {
  popularMovies: MovieListResponse;
  trendingMovies: MovieListResponse;
  topRatedMovies: MovieListResponse;
  upcomingMovies: MovieListResponse;
  movieDetails: MovieDetailResponse | null;
  movieCredits: MovieCreditsResponse | null;
  movieReviews: MovieReviewsResponse | null;
  movieVideos: MovieVideosResponse | null;
  movieRecommendations: MovieListResponse | null;
  movieImages: MovieImagesResponse | null;
  movieFavorite: MovieListResponse | null;
  movieWatchlist: MovieListResponse | null;
};

const initialState: MovieState = {
  popularMovies: { page: 0, results: [], total_pages: 0, total_results: 0 },
  trendingMovies: { page: 0, results: [], total_pages: 0, total_results: 0 },
  topRatedMovies: { page: 0, results: [], total_pages: 0, total_results: 0 },
  upcomingMovies: { page: 0, results: [], total_pages: 0, total_results: 0 },
  movieDetails: null,
  movieCredits: null,
  movieImages: null,
  movieVideos: null,
  movieRecommendations: null,
  movieReviews: null,
  movieFavorite: null,
  movieWatchlist: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchPopularMovies.fulfilled,
        (state, action: PayloadAction<MovieListResponse>) => {
          state.popularMovies = action.payload;
        }
      )
      .addCase(
        fetchTrendingMovies.fulfilled,
        (state, action: PayloadAction<MovieListResponse>) => {
          state.trendingMovies = action.payload;
        }
      )
      .addCase(
        fetchUpcomingMovies.fulfilled,
        (state, action: PayloadAction<MovieListResponse>) => {
          state.upcomingMovies = action.payload;
        }
      )
      .addCase(
        fetchTopRatedMovies.fulfilled,
        (state, action: PayloadAction<MovieListResponse>) => {
          state.topRatedMovies = action.payload;
        }
      )
      .addCase(
        fetchMovieDetails.fulfilled,
        (state, action: PayloadAction<MovieDetailResponse>) => {
          state.movieDetails = action.payload;
        }
      )
      .addCase(
        fetchMovieCredits.fulfilled,
        (state, action: PayloadAction<MovieCreditsResponse>) => {
          state.movieCredits = action.payload;
        }
      )
      .addCase(
        fetchMovieReviews.fulfilled,
        (state, action: PayloadAction<MovieReviewsResponse>) => {
          state.movieReviews = action.payload;
        }
      )
      .addCase(
        fetchMovieRecommendations.fulfilled,
        (state, action: PayloadAction<MovieListResponse>) => {
          state.movieRecommendations = action.payload;
        }
      )
      .addCase(
        fetchMovieImages.fulfilled,
        (state, action: PayloadAction<MovieImagesResponse>) => {
          state.movieImages = action.payload;
        }
      )
      .addCase(
        fetchMovieTrailer.fulfilled,
        (state, action: PayloadAction<MovieVideosResponse>) => {
          state.movieVideos = action.payload;
        }
      )
  },
});

export default movieSlice.reducer;
