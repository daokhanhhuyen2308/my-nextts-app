import { firestore } from "../../../../lib/firebase/firebase";
import { doc, setDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { BriefMovie, Movie, MovieListResponse } from "@/app/types/movieDataTypes";
import { toast } from "react-toastify";

export const getWatchlistMovies = async (accountId: string): Promise<MovieListResponse> => {
  try {
    const movieWatchlistRef = collection(firestore, `accounts/${accountId}/watchlist`);
    const movieWatchlistSnapshot = await getDocs(movieWatchlistRef);
    const movie = movieWatchlistSnapshot.docs.map((doc) => doc.data() as Movie);
    return {
      page: 1,
      results: movie,
      total_pages: Math.ceil(movie.length / 8),
      total_results: movie.length,
    };
  } catch (error) {
    console.error("Error fetching watchlist movies: ", error);
    toast.error("Failed to fetch watchlist movies.");
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    };
  }
};

export const addMovieToWatchlist = async (accountId: string, movie: BriefMovie): Promise<void> => {
  try {
    const movieReference = doc(
      firestore,
      `accounts/${accountId}/watchlist/${movie.id}`
    );
    await setDoc(movieReference, movie);
    toast.success("Movie added to watchlist!");
  } catch (error) {
    toast.error("Failed to add movie to watchlist.");
  }
};

export const removeMovieFromWatchlist = async (
  accountId: string,
  movieId: number
): Promise<void> => {
  try {
    const movieReference = doc(
      firestore,
      `accounts/${accountId}/watchlist/${movieId}`
    );
    await deleteDoc(movieReference);
    toast.success("Movie removed from watchlist!");
  } catch (error) {
    toast.error("Failed to remove movie from watchlist.");
  }
};
