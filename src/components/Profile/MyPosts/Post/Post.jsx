import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img alt={'post'}
           src="https://img.icons8.com/doodle/512/gender-neutral-user.png"/>
      {props.message}
      <div>
        {props.likes} likes
      </div>
    </div>
  )
}

export default Post