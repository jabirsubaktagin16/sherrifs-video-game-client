import { useEffect, useState } from "react";

const useGameDetails = (id) => {
  const [game, setGame] = useState({});
  useEffect(() => {
    const url = `https://pure-plains-35264.herokuapp.com/game/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGame(data));
  }, [id]);
  return [game, setGame];
};

export default useGameDetails;
