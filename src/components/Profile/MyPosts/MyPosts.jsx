import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostsForm from './PostsForm'

const MyPosts = ({ postsData, deletePostById, addPost }) => {

  console.log('RENDER')
  return (
    <div className={s.posts}>
      <h4>My posts</h4>
      <div>
        <PostsForm addPost={addPost}/>
      </div>
      <div className={s.posts}>
        <div>
          {postsData.posts.map((post, index) => (
            <Post
              key={index}
              {...post}
              deletePost={deletePostById}/>)
          )}
        </div>
      </div>
    </div>
  )
}

export default MyPosts