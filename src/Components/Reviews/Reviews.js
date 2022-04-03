import React from "react";
import Review from "../Review/Review";
import useReviews from "./../../CustomHook/useReviews";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <section className="container">
      <h2 className="text-center">What Customers say about us</h2>
      <div className="row row-cols-1 row-cols-md-3 g-5 my-2 px-5">
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
