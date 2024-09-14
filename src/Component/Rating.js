import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
`;

const StarIcon = styled(FaStar)`
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  margin: 0 5px;

  &:hover {
    color: ${({ hoverColor }) => hoverColor || "orange"};
  }
`;

const ReviewInput = styled.textarea`
  margin-top: 10px;
  padding: 8px;
  width: 300px;
  height: 100px;
  resize: none;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setRating();
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  return (
    <RatingContainer>
      <Stars>
        {[1, 2, 3, 4, 5].map((star, index) => (
          <StarIcon
            key={index}
            size={30}
            color={hoverRating >= star || rating >= star ? "orange" : "gray"}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(star)}
          />
        ))}
      </Stars>
      <ReviewInput
        placeholder="Write your review here..."
        value={review}
        onChange={handleReviewChange}
      />
      <p>Your Rating: {rating} / 5</p>
      <p>Your Review: {review}</p>
    </RatingContainer>
  );
};

export default Rating;
