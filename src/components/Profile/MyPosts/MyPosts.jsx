import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ postsData, addPost }) => {
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
          {postsData.map((posts, index) => <Post key={index} message={posts.message} likes={posts.likes}/>)}
        </div>
      </div>
    </div>
  )
}

export default MyPosts