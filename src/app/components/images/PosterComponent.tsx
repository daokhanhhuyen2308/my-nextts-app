"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Section } from "@/app/styles/movie/MovieDetailStyled";
import { MovieImagesResponse } from "@/app/types/movieDataTypes";
import ImageCommon from "@/app/common/ImageCommon";
import { useState } from "react";
import { Overlay, ZoomedImageWrapper } from "@/app/styles/images/ImageStyled";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

const PosterComponent = ({ posters }: {posters: MovieImagesResponse['posters']}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section>
      <Carousel
        responsive={responsive}
        infinite={false}
        autoPlay={false}
        keyBoardControl
        draggable
        swipeable
        showDots={false}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="px-4"
      >
        <div style={{ display: "flex", gap: "20px" }}>
          {posters.slice(0, 5).map((poster, index) => (
            <ImageCommon
              key={poster.file_path + index}
              src={`https://image.tmdb.org/t/p/w500${poster.file_path}`}
              alt={poster.file_path}
              width={300}
              height={450}
              customStyle={{
                borderRadius: "10px",
                margin: "0 auto",
                cursor: "pointer",
              }}
              type={"ractangle"}
              handleOnClick={() => setSelectedImage(poster.file_path)}
            />
          ))}
        </div>
      </Carousel>
    </Section>
  );
};

export default PosterComponent;
