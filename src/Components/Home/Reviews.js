import React from "react";
import Slider from "react-slick";
import useReviews from "./../../CustomHook/useReviews";
import Review from "./../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-5">
      <h1 className="text-center">What Customers Say About Us</h1>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div className="g-5 px-4">
            <Review review={review} key={review._id} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
