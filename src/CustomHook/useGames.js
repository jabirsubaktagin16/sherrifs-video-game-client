import { useQuery } from "react-query";

const useGames = () => {
  const { data: games, isLoading } = useQuery("games", () =>
    fetch("https://pure-plains-35264.herokuapp.com/games").then((res) =>
      res.json()
    )
  );

  return { games, isLoading };
};

export default useGames;
