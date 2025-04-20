import MovieDetail from "@/app/components/movie/MovieDetail";

//chú ý: nếu như đặt tên file là [slugMovieId].tsx thì trong 
// file này params.slugMovieId sẽ là slugMovieId
// nếu đặt tên trong parames là slugId hay id sẽ không được
type MovieIdProps = {
  params: {
    slugMovieId: string;
  };
};

export default function MovieDetailPage({ params }: MovieIdProps) {
  const id = Number(params.slugMovieId.split(".").pop());
  return <MovieDetail movieId={id} />;
}
