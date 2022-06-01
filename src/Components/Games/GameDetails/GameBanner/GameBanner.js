import React from "react";
import "./GameBanner.css";

const GameBanner = ({ game }) => {
  const { name, gameBanner } = game;
  return (
    <div
      className="big-image"
      style={{
        backgroundImage: `url(${gameBanner})`,
      }}
    >
      <div className="overlay">
        <h1>About {name}</h1>
      </div>
    </div>
  );
};

export default GameBanner;
