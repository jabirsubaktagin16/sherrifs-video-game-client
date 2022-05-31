import React from "react";
import Footer from "../Shared/Footer/Footer";
import Loading from "../Shared/Loading/Loading";
import useGames from "./../../CustomHook/useGames";
import Game from "./Game/Game";

const Games = () => {
  const { games, isLoading } = useGames();

  if (isLoading) return <Loading />;

  return (
    <>
      <section className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-4">
          {games.map((game) => (
            <Game key={game._id} game={game} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Games;
