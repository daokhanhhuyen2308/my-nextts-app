import React from "react";
import { ImageStyled } from "../styles/images/ImageStyled";

export type ImageCommonProps = {
  key?: React.Key;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  customStyle?: React.CSSProperties;
  handleOnClick?: () => void;
  type?: "ractangle" | "circle";
  borderRadius?: string;
  cursor?: string;
};

const ImageCommon = (props: ImageCommonProps) => {
  const { key, src, alt, width = 500, height = 300, type, customStyle, handleOnClick } = props;

  const isFullUrl = src.startsWith("http") || src.startsWith("https");
  const finalSrc = isFullUrl ? src : `https://image.tmdb.org/t/p/w500${src}`;

  return (
    <ImageStyled
      key={key}
      src={finalSrc}
      alt={alt}
      width={width}
      height={height}
      type={type}
      style={{
        objectFit: "cover",
        ...customStyle,
      }}
      onClick={handleOnClick}
    />
  );
};

export default ImageCommon;
