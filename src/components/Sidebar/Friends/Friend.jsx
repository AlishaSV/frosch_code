import React from 'react'
import s from './Friend.module.css'

const Friend = ({ id, name, avatar }) => {
  return (
    <div>
      <img className={s.avatar} alt={'post'}
           src={avatar}/>
    </div>
  )
}

export default Friend