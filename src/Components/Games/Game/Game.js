import React from "react";
import gta5 from "../../../images/games/gta5.jpg";
import styles from "./Game.module.css";

const Game = () => {
  return (
    <div className="col">
      <div className={styles.card}>
        <div className="text-center">
          <img src={gta5} className="img-fluid" alt="..." />
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center" style={{ color: "#E63946" }}>
            Lorem, ipsum.
          </h5>
          <h6 className="text-center occupation">
            Lorem ipsum dolor sit amet.
          </h6>
          <div className="text-center">
            {/* <Rating
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            /> */}
          </div>
          <p className="card-text text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nihil tempore provident maxime corporis deserunt
            excepturi ea velit, ipsam esse eum suscipit perferendis nemo alias
            quis officiis sit illum nostrum. Magni corrupti ipsum dolor
            accusantium. Hic aliquid facere placeat?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
