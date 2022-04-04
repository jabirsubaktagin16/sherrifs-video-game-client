import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Review.css";

const Review = (props) => {
  const { review } = props;
  const { name, occupation, image, description, rating } = review;
  return (
    <div className="col">
      <div className="card h-100 border-0 p-3">
        <div className="text-center">
          <img
            src={image}
            className="img-fluid rounded-circle w-75"
            alt="..."
          />
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center" style={{ color: "#E63946" }}>
            {name}
          </h5>
          <h6 className="text-center occupation">{occupation}</h6>
          <div className="text-center">
            <Rating
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            />
          </div>
          <p className="card-text text-center mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
