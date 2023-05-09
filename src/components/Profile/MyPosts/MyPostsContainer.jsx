import MyPosts from './MyPosts'
import { addPostActionCreator, deletePostByIdActionCreator } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  const { postsData } = state.profilePage
  return {
    postsData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    deletePostById: (id) => {dispatch(deletePostByIdActionCreator(id))},
    addPost: (postInput) => {
      const action = addPostActionCreator(postInput)
      dispatch(action)
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer