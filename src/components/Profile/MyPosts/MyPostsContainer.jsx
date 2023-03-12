import React from 'react'
import MyPosts from './MyPosts'
import {
  addPostActionCreator,
  changePostInputActionCreator,
  deletePostByIdActionCreator
} from '../../../redux/profile-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  const { postsData } = state.profilePage
  return {
    postsData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changePostInput: (postInput) => {dispatch(changePostInputActionCreator(postInput))},
    deletePostById: (id) => {dispatch(deletePostByIdActionCreator(id))},
    addPost: () => {dispatch(addPostActionCreator())}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer