import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div>
      <div>
        <img className={s.img} alt={'myPosts'}
             src="https://images.unsplash.com/photo-1625126334963-67846ed79c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  )
}

export default Profile