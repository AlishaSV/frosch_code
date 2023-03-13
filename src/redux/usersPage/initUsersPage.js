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