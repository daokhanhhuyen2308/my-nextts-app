export type Movie = {
  id: number;
  title: string;
  name: string;
  original_title: string;
  release_date: string;
  popularity: number;
  overview: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  poster_path: string;
  video: false;
  key: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Image = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type Video = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
};

export type Cast = {
  cast_id?: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string | null;
};

export type Crew = {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: string | null;
};

export type Review = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type MovieListResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MovieDetailResponse = {
  id: number;
  title: string;
  overview: string;
  genres: Genre[];
  release_date: string;
  runtime: number;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  tagline: string;
};

export type MovieImagesResponse = {
  backdrops: Image[];
  posters: Image[];
};

export type MovieVideosResponse = {
  results: Video[];
};

export type MovieCreditsResponse = {
  cast: Cast[];
  crew: Crew[];
};

export type MovieReviewsResponse = {
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
};
