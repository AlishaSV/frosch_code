import { initAuthData } from './auth/initAuthData'
import { authMe, loginToApp, logout } from '../api/api'

let SET_USER_DATA = 'SET_USER_DATA'
let IS_LOADING = 'IS_LOADING'
let IS_NOT_LOGIN_AFTER_LOADING = 'IS_NOT_LOGIN_AFTER_LOADING'
let IS_NOT_LOGIN_AFTER_FORM = 'IS_NOT_LOGIN_AFTER_FORM'

const authReducer = (authData = initAuthData, action) => {
  const newAuthData = { ...authData }

  switch (action.type) {
    case IS_LOADING:
      newAuthData.authData = { ...newAuthData, isLoading: true }
      break
    case IS_NOT_LOGIN_AFTER_LOADING:
      newAuthData.authData = { ...action.data, isAuth: false, isLoading: false }
      break
    case IS_NOT_LOGIN_AFTER_FORM:
      newAuthData.authData = { ...action.data, isAuth: false, isLoading: false, isTriedToLogIn: true }
      break
    case SET_USER_DATA:
      newAuthData.authData = { ...action.data, isLoading: false }
      break
    default:
      return newAuthData
  }
  return newAuthData
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth }
})
export const setAuthUserInLoadingActionCreator = () => ({ type: IS_LOADING })
export const setAuthUserIsNotLoginAfterLoadingActionCreator = () => ({ type: IS_NOT_LOGIN_AFTER_LOADING })
export const setAuthUserIsNotLoginAfterFormActionCreator = () => ({ type: IS_NOT_LOGIN_AFTER_FORM })

export const getAuthUserData = () => {
  return dispatch => {
    dispatch(setAuthUserInLoadingActionCreator())
    authMe()
    .then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
      } else {
        dispatch(setAuthUserIsNotLoginAfterLoadingActionCreator())
      }
    })
  }
}

export const loginToAppTC = (email, password, rememberMe) => {
  return dispatch => {
    loginToApp(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {
        dispatch(setAuthUserIsNotLoginAfterFormActionCreator())
      }
    })
  }
}

export const logoutTC = () => {
  return dispatch => {
    logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
  }
}

export default authReducer