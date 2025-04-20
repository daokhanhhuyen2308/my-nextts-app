import { SectionTitle } from "@/app/styles/movie/MovieStyled";
import { useAppSelector } from "../../hooks/hooks";
import MovieSection from "./MovieSection";

const MovieFavoriteComponent = () => {
  const { movieFavorite } = useAppSelector((state) => state.movies);

  if (movieFavorite?.results.length === 0 || !movieFavorite) {
    return <SectionTitle>No Favorite Movies</SectionTitle>;
  }

  return (
    <MovieSection title={"Favorite Movies"} movieList={movieFavorite.results} />
  );
};

export default MovieFavoriteComponent;
