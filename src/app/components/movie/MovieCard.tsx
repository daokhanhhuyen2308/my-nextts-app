import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import {
  fetchAddMovieToFavorite,
  fetchMovieFavorite,
  fetchRemoveMovieFromFavorite,
} from "@/app/redux/movie/movieThunk";
import {
  CardWrapper,
  FavoriteButton,
  MovieTitle,
  Overlay,
  PlayIcon,
  PosterImage,
  Rating,
  WatchButton,
} from "@/app/styles/movie/MovieStyled";
import { Movie } from "@/app/types/movieDataTypes";
import { FaHeart, FaPlay, FaStar, FaTv } from "react-icons/fa";
import { toast } from "react-toastify";

type MovieValueProps = {
  movie: Movie;
  handleTrailerClick: (id: number) => void;
  handleWatchClick: (movie: Movie) => void;
};

const MovieCard = ({
  movie,
  handleTrailerClick,
  handleWatchClick,
}: MovieValueProps) => {
  const dispatch = useAppDispatch();
  const accountId = 21943205;

  const isFavorite = useAppSelector((state) =>
    state.movies.movieFavorite?.results.some(
      (item: Movie) => item.id === movie.id
    )
  );

  const toggleFavorite = () => {
    if (!isFavorite) {
      dispatch(fetchAddMovieToFavorite({ accountId, movie }));
      toast.success("Thêm thành công vào danh sách yêu thích");
    } else {
      dispatch(fetchRemoveMovieFromFavorite({ accountId, movie }));
      toast.success("Xóa khỏi danh sách yêu thích phim");
    }
  };

  return (
    <CardWrapper>
      <PosterImage
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <PlayIcon
        className="play-icon"
        onClick={() => handleTrailerClick(movie.id)}
      >
        <FaPlay />
      </PlayIcon>
      <Overlay>
        <MovieTitle>{movie.title}</MovieTitle>
        <Rating>
          <FaStar className="star-icon" />
          {movie.vote_average.toFixed(1)}
        </Rating>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <WatchButton onClick={() => handleWatchClick(movie)}>
            <FaTv style={{ marginRight: 4 }} />
            Watch
          </WatchButton>
          <FavoriteButton onClick={toggleFavorite} isFavorite={isFavorite}>
            <FaHeart />
          </FavoriteButton>
        </div>
      </Overlay>
    </CardWrapper>
  );
};

export default MovieCard;
