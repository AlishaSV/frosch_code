import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ postsData }) => {

  return (
    <div className={s.posts}>
      <h4>My posts</h4>
      <div>
        <textarea
          onChange={(event) => {
            postsData.changePostInput(event.target.value)
          }}
          value={postsData.postInput}
        />
        <div>
          <button onClick={() => {
            postsData.addPost()
          }}>Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>
        <div>
          {postsData.posts.map((post, index) => <Post key={index} {...post}
                                                      deletePost={postsData.deletePostById.bind(postsData)}/>)}
        </div>
      </div>
    </div>
  )
}

export default MyPosts