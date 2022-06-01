import React from "react";
import { Link } from "react-router-dom";
import BuyNowBtn from "../../Shared/BuyNowBtn/BuyNowBtn";
import styles from "./Game.module.css";

const Game = ({ game }) => {
  const { _id, name, img, price, description } = game;
  return (
    <div className="col">
      <div className={styles.card}>
        <div className="text-center">
          <img src={img} className="img-fluid" alt="..." />
        </div>

        <div className={styles.cardBody}>
          <h5 className="card-title text-center" style={{ color: "#E63946" }}>
            {name}
          </h5>
          <h4 className="text-center" style={{ fontSize: "2rem" }}>
            ${price}
          </h4>
          <p className="card-text text-center">
            {description.slice(0, 100)}{" "}
            <Link
              to={`/game/${_id}`}
              className="text-decoration-none"
              style={{ color: "#E63946" }}
            >
              ...Read More
            </Link>
          </p>
          <BuyNowBtn id={_id} />
        </div>
      </div>
    </div>
  );
};

export default Game;
