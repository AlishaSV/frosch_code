import React from 'react'
import s from './Message.module.css'

const Message = ({ message, avatar, id }) => {
  return (
    <div className={s.dialogsWrapper}>
      <img className={s.avatar} alt={id} src={avatar}/>
      <div className={s.message}>{message}</div>
    </div>
  )
}

export default Message