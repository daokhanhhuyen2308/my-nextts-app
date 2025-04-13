import { Movie } from "@/app/types/movieDataTypes";
import MovieCard from "./MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SectionTitle, SectionWrapper } from "@/app/styles/movie/MovieStyled";
import YouTube from "react-youtube";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { fetchMovieTrailer } from "@/app/redux/movie/movieThunk";
import useRouterHandler from "@/app/utils/useRouterHandler";
import { generateSlugWithTimestamp } from "@/app/utils/slugTitleMovie";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const opts = {
  width: "640",
  height: "390",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    origin: "http://localhost:5173",
  },
};

type MovieSectionProps = {
  title: string;
  movieList: Movie[];
};

const MovieSection = (props: MovieSectionProps) => {
  const { title, movieList } = props;
  const dispatch = useAppDispatch();
  const trailerData = useAppSelector((state) => state.movies.movieVideos);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  const { navigateTo } = useRouterHandler();

  const handleWatchClick = (movie: Movie) => {
    const slug = generateSlugWithTimestamp(movie.title, movie.id);
    // "movie/..." → relative path
    // "/movie/..." → absolute path
    navigateTo(`/movie/${slug}`);
  };

  const onReady = (event: any) => {
    event.target.pauseVideo();
  };

  const handleTrailerClick = (id: number) => {
    dispatch(fetchMovieTrailer(id));
    setModalIsOpen(true);
  };

  useEffect(() => {
    if (trailerData && trailerData.results.length > 0) {
      const trailer = trailerData.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (trailer) {
        setTrailerKey(trailer?.key ?? null);
      }
    } else {
      setTrailerKey(null);
    }
  }, [trailerData]);

  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        showDots={false}
        draggable
        swipeable
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        className="flex items-center space-x-4"
      >
        {movieList.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleTrailerClick={handleTrailerClick}
            handleWatchClick={() => handleWatchClick(movie)}
          />
        ))}
      </Carousel>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 1000,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
      >
        <YouTube
          videoId={trailerKey || undefined}
          opts={opts}
          onReady={onReady}
        />
      </Modal>
    </SectionWrapper>
  );
};

// Modal.setAppElement("#root");
export default MovieSection;
