import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ postsData, addPost, deletePost }) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postsData={postsData} addPost={addPost} deletePost={deletePost}/>
    </div>
  )
}

export default Profile