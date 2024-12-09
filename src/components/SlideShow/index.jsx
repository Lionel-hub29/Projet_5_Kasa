import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <div
          className="cardDetail-img"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        >
          {images.length > 1 && (
            <span className="image-caption">
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <button onClick={goToPrevious} className="carousel-button prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={goToNext} className="carousel-button next">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
    </div>
  );
};

export default SlideShow;
