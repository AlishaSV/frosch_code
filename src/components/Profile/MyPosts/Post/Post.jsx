import React from 'react'
import s from './Post.module.css'

const Post = ({ message, likes, id, deletePost }) => {
  return (
    <div className={s.item}>
      <button onClick={() => {deletePost(id)}}>delete</button>
      <img alt={'post'}
           src="https://img.icons8.com/doodle/512/gender-neutral-user.png"/>
      {message}
      <div>
        {likes} likes
      </div>
    </div>
  )
}

export default Post