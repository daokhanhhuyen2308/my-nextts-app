import { useAppSelector } from "@/app/hooks/hooks";
import useFavouriteMovieMutation from "@/app/hooks/useFavoriteMutation";

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
import { BriefMovie, Movie } from "@/app/types/movieDataTypes";
import { useState } from "react";
import { FaHeart, FaPlay, FaStar, FaTv } from "react-icons/fa";
import { toast } from "react-toastify";

type MovieValueProps = {
  movie: Movie | BriefMovie;
  handleTrailerClick: (id: number) => void;
  handleWatchClick: (movie: Movie | BriefMovie) => void;
};

const MovieCard = ({
  movie,
  handleTrailerClick,
  handleWatchClick,
}: MovieValueProps) => {
  const { id, poster_path, title, vote_average } = movie;

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const accountId = useAppSelector((state) => state.auth.user?.uid);
  //call custome hook that you craeted with react-query
  const { addMovieFavoriteMutation, removeMovieFavoriteMutation } =
    useFavouriteMovieMutation(accountId || "");

  const toggleFavorite = () => {
    if (!accountId) {
      toast.error("Vui lòng đăng nhập để thêm vào danh sách yêu thích");
      return;
    }
    if (isFavorite) {
      removeMovieFavoriteMutation.mutate(id, {
        onSuccess: () => {
          toast.success("Đã xóa khỏi danh sách yêu thích");
          setIsFavorite(false);
        },
      });
    } else {
      addMovieFavoriteMutation.mutate(movie, {
        onSuccess: () => {
          toast.success("Đã thêm vào danh sách yêu thích");
          setIsFavorite(true);
        },
      });
    }
  };

  return (
    <CardWrapper>
      <PosterImage
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <PlayIcon className="play-icon" onClick={() => handleTrailerClick(id)}>
        <FaPlay />
      </PlayIcon>
      <Overlay>
        <MovieTitle>{title}</MovieTitle>
        <Rating>
          <FaStar className="star-icon" />
          {vote_average.toFixed(1)}
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
