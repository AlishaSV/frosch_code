import {
  addPost,
  changePostInput,
  deletePostById,
  initProfilePage,
  setUserProfile as originSetUserProfile
} from './profilePage/initProfilePage'
import { getUserProfile } from '../api/api'

let ADD_POST = 'ADD-POST'
let DELETE_POST = 'DELETE-POST'
let CHANGE_POST_INPUT = 'CHANGE-POST-INPUT'
let SET_USER_PROFILE = 'SET-USER-PROFILE'

const profileReducer = (profilePage = initProfilePage, action) => {
  const newProfilePage = { ...profilePage }
  switch (action.type) {
    case ADD_POST: {
      newProfilePage.postsData = addPost(profilePage.postsData)
      break
    }
    case DELETE_POST: {
      newProfilePage.postsData = deletePostById(action.value, profilePage.postsData)
      break
    }
    case CHANGE_POST_INPUT: {
      newProfilePage.postsData = changePostInput(action.value, profilePage.postsData)
      break
    }
    case SET_USER_PROFILE: {
      newProfilePage.postsData = originSetUserProfile(action.value, profilePage.postsData)
      break
    }
    default: {
      break
    }
  }

  return newProfilePage
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const deletePostByIdActionCreator = (id) => ({ type: DELETE_POST, value: id })
export const changePostInputActionCreator = (postInput) => ({ type: CHANGE_POST_INPUT, value: postInput })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, value: profile })

export const getUserProfileTC = (userId) => {
  return dispatch => {
    getUserProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data))
    })
  }
}

export default profileReducer