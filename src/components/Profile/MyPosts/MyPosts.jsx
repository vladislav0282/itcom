import React from "react";
import Post from "./Post/Post";
import classes from'./MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={classes.postBlock}>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div>
          <div 
             className={classes.posts}>
               <Post message='Hi how are you' likesCount='0'/>
               <Post message='It is my thirst post' likesCount="23"/>
             
          </div>
        </div>  
    )
}

export default MyPosts;