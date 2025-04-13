"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieImages,
  fetchMovieRecommendations,
  fetchMovieReviews,
  fetchMovieTrailer,
} from "@/app/redux/movie/movieThunk";
import { Actor, ActorImage, ActorName, Backdrop, CastList, ContentOverlay, InfoSection, Overview, Section, SectionTitle, Title, Trailer, TrailerWrapper } from "@/app/styles/movie/MovieDetailStyled";
import MovieSection from "./MovieSection";


type MovieIdProps = {
  movieId: number;
};

const MovieDetail = ({ movieId }: MovieIdProps) => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movies.movieDetails);
  const credits = useAppSelector((state) => state.movies.movieCredits);
  const reviews = useAppSelector((state) => state.movies.movieReviews);
  const recommendations = useAppSelector(
    (state) => state.movies.movieRecommendations
  );
  const videos = useAppSelector((state) => state.movies.movieVideos);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieDetails(movieId));
      dispatch(fetchMovieCredits(movieId));
      dispatch(fetchMovieReviews(movieId));
      dispatch(fetchMovieRecommendations(movieId));
      dispatch(fetchMovieTrailer(movieId));
    }
  }, [movieId, dispatch]);

  if (!movie) return <div>Loading...</div>;

  const trailer = videos?.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  return (
    <>
      <Backdrop
        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      >
        <ContentOverlay>
          <InfoSection>
            <Title>{movie.title}</Title>
            <Overview>{movie.overview}</Overview>
          </InfoSection>
        </ContentOverlay>
      </Backdrop>

      {trailer && (
        <TrailerWrapper>
          <Trailer
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Trailer"
            allowFullScreen
          />
        </TrailerWrapper>
      )}

      <Section>
        <SectionTitle>Cast</SectionTitle>
        <CastList>
          {credits?.cast.slice(0, 8).map((actor) => (
            <Actor key={actor.id}>
              <ActorImage
                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                alt={actor.name}
              />
              <ActorName>{actor.name}</ActorName>
            </Actor>
          ))}
        </CastList>
      </Section>
      <Section>
        <MovieSection title={"Recommended Movies"} movieList={recommendations?.results || []} />
      </Section>
    </>
  );
};

export default MovieDetail;
