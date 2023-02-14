import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ postsData, addPost }) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postsData={postsData} addPost={addPost}/>
    </div>
  )
}

export default Profile