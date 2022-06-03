import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import useUserDetails from "./../../CustomHook/useUserDetails";
import styles from "./Review.module.css";

const Review = (props) => {
  const { review } = props;
  const { email, description, rating } = review;
  const [reviewer] = useUserDetails(email);
  return (
    <div className={styles.card}>
      <img src={reviewer.img} className={styles.imgDiv} alt="..." />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center" style={{ color: "#E63946" }}>
          {reviewer.name}
        </h5>
        <h6 className="text-center occupation">{reviewer?.occupation}</h6>
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
  );
};

export default Review;
