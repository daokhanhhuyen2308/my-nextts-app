"use client";

import SearchComponent from "../components/search/SearchComponent";
import {
  HeaderWrapper,
  LoginButton,
  Nav,
  NavLink,
  Avatar,
  Username,
} from "../styles/layout/LayoutStyled";
import { JSX } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { showLoginForm } from "../redux/ui/uiSlice";
import NavigateToFavoriteMoviePage from "../components/movie/NavigateToFavoriteMoviePage";

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLoginClick = () => {
    dispatch(showLoginForm());
  };

  return (
    <HeaderWrapper>
      <Nav>
        <NavLink href="/">Home</NavLink>
      </Nav>
      <SearchComponent />
      {isAuthenticated && <NavigateToFavoriteMoviePage />}
      {isAuthenticated ? (
        <div className="flex items-center gap-2">
          <Avatar
            src={user?.photoURL || "/images/default-avatar.png"}
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
          <Username>{user?.displayName || "username"}</Username>
        </div>
      ) : (
        <LoginButton onClick={handleLoginClick}>Login</LoginButton>
      )}
    </HeaderWrapper>
  );
};

export default Header;
