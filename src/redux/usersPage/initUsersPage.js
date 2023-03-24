import { usersData } from './data'

export const initUsersPage = {
  usersData: usersData
}

export const followOrUnfollow = (usersData, id, followOrUnfollow) => {
  const newUserData = { ...usersData }
  newUserData.users = [...usersData.users]
  newUserData.users.map((user) => {
    if (user.id === id) {
      user.followed = followOrUnfollow
    }
    return user
  })
  return newUserData
}

export const setUsers = (usersData, users) => {
  const newUserData = { ...usersData }
  newUserData.users = users

  return newUserData
}

export const setCurrentPage = (usersData, currentPage) => {
  const newUserData = { ...usersData }
  newUserData.currentPage = currentPage
  return newUserData
}

export const setTotalUsersCount = (usersData, totalCount) => {
  const newUserData = { ...usersData }
  newUserData.totalUsersCount = totalCount
  return newUserData
}