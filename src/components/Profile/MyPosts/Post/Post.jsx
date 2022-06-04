import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {

  

  return (
    <div className={classes.item}>
      <img
        src="https://avatars.mds.yandex.net/i?id=b61ae309ac765194b3db6cc1f508a868-4901575-images-thumbs&n=13"
        alt="avatar"
      />
      {props.messages}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
