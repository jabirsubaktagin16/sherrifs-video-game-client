import { useQuery } from "react-query";

const useReviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://pure-plains-35264.herokuapp.com/reviews").then((res) =>
      res.json()
    )
  );

  return { reviews, isLoading };
};

export default useReviews;
