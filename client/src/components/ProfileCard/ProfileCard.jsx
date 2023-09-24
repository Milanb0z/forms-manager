import React from "react";

import classes from "./ProfileCard.module.scss";

const ProfileCard = ({ imgUrl, username, email }) => {
  return (
    <div className={classes.profile}>
      {imgUrl ? (
        <img
          src={imgUrl}
          alt={username || "Profile Picture"}
          className={classes.profile_img}
        />
      ) : null}

      <div className={classes.profile_details}>
        <h4>{username}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
