import { createSelector } from 'reselect'

const getUsersSelector = (state) => {
  return state.usersPage.usersData.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
  }
)

export const getPageSize = (state) => {
  return state.usersPage.usersData.pageSize
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.usersData.totalUsersCount
}

export const getCurrentPage = (state) => {
  return state.usersPage.usersData.currentPage
}

export const getIsFetching = (state) => {
  return state.usersPage.usersData.isFetching
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.usersData.followingInProgress
}

