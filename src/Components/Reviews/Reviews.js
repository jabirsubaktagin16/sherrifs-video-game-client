import React from "react";
import Review from "../Review/Review";
import useReviews from "./../../CustomHook/useReviews";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <section className="container">
      <h1 className="text-center" style={{ fontSize: "3.5rem" }}>
        What Customers say about us
      </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-4 px-4">
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
