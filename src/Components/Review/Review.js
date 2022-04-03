import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Review = (props) => {
  const { review } = props;
  const { name, image, description, rating } = review;
  return (
    <div className="col">
      <div className="card h-100 border-0 shadow">
        <img src={image} className="img-fluid" alt="..." />
        <div className="card-body p-3 d-flex flex-column">
          <h5
            className="card-title text-center"
            style={{ color: "#4d908e", textTransform: "uppercase" }}
          >
            {name}
          </h5>
          <p className="card-text text-center">{description}</p>
          <div className="d-flex justify-content-between mt-auto">
            <h6>Rating</h6>
            <h6>
              <FontAwesomeIcon icon={faStar} style={{ color: "#f9c74f" }} />{" "}
              {rating.toFixed(1)}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
