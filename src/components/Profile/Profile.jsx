import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ postsData, addPost, deletePost, changePostInput }) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postsData={postsData} addPost={addPost} deletePost={deletePost} changePostInput={changePostInput}/>
    </div>
  )
}

export default Profile