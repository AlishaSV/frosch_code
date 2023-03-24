import {
  followOrUnfollow,
  initUsersPage,
  setCurrentPage,
  setTotalUsersCount,
  setUsers
} from './usersPage/initUsersPage'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

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
      break
    }
    case SET_CURRENT_PAGE: {
      newUsersPage.usersData = setCurrentPage(newUsersPage.usersData, action.value)
      break
    }
    case SET_TOTAL_USERS_COUNT: {
      newUsersPage.usersData = setTotalUsersCount(newUsersPage.usersData, action.value)
    }
  }
  return newUsersPage
}

export const followAC = (userId) => ({ type: FOLLOW, value: userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, value: userId })
export const setUsersAC = (users) => ({ type: SET_USERS, value: users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, value: currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, value: totalUsersCount })

export default usersReducer