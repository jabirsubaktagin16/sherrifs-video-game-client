import React from "react";
import useGames from "./../../CustomHook/useGames";
import Game from "./../Games/Game/Game";
import Loading from "./../Shared/Loading/Loading";

const HomeGames = () => {
  const { games, isLoading } = useGames();

  if (isLoading) return <Loading />;

  return (
    <section className="container">
      <h1 className="text-center">Our Top Games</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-4">
        {games.slice(0, 3).map((game) => (
          <Game key={game._id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default HomeGames;
