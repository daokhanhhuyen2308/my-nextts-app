"use client"

import { HeartIcon } from "@/app/styles/layout/LayoutStyled";
import Link from "next/link";


const NavigateToFavoriteMoviePage = () => {

  return (
    <Link href="/movies/favorite" aria-label="Go to favorite">
      <HeartIcon />
    </Link>
  );
}

export default NavigateToFavoriteMoviePage;

