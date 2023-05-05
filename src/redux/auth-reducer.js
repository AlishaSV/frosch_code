import { initAuthData } from './auth/initAuthData'
import { authMe, loginToApp } from '../api/api'

let SET_USER_DATA = 'SET_USER_DATA'
let LOGIN_TO_APP = 'LOGIN_TO_APP'

const authReducer = (authData = initAuthData, action) => {
  const newAuthData = { ...authData }
  switch (action.type) {
    case SET_USER_DATA:
      newAuthData.authData = { ...action.data, isAuth: true }
      break
    case LOGIN_TO_APP:
      newAuthData.authData = { ...action.data, isLoggedIn: true }
      break
    default:
      return newAuthData
  }
  return newAuthData
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const setLoginToApp = (email, password, rememberMe) => ({
  type: LOGIN_TO_APP,
  data: { email, password, rememberMe }
})

export const getAuthUserData = () => {
  return dispatch => {
    authMe()
    .then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login))
      }
    })
  }
}

export const loginToAppTC = () => {
  return dispatch => {
    loginToApp()
    .then(response => {
      if (response.data.resultCode === 0) {
        let { email, password, rememberMe } = response.data.data
        dispatch(setLoginToApp(email, password, rememberMe))
      }
    })
  }
}

export default authReducer