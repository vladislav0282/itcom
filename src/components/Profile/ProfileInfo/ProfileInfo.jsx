import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div>
      <div>
          <img src="https://avatars.mds.yandex.net/i?id=3396af8138b8edf5e4a8b6afe91409cc-4316581-images-thumbs&n=13"
          alt="img"/>
      </div>
      <div className={classes.descriptionBlock}>
          ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
