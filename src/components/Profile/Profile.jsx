import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({ postsData, dispatch }) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer postsData={postsData} dispatch={dispatch}/>
    </div>
  )
}

export default Profile