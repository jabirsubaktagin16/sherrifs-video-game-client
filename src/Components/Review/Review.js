import React from "react";

const Review = (props) => {
  const { review } = props;
  const { name, image, description } = review;
  return (
    <div className="col">
      <div class="card h-100">
        <img src={image} class="img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">{name}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
