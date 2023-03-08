import React from 'react'
import MyPosts from './MyPosts'
import {
  addPostActionCreator,
  changePostInputActionCreator,
  deletePostByIdActionCreator
} from '../../../redux/profile-reducer'
import { connect } from 'react-redux'
import { profilePage } from '../../../redux/profilePage/profilePage'

let mapStateToProps = () => {
  return {
    postsData: profilePage.postsData
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