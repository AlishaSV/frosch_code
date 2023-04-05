import { authAxiosInstance, axiosInstance } from '../axios'

export const getUsers = (currentPage, pageSize) => {
  return axiosInstance.get(`/users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)
}

export const getUserProfile = (userId) => {
  return axiosInstance.get(`profile/` + userId)
  .then(response => response.data)
}

export const followUser = (userId) => {
  return authAxiosInstance.post(`follow/${userId}`)
}

export const unfollowUser = (userId) => {
  return authAxiosInstance.delete(`follow/${userId}`)
}

export const authMe = () => {
  return axiosInstance.get(`auth/me`, {
    withCredentials: true
  })
}

