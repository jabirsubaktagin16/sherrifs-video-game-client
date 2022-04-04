import React from "react";
import { Link } from "react-router-dom";
import useReviews from "./../../CustomHook/useReviews";
import Review from "./../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <section className="container my-5" id="top-banner">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 order-last order-lg-first">
          <h1 style={{ fontSize: "3.5rem" }}>
            Get your favorite games with{" "}
            <span className="red-text">Sherrif's Video Game.</span>
          </h1>
          <p>
            A video game or computer game is an electronic game that involves
            interaction with a user interface or input device - such as a
            joystick, controller, keyboard, or motion sensing device - to
            generate visual feedback. This feedback is shown on a video display
            device, such as a TV set, monitor, touchscreen, or virtual reality
            headset.
          </p>
          <div className="d-grid gap-2 d-md-block">
            <button className="sherrif-button">Explore Now</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={require("../../images/online-games.png")}
            className="img-fluid w-100"
            alt="..."
          />
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-center">Customer Reviews</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-2 px-5">
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
