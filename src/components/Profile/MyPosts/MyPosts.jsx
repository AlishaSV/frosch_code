import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ postsData, addPost, deletePost, changePostInput }) => {

  return (
    <div className={s.posts}>
      <h4>My posts</h4>
      <div>
        <textarea
          onChange={(event) => {
            changePostInput(event.target.value)
          }}
          value={postsData.postInput}
        />
        <div>
          <button onClick={() => {
            addPost()
          }}>Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>
        <div>
          {postsData.posts.map((post, index) => <Post key={index} {...post} deletePost={deletePost}/>)}
        </div>
      </div>
    </div>
  )
}

export default MyPosts