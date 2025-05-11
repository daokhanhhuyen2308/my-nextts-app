import styled from "@emotion/styled";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";


const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  color: #fff;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(8px);

  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 18px;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  transition: color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Username = styled.span`
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    font-weight 0.3s ease;

  &:hover {
    background-color: #27A4F2;
    box-shadow: 0 0 5px 5px #3EAEF4;
    font-weight: bold;
    border: 1px solid bluegray;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #6EC2F7;
  }
`;

const HeartIcon = styled(FaHeart)`
  color: white;
  font-size: 35px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    color: #FF1919;
    box-shadow: 0 0 15px 5px rgba(255, 25, 25, 0.5);
  }
`;

export {LayoutContainer, HeaderWrapper, Nav, NavLink, LoginButton, HeartIcon };

export const MainContent = styled.main`
  flex: 1;`;

const FooterContainer = styled.footer`
  background-color: #222;
  color: #eee;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  font-size: 0.9rem;
  line-height: 1.6;
  font-family: "Poppins", sans-serif;
`;

const FooterSection = styled.div`
  h3 {
    color: #ddd;
    margin-bottom: 15px;
    border-bottom: 2px solid #444;
    padding-bottom: 5px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #eee;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ccc;
    }
  }
`;

const ContactInfo = styled(FooterSection)`
  p {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  svg {
    font-size: 1.1rem;
    color: #ccc;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  a {
    color: #eee;
    font-size: 1.3rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ccc;
    }
  }
`;

const QRCodeContainer = styled(FooterSection)`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 3rem;
    color: #ccc;
    margin-bottom: 10px;
  }
`;

const MapContainer = styled(FooterSection)`
  iframe {
    width: 100%;
    height: 150px;
    border: 0;
  }
`;

export {
  FooterContainer,
  FooterSection,
  ContactInfo,
  SocialIcons,
  QRCodeContainer,
  MapContainer, Avatar, Username,
};
