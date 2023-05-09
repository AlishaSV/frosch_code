import {
  addPost,
  changePostInput,
  deletePostById,
  initProfilePage,
  setStatus as originSetStatus,
  setUserProfile as originSetUserProfile
} from './profilePage/initProfilePage'
import { getStatus, getUserProfile, updateStatus } from '../api/api'

let ADD_POST = 'ADD-POST'
let DELETE_POST = 'DELETE-POST'
let CHANGE_POST_INPUT = 'CHANGE-POST-INPUT'
let SET_USER_PROFILE = 'SET-USER-PROFILE'
let SET_STATUS = 'SET-STATUS'

const profileReducer = (profilePage = initProfilePage, action) => {
  const newProfilePage = { ...profilePage }
  switch (action.type) {
    case ADD_POST: {
      newProfilePage.postsData = addPost(action.value, profilePage.postsData)
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
    case SET_STATUS: {
      newProfilePage.postsData = originSetStatus(action.value, profilePage.postsData)
      break
    }
    default: {
      break
    }
  }

  return newProfilePage
}

export const addPostActionCreator = (postInput) => ({ type: ADD_POST, value: postInput })
export const deletePostByIdActionCreator = (id) => ({ type: DELETE_POST, value: id })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, value: profile })
export const setStatus = (status) => ({ type: SET_STATUS, value: status })

export const getUserProfileTC = (userId) => {
  return dispatch => {
    getUserProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data))
    })
  }
}

export const getStatusTC = (userId) => {
  return dispatch => {
    getStatus(userId)
    .then(response => {
      if (response?.data) {
        dispatch(setStatus(response.data))
      }
    })
  }
}

export const updateStatusTC = (status) => {
  return dispatch => {
    updateStatus(status).then(response => {
      if (response?.data?.resultCode === 0)
        dispatch(setStatus(status))
    })
  }
}

export default profileReducer