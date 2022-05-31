import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import useGameDetails from "./../../../CustomHook/useGameDetails";
import "./GameDetails.css";

const GameDetails = () => {
  const { id } = useParams();
  const [game] = useGameDetails(id);

  const { name, img, price, category, description } = game;

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <img src={img} className="img-fluid w-100" alt="..." />
          </div>
          <div className="col-lg-6">
            <h1>About {name}</h1>
            <h6>{category}</h6>
            <p>{description}</p>
            <div className="d-flex red-text justify-content-between">
              <h5>Price</h5>
              <h5>${price}</h5>
            </div>
            <div className="d-grid gap-2 d-md-block">
              <button className="buyNow" type="button">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GameDetails;
