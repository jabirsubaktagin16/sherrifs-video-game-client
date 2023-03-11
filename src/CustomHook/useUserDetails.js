import { useEffect, useState } from "react";

const useUserDetails = (email) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch(`https://sherrifs-video-game-server.onrender.com/user/${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, [email]);

  return [currentUser, setCurrentUser];
};

export default useUserDetails;
