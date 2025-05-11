import { SectionTitle } from "@/app/styles/movie/MovieStyled";
import { useAppSelector } from "../../hooks/hooks";
import MovieSection from "./MovieSection";
import useFavouriteMovies from "@/app/hooks/useFavoriteMovies";
import { useEffect, useState } from "react";

const MovieFavoriteComponent = () => {
  //lấy ra accountId
  const accountIdRedux = useAppSelector((state) => state.auth.user?.uid);
  //lấy ra danh sách phim yêu thích của người dùng có accountId đó
  const [accountId, setAccountId] = useState<string | null>(null);

  useEffect(() => {
    if (accountIdRedux) {
      setAccountId(accountIdRedux);
    }
  }, [accountIdRedux]);

  const { data, isPending, isError } = useFavouriteMovies(accountId as string);

  console.log("accountId", accountId); //null
  console.log("data", data); //undefined

  if (!accountId) {
    return <SectionTitle>Loading user info...</SectionTitle>;
  }

  if (isPending) {
    return <SectionTitle>Loading...</SectionTitle>;
  }

  if (isError) {
    return <SectionTitle>Error loading favorite movies</SectionTitle>;
  }

  if (data.results.length === 0 || !data.results) {
    return <SectionTitle>No Favorite Movies</SectionTitle>;
  }

  return <MovieSection title={"Favorite Movies"} movieList={data?.results} />;
};

export default MovieFavoriteComponent;
