import {
  followingInProgress,
  followOrUnfollow,
  initUsersPage,
  setCurrentPage as originSetCurrentPage,
  setToggleIsFetching,
  setTotalUsersCount as originSetTotalUsersCount,
  setUsers as originSetUsers
} from './usersPage/initUsersPage'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
      newUsersPage.usersData = originSetUsers(newUsersPage.usersData, action.value)
      break
    }
    case SET_CURRENT_PAGE: {
      newUsersPage.usersData = originSetCurrentPage(newUsersPage.usersData, action.value)
      break
    }
    case SET_TOTAL_USERS_COUNT: {
      newUsersPage.usersData = originSetTotalUsersCount(newUsersPage.usersData, action.value)
      break
    }
    case TOGGLE_IS_FETCHING: {
      newUsersPage.usersData = setToggleIsFetching(newUsersPage.usersData, action.value)
      break
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      newUsersPage.usersData = followingInProgress(newUsersPage.usersData, action.isFetching, action.userId)
      break
    }
    default: {
      break
    }
  }
  return newUsersPage
}

export const follow = (userId) => ({ type: FOLLOW, value: userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, value: userId })
export const setUsers = (users) => ({ type: SET_USERS, value: users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, value: currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, value: totalUsersCount })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, value: isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})

export default usersReducer