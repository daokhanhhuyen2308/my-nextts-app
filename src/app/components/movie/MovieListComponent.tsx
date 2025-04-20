import { useAppSelector } from "@/app/hooks/hooks";
import { JSX } from "react";
import MovieSection from "./MovieSection";
import SearchResultMovies from "../search/SearchResultMovies";

const MovieListComponent = (): JSX.Element => {
  const { movieResults } = useAppSelector((state) => state.search);

  const { popularMovies, trendingMovies, topRatedMovies, upcomingMovies } =
    useAppSelector((state) => state.movies);

  if(movieResults && movieResults.results.length > 0){
    return <SearchResultMovies />
  }  

  if (
    !popularMovies ||
    !popularMovies.results ||
    popularMovies.results.length === 0
  ) {
    return (
      <div>
        <h3 style={{ color: "#fff", padding: "20px", textAlign: "center" }}>
          Loading...
        </h3>
      </div>
    );
  }

  return (
    <>
      <MovieSection
        title={"Popular Movies"}
        movieList={popularMovies.results}
      />
      <MovieSection
        title={"Trending Movies"}
        movieList={trendingMovies.results}
      />
      <MovieSection
        title={"Top Rated Movies"}
        movieList={topRatedMovies.results}
      />
      <MovieSection
        title={"Upcoming Movies"}
        movieList={upcomingMovies.results}
      />
    </>
  );
};

export default MovieListComponent;
