import React from 'react'
import s from './Message.module.css'

const Message = ({ message, avatar, id }) => {
  return (
    <div className={s.dialogsWrapper}>
      {avatar ?
        <img className={s.avatar} alt={id} src={avatar}/> : null}
      <div className={s.message}>{message}</div>
    </div>
  )
}

export default Message