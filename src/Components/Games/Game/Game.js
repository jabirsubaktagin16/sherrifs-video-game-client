import React from "react";
import styles from "./Game.module.css";

const Game = ({ game }) => {
  const { name, img, price, description, category } = game;
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
          {/* <h6 className="text-center occupation">{category}</h6> */}
          <p className="card-text text-center">
            {description.slice(0, 100)}...Read More
          </p>
          <button className={styles.buyNow} type="button">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
