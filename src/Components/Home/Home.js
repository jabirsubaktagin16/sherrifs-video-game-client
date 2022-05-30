import React from "react";
import { Link } from "react-router-dom";
import useReviews from "./../../CustomHook/useReviews";
import Review from "./../Review/Review";
import Banner from "./Banner/Banner";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <section className="container" id="top-banner">
      <Banner />
      <div className="row d-flex align-items-center my-5">
        <div className="col-lg-6">
          <img
            src={require("../../images/home-second.jpg")}
            className="img-fluid w-100"
            alt="..."
          />
        </div>
        <div className="col-lg-6">
          <p>
            Video games are defined based on their platform, which include
            arcade video games, console games, and personal computer (PC) games.
            More recently, the industry has expanded onto mobile gaming through
            smartphones and tablet computers, virtual and augmented reality
            systems, and remote cloud gaming. Video games are classified into a
            wide range of genres based on their type of gameplay and purpose.
          </p>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-center">Customer Reviews</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-2 px-4">
          {reviews.slice(0, 3).map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </div>

        <div className="text-center my-5 d-grid gap-2 d-md-block">
          <Link to="/reviews">
            <button className="sherrif-button">Load More Reviews</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
