import { firestore } from "../../../../lib/firebase/firebase";
import { doc, setDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { BriefMovie, Movie, MovieListResponse } from "@/app/types/movieDataTypes";
import { toast } from "react-toastify";

export const getFavoriteMovies = async (accountId: string): Promise<MovieListResponse> => {
  try {
    const movieFavoritesRef = collection(firestore, `accounts/${accountId}/favorites`);
    const movieFavoritesSnapshot = await getDocs(movieFavoritesRef);
    const movie = movieFavoritesSnapshot.docs.map(doc => doc.data() as Movie);
    console.log("Gọi vào đây đi nào");
    console.log("Fetched favorites:", movie);
    return {
      page: 1,
      results: movie,
      total_pages: Math.ceil(movie.length / 8),
      total_results: movie.length,
    };
  } catch (error) {
    console.error("Error fetching favorite movies: ", error);
    toast.error("Failed to fetch favorite movies.");
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    };
  }
};

export const addMovieToFavorite = async (accountId: string, movie: BriefMovie): Promise<void> => {
  try {
    const movieReference = doc(
      firestore,
      `accounts/${accountId}/favorites/${movie.id}`
    );
    await setDoc(movieReference, movie);
    toast.success("Movie added to favorites movies list!");
  } catch (error) {
    toast.error("Failed to add movie to favorites.");
  }
};

export const removeMovieFromFavorite = async (
  accountId: string,
  movieId: number
): Promise<void> => {
  try {
    const movieReference = doc(
      firestore,
      `accounts/${accountId}/favorites/${movieId}`
    );
    await deleteDoc(movieReference);
    toast.success("Movie removed from favorites!");
  } catch (error) {
    toast.error("Failed to remove movie from favorites.");
  }
};
