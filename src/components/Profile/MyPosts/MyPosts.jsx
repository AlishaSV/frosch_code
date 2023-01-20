import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
          my posts
          <div>
            <textarea></textarea>
              <button>Add button</button>
          </div>
            <div className={s.posts}>
          <div>
              <Post />
            <div>
              post 2
            </div>
          </div>
        </div>
        </div>
    )
}

export default MyPosts;