import React from "react";
import Game from "./Game/Game";

const Games = () => {
  return (
    <section className="container">
      <h1 className="text-center">Our Top Games</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-4">
        {/* Games List */}
        <Game />
        <Game />
        <Game />
      </div>
    </section>
  );
};

export default Games;
