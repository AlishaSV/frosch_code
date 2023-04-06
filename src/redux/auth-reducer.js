import { initAuthData } from './auth/initAuthData'
import { authMe } from '../api/api'

let SET_USER_DATA = 'SET_USER_DATA'

const authReducer = (authData = initAuthData, action) => {
  const newAuthData = { ...authData }
  switch (action.type) {
    case SET_USER_DATA:
      newAuthData.authData = { ...action.data, isAuth: true }
      break
    default:
      return newAuthData
  }
  return newAuthData
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

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

export default authReducer