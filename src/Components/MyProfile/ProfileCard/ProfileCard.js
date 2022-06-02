import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <div className={styles.profileCard3}>
      <div className={styles.backgroundBlock}>
        <img
          src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="profile-sample1"
          className={styles.background}
        />
      </div>
      <div className="profileThumbBlock">
        <img
          src="https://randomuser.me/api/portraits/men/41.jpg"
          alt="profileImage"
          className={styles.profile}
        />
      </div>
      <div className={styles.cardContent}>
        <h2>
          Justin Mccoy<small>Designer</small>
        </h2>
        <div className={styles.iconBlock}>
          <button className="btn">Edit Your Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
