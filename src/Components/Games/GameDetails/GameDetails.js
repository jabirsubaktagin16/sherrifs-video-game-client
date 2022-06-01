import React from "react";
import { useParams } from "react-router-dom";
import BuyNowBtn from "../../Shared/BuyNowBtn/BuyNowBtn";
import Footer from "../../Shared/Footer/Footer";
import useGameDetails from "./../../../CustomHook/useGameDetails";
import GameBanner from "./GameBanner/GameBanner";
import "./GameDetails.css";

const GameDetails = () => {
  const { id } = useParams();
  const [game] = useGameDetails(id);

  const { _id, name, img, price, category, description } = game;

  return (
    <>
      <GameBanner game={game} />
      <div className="container my-5">
        <div className="row d-flex align-items-center">
          <div className="col-lg-8">
            <p>{description}</p>
          </div>
          <div className="col-lg-4">
            <div className="price-card">
              <h1 className="text-center">{name}</h1>
              <h6 className="text-center">{category}</h6>
              <div>
                <img src={img} className="img-fluid w-100" alt="..." />
              </div>

              <div className="d-flex red-text justify-content-between my-3">
                <h5>Price</h5>
                <h5>${price}</h5>
              </div>
              <BuyNowBtn id={_id} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GameDetails;
