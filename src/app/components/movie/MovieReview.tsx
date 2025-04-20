import ImageCommon from "@/app/common/ImageCommon";
import {
  Author,
  Content,
  NoReview,
  ReviewContainer,
  ReviewItem,
} from "@/app/styles/movie/MovieDetailStyled";
import { Review } from "@/app/types/movieDataTypes";
import React from "react";

const MovieReview = ({ reviews }: { reviews: Review[] }) => {
  if (!reviews || reviews.length === 0) {
    return <NoReview>No reviews available for this movie.</NoReview>;
  }

  return (
    <ReviewContainer>
      {reviews.map((review) => (
        <ReviewItem key={review.id}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {review.author_details.avatar_path ? (
              <ImageCommon
                src={`https://www.gravatar.com/avatar/${review.author_details.avatar_path}`}
                alt={review.author}
                width={40}
                height={40}
                type={"circle"}
              />
            ) : (
              <ImageCommon
                src={"../../../app/images/default_avatar.png"}
                alt={"Default Avatar"}
                width={40}
                height={40}
                type={"circle"}
                customStyle={{
                  backgroundColor: "#ccc",
                }}
              />
            )}
            <Author>{review.author}</Author>
          </div>

          {review.author_details.rating && (
            <p style={{ fontSize: "1rem", color: "#ffd700" }}>
              Rating: {review.author_details.rating} / 10
            </p>
          )}

          <Content>{review.content}</Content>
        </ReviewItem>
      ))}
    </ReviewContainer>
  );
};

export default MovieReview;
