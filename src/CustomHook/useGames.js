import { useQuery } from "react-query";

const useGames = () => {
  const { data: games, isLoading } = useQuery("games", () =>
    fetch("http://localhost:5000/games").then((res) => res.json())
  );

  return { games, isLoading };
};

export default useGames;
