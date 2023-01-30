import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
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
          <Post message={'hi how are you'} likes={15}/>
          <Post message={'it is my first post'} likes={20}/>
        </div>
      </div>
    </div>
  )
}

export default MyPosts