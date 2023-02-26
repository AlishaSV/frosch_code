import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ postsData, changePostInput, deletePostById, addPost }) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts postsData={postsData} changePostInput={changePostInput} deletePostById={deletePostById}
               addPost={addPost}/>
    </div>
  )
}

export default Profile