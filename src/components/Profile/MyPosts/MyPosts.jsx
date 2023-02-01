import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hello frog', likes: 20 },
    { id: 2, message: 'I posted this', likes: 15 },
  ]
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
          <Post message={postsData[0].message} likes={postsData[0].likes}/>
          <Post message={postsData[1].message} likes={postsData[1].likes}/>
        </div>
      </div>
    </div>
  )
}

export default MyPosts