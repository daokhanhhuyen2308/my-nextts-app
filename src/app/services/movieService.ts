import { httpClients, HttpRequest } from "../http-clients";
import {
  Movie,
  MovieCreditsResponse,
  MovieDetailResponse,
  MovieImagesResponse,
  MovieListResponse,
  MovieReviewsResponse,
  MovieVideosResponse,
  postAccountMediaMovie,
  TMDBActionResponse,
} from "../types/movieDataTypes";

// Lấy danh sách phim phổ biến
export const getPopularMovies = (
  page: number = 1,
  language: string = "en-US"
): Promise<MovieListResponse> => {
  return HttpRequest.get<MovieListResponse>("/movie/popular", {
    params: {
      page: page,
      language: language,
    },
  });
};

// Lấy danh sách phim thịnh hành (trending)
export const getTrendingMovies = () => {
  return HttpRequest.get<MovieListResponse>("/trending/movie/day", {
    params: {
      language: "en-US",
    },
  });
};

// Lấy danh sách phim được đánh giá cao (Top Rated)
export const getTopRatedMovies = () => {
  return HttpRequest.get<MovieListResponse>("/movie/top_rated", {
    params: {
      page: 1,
      language: "en-US",
    },
  });
};

// Lấy danh sách phim sắp chiếu (Upcoming)
export const getUpcomingMovies = (
  page: number = 1,
  language: string = "en-US"
) => {
  return HttpRequest.get<MovieListResponse>("/movie/upcoming", {
    params: {
      page: page,
      language: language,
    },
  });
};

// Lấy chi tiết phim theo ID
export const getMovieDetails = (id: number) => {
  return HttpRequest.get<MovieDetailResponse>(`/movie/${id}`);
};

// Lấy ảnh (backdrops, posters) của phim
export const getMovieImages = (id: number) => {
  return HttpRequest.get<MovieImagesResponse>(`/movie/${id}/images`);
};

// Lấy video (trailer, teaser, v.v.)
export const getMovieTrailer = (id: number) => {
  return HttpRequest.get<MovieVideosResponse>(`/movie/${id}/videos`);
};

// Lấy thông tin diễn viên & đoàn phim
export const getMovieCredits = (id: number) => {
  return HttpRequest.get<MovieCreditsResponse>(`/movie/${id}/credits`);
};

// Lấy phim được đề xuất dựa theo phim hiện tại
export const getMovieRecommendations = (id: number) => {
  return HttpRequest.get<MovieListResponse>(`/movie/${id}/recommendations`);
};

// Lấy đánh giá (review) của người xem
export const getMovieReviews = (id: number) => {
  return HttpRequest.get<MovieReviewsResponse>(`/movie/${id}/reviews`);
};

export const searchMovies = (
  query: string,
  include_adult: boolean = false,
  page: number = 1,
  language: string = "en-US"
) => {
  return HttpRequest.get<MovieListResponse>("/search/movie", {
    params: {
      query: query,
      include_adult: include_adult,
      page: page,
      language: language,
    },
  });
};

export const addMovieToWatchlist = (accountId: number, movieId: number) => {
  return postAccountMediaMovie(accountId, "watchlist", {
    media_type: "movie",
    media_id: movieId,
    watchlist: true
  })
}

export const removeMovieFromWatchlist = (accountId: number, movieId: number) => {
  return postAccountMediaMovie(accountId, "watchlist", {
    media_type: "movie",
    media_id: movieId,
    watchlist: false

  })
}

export const getMovieWatchlist = (accountId: number, page: number = 1, language: string = "en-US") => {
  return HttpRequest.get<MovieListResponse>(`/account/${accountId}/watchlist/movies`, {
    params: {
      media_type: "movie",
      page: page,
      language: language
    },
  });
}

export const removeMovieFavorite = (accountId: number, movieId: number) => {
  return postAccountMediaMovie(accountId, "favorite", {
      media_type: "movie",
      media_id: movieId,
      favorite: false,
    });
}

//fetch('https://api.themoviedb.org/3/account/21943205/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
export const getMovieFavorite = (accountId: number, page: number = 1, language: string = "en-US") => {
  return HttpRequest.get<MovieListResponse>(`/account/${accountId}/favorite/movies`, {
    params: {
      page: page,
      language: language
    }
  });
}

export const addMovieToFavorite = (accountId: number, movieId: number) => {
  return postAccountMediaMovie(accountId, "favorite", {
    media_type: "movie",
    media_id: movieId,
    favorite: true,
  });
}