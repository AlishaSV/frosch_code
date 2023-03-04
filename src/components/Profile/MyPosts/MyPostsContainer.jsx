import React from 'react'
import MyPosts from './MyPosts'
import {
  addPostActionCreator,
  changePostInputActionCreator,
  deletePostByIdActionCreator
} from '../../../redux/profile-reducer'

const MyPostsContainer = ({ postsData, dispatch }) => {
  const changePostInput = (postInput) => {
    dispatch(changePostInputActionCreator(postInput))
  }
  const deletePostById = (id) => {
    dispatch(deletePostByIdActionCreator(id))
  }
  const addPost = () => {
    dispatch(addPostActionCreator())
  }
  return (
    <MyPosts postsData={postsData} changePostInput={changePostInput} deletePostById={deletePostById} addPost={addPost}/>
  )
}

export default MyPostsContainer