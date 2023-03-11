import { useQuery } from "react-query";

const useGames = () => {
  const { data: games, isLoading } = useQuery("games", () =>
    fetch("https://sherrifs-video-game-server.onrender.com/games").then((res) =>
      res.json()
    )
  );

  return { games, isLoading };
};

export default useGames;
