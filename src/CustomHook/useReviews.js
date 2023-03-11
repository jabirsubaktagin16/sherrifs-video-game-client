import { useQuery } from "react-query";

const useReviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://sherrifs-video-game-server.onrender.com/reviews").then((res) =>
      res.json()
    )
  );

  return { reviews, isLoading };
};

export default useReviews;
