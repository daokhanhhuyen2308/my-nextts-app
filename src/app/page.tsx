"use client";

import MovieListComponent from "./components/movie/MovieListComponent";
import { useInitHomeData } from "./hooks/useInitHomeData";

export default function Home() {
  useInitHomeData();

  return <MovieListComponent />;
}
