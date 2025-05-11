"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase";
import MovieListComponent from "./components/movie/MovieListComponent";
import { useInitHomeData } from "./hooks/useInitHomeData";
import LoginComponent from "./components/form/LoginComponent";
import LoadingCommon from "./common/LoadingCommon";
import { useAppDispatch } from "./hooks/hooks";
import { clearCurrentUser, setCurrentUser } from "./redux/auth/authSlice";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  
  useInitHomeData();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setCurrentUser(user));
      } else {
        dispatch(clearCurrentUser());
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (isLoading) return <LoadingCommon />;

  return <MovieListComponent />
}
