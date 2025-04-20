"use client"

import { useAppSelector } from "@/app/hooks/hooks";
import { SectionTitle } from "@/app/styles/movie/MovieDetailStyled";
import MovieSection from "../movie/MovieSection";

const SearchResultMovies = () => {

  const movieResults = useAppSelector((state) => state.search.movieResults);  

  if(movieResults?.results.length === 0 || !movieResults) {
    return (
        <SectionTitle>No results found</SectionTitle>
    )
  }

  return (
    <MovieSection
      title={"Search Result Movies"}
      movieList={movieResults.results}
    />
  );
}

export default SearchResultMovies