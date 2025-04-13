import {
  CardWrapper,
  MovieTitle,
  Overlay,
  PlayIcon,
  PosterImage,
  Rating,
  WatchButton,
} from "@/app/styles/movie/MovieStyled";
import { Movie } from "@/app/types/movieDataTypes";
import { FaPlay, FaStar, FaTv } from "react-icons/fa";

type MovieValueProps = {
  movie: Movie;
  handleTrailerClick: (id: number) => void;
  handleWatchClick: (id: number) => void;
};

const MovieCard = ({
  movie,
  handleTrailerClick,
  handleWatchClick,
}: MovieValueProps) => {
  return (
    <CardWrapper>
      <PosterImage
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <PlayIcon className="play-icon" onClick={() => handleTrailerClick(movie.id)}>
        <FaPlay />
      </PlayIcon>
      <Overlay>
        <MovieTitle>{movie.title}</MovieTitle>
        <Rating>
          <FaStar className="star-icon" />
          {movie.vote_average.toFixed(1)}
        </Rating>
          <WatchButton onClick={() => handleWatchClick(movie.id)}>
            <FaTv style={{ marginRight: 4 }} />
            Watch
          </WatchButton>
      </Overlay>
    </CardWrapper>
  );
};

export default MovieCard;
