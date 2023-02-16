import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ postsData, addPost, deletePost }) => {
  let newPost = React.createRef()
  let handlerAddPost = () => {
    let text = newPost.current.value
    addPost(text)
  }
  return (
    <div className={s.posts}>
      <h4>My posts</h4>
      <div>
        <textarea ref={newPost}></textarea>
        <div>
          <button onClick={handlerAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <div>
          {postsData.map((post, index) => <Post key={index} {...post} deletePost={deletePost}/>)}
        </div>
      </div>
    </div>
  )
}

export default MyPosts