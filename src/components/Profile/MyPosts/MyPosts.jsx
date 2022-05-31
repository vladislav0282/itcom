import React from "react";
import Post from "./Post/Post";
import classes from'./MyPosts.module.css'

const MyPosts = () => {
  let posts = [
    {id: 1, message: 'Hi how are you', likesCount: 12},
    {id: 2, message: 'It is my first post', likesCount: 11}, 
    {id: 3, message: 'Hi how are you', likesCount: 12},
    {id: 4, message: 'It is my first post', likesCount: 11}, 
    
  ]

let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )


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
               { postsElements }
             
          </div>
        </div>  
    )
}

export default MyPosts;