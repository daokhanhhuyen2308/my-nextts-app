"use client";

import {
  FaFacebook,
  FaMap,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { JSX } from "react";
import {
  ContactInfo,
  FooterContainer,
  FooterSection,
  MapContainer,
  QRCodeContainer,
  SocialIcons,
} from "../styles/layout/LayoutStyled";
import QRCodeComponent from "../components/qrcode/QRCodeComponent";

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterSection>
        <h3>About us</h3>
        <ul>
          <li>
            <a href="#">Our story</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Recruitment</a>
          </li>
          <li>
            <a href="#">Cetification</a>
          </li>
        </ul>
      </FooterSection>
      <ContactInfo>
        <h3>Contact us</h3>
        <p>
          <FaMap /> Nguyễn Thị Định, Trung Hòa, Cầu Giấy, Hà Nội
        </p>
        <p>
          <FaPhone /> (+84) 123 456 789
        </p>
        <p>
          <FaEnvelope /> anonymous@gmail.com
        </p>
        <SocialIcons>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </SocialIcons>
      </ContactInfo>

      <QRCodeContainer>
        <QRCodeComponent />
        <p>Scan QR Code</p>
      </QRCodeContainer>
    </FooterContainer>
  );
};

export default Footer;
