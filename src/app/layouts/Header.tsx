"use client";

import SearchComponent from "../components/search/SearchComponent";
import {
  HeaderWrapper,
  LoginButton,
  Nav,
  NavLink,
  WishlistIcon,
} from "../styles/layout/LayoutStyled";
import { JSX } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { showLoginForm } from "../redux/ui/uiSlice";

const Header = (): JSX.Element => {

  const dispatch = useAppDispatch();

  const handleLoginClick = () => {
    dispatch(showLoginForm())
  }

  return (
    <HeaderWrapper>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/service">Service</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/about">About</NavLink>
      </Nav>
      <SearchComponent />
        <WishlistIcon />
      <LoginButton onClick={handleLoginClick}>Login</LoginButton>
    </HeaderWrapper>
  );
};

export default Header;
