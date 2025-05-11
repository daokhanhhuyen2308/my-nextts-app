import { useAppSelector } from "@/app/hooks/hooks";
import { SectionTitle } from "@/app/styles/movie/MovieStyled";
import MovieSection from "./MovieSection";
import useWatchlistMovies from "@/app/hooks/useWatchlistMovies";

const MovieWatchlistComponent = () => {
  
  const accountId = useAppSelector((state) => state.auth.user?.uid);
  const {data, isPending, isError} = useWatchlistMovies(accountId as string);

  if(isPending){
    return <SectionTitle>Loading...</SectionTitle>
  }

  if(isError){
    return <SectionTitle>Something went wrong</SectionTitle>
  }

  if(data.results.length === 0 || !data.results){
    return <SectionTitle>You don't have any watchlist movies</SectionTitle>
  }

  return (
    <MovieSection title={"Watchlist Movies"} movieList={data.results} />
  )
};

export default MovieWatchlistComponent;
