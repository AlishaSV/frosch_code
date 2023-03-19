import { followOrUnfollow, initUsersPage, setUsers } from './usersPage/initUsersPage'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const usersReducer = (usersPage = initUsersPage, action) => {
  const newUsersPage = { ...usersPage }
  switch (action.type) {
    case FOLLOW: {
      newUsersPage.usersData = followOrUnfollow(newUsersPage.usersData, action.value, true)
      break
    }
    case UNFOLLOW: {
      newUsersPage.usersData = followOrUnfollow(newUsersPage.usersData, action.value, false)
      break
    }
    case SET_USERS: {
      newUsersPage.usersData = setUsers(newUsersPage.usersData, action.value)
    }
    default: {

    }
  }
  return newUsersPage
}

export const followAC = (userId) => ({ type: FOLLOW, value: userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, value: userId })
export const setUsersAC = (users) => ({ type: SET_USERS, value: users })

export default usersReducer