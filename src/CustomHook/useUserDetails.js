import { useEffect, useState } from "react";

const useUserDetails = (email) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, [email]);

  return [currentUser, setCurrentUser];
};

export default useUserDetails;
