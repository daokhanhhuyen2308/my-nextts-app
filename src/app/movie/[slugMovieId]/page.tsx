import MovieDetail from "@/app/components/movie/MovieDetail";


type MovieIdProps = {
  params: {
    slugMovieId: string;
  };
};

export default function MovieDetailPage({ params }: MovieIdProps) {
  const id = Number(params.slugMovieId.split(".").pop());
  return <MovieDetail movieId={id} />;
}
