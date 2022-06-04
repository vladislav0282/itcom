import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import { addPost } from './../../redax/state';

const Profile = (props) => {

  


  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts} addPost={props.addPost} />
    </div>
  );
};

export {Profile};
