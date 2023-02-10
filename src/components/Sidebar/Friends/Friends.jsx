import React from 'react'
import Friend from './Friend'
import s from '../Sidebar.module.css'

const Friends = ({ friends }) => {
  return (
    <div>
      <div className={s.appWrapperContent}>
        Friends
      </div>
      <div className={s.friendsWrapper}>
        {friends.map((friend, index) => <Friend key={index} {...friend}/>)}
      </div>
    </div>
  )
}

export default Friends