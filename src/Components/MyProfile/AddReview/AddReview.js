import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import Rating from "react-rating";
import auth from "./../../../firebase.init";
import "./AddReview.css";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const reviewRef = useRef("");

  const [user] = useAuthState(auth);

  const handleReview = (event) => {
    event.preventDefault();
    const review = {
      email: user?.email,
      rating: parseFloat(rating),
      description: reviewRef.current.value,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("Your review was posted successfully");
          setRating(0);
          reviewRef.current.value = "";
        } else {
          toast.error("Failed to add your review");
        }
      });
  };

  return (
    <div className="my-5">
      <h2 className="text-center">Add A Review</h2>
      <div className="p-3 mt-3 text-center">
        <h6>Your Rating</h6>
        <Rating
          initialRating={rating}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
          }
          fractions={2}
          onClick={(rate) => setRating(rate)}
        />
      </div>
      <div className="p-3 mt-1">
        {/* Review Input Field */}
        <div>
          <div className="form-field d-flex align-items-center">
            <textarea
              ref={reviewRef}
              className="input input-bordered"
              placeholder="Add Your Review"
              id=""
              cols="30"
              rows="10"
            />
          </div>
        </div>

        <button onClick={handleReview} className="btn postBtn mt-3">
          Post
        </button>
      </div>
    </div>
  );
};

export default AddReview;
