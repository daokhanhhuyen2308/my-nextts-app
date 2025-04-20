import { useAppSelector } from "@/app/hooks/hooks";
import { SectionTitle } from "@/app/styles/movie/MovieStyled";
import MovieSection from "./MovieSection";

const MovieWatchlistComponent = () => {
  const { movieWatchlist } = useAppSelector((state) => state.movies);

  if(movieWatchlist?.results.length === 0 || !movieWatchlist){
    return <SectionTitle>You don't have any watchlist movies</SectionTitle>
  }

  return (
    <MovieSection title={"Watchlist Movies"} movieList={movieWatchlist.results} />
  )
};

export default MovieWatchlistComponent;
