"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutContainer, MainContent } from "../styles/layout/LayoutStyled";
import { useAppSelector } from "../hooks/hooks";
import LoginComponent from "../components/form/LoginComponent";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const showLogin = useAppSelector((state) => state.ui.showLogin);

  return (
    <LayoutContainer>
        <Header />
        <MainContent>
          {showLogin && <LoginComponent />}
          {children}
        </MainContent>
        <Footer />
    </LayoutContainer>
  );
};

export default ClientLayout;
