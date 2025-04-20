"use client";

import SearchComponent from "../components/search/SearchComponent";
import {
  HeaderWrapper,
  LoginButton,
  Nav,
  NavLink,
} from "../styles/layout/LayoutStyled";
import { JSX } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { showLoginForm } from "../redux/ui/uiSlice";
import NavigateToFavoriteMoviePage from "../components/movie/NavigateToFavoriteMoviePage";


const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleLoginClick = () => {
    dispatch(showLoginForm());
  };

  return (
    <HeaderWrapper>
      <Nav>
        <NavLink href="/">Home</NavLink>
      </Nav>
      <SearchComponent />
      <NavigateToFavoriteMoviePage />
      <LoginButton onClick={handleLoginClick}>Login</LoginButton>
    </HeaderWrapper>
  );
};

export default Header;
