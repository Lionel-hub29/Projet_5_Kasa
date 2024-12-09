import React from "react";

const StarRating = ({ maxStars = 5, rating = 0 }) => {
  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${starValue <= rating ? "filled" : ""}`}
          >
            <i class="fa-solid fa-star"></i>
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
