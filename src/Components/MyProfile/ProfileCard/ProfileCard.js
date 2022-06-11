import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import useUserDetails from "./../../../CustomHook/useUserDetails";
import auth from "./../../../firebase.init";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  const [user] = useAuthState(auth);

  const currentEmail = user?.email;

  const [currentUser] = useUserDetails(currentEmail);

  const navigate = useNavigate();

  const { _id, img, name, occupation, contactNo, favouriteGames } = currentUser;

  const handleUpdateProfile = (id) => navigate(`/updateProfile/${id}`);

  return (
    <>
      <div className={styles.profileCard3}>
        <div className={styles.backgroundBlock}>
          <img
            src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="profile-sample1"
            className={styles.background}
          />
        </div>
        <div className="profileThumbBlock">
          <img src={img} alt="profileImage" className={styles.profile} />
        </div>
        <div className={styles.cardContent}>
          <h2>
            {!name && <span>{user?.displayName}</span>}
            {name && <span>{name}</span>}
            <small>
              {!occupation && (
                <span className="text-danger">
                  You have not added occupation yet
                </span>
              )}
            </small>
          </h2>
          <button
            onClick={() => handleUpdateProfile(_id)}
            className={styles.editBtn}
          >
            Edit Your Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
