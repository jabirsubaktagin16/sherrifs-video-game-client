import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useUserDetails from "./../../CustomHook/useUserDetails";
import auth from "./../../firebase.init";

const FavouriteGames = () => {
  const [user] = useAuthState(auth);
  const currentEmail = user?.email;

  const [currentUser] = useUserDetails(currentEmail);
  return (
    <div>
      <h2 className="text-center">Favourite Games</h2>
      <p>
        {!currentUser.favouriteGames && (
          <span>Looks like you haven't add your favourite games</span>
        )}
        {currentUser.favouriteGames && (
          <span>{currentUser.favouriteGames}</span>
        )}
      </p>
    </div>
  );
};

export default FavouriteGames;
