import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ postsData }) => {

  return (
    <div className={s.posts}>
      <h4>My posts</h4>
      <div>
        <textarea></textarea>
        <div>
          <button>Add button</button>
        </div>
      </div>
      <div className={s.posts}>
        <div>
          {postsData.map((posts, index) => <Post key={index} message={posts.message} likes={posts.likes}/>)}
        </div>
      </div>
    </div>
  )
}

export default MyPosts