import React from 'react'
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext'
import {
  addPostActionCreator,
  changePostInputActionCreator,
  deletePostByIdActionCreator
} from '../../../redux/profile-reducer'

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const { dispatch, getState } = store

          const { profilePage } = getState()
          
          const changePostInput = (postInput) => {
            dispatch(changePostInputActionCreator(postInput))
          }
          const deletePostById = (id) => {
            dispatch(deletePostByIdActionCreator(id))
          }
          const addPost = () => {
            dispatch(addPostActionCreator())
          }
          return <MyPosts postsData={profilePage.postsData} changePostInput={changePostInput}
                          deletePostById={deletePostById}
                          addPost={addPost}/>
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer