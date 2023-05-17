import { authAxiosInstance, axiosInstance } from '../axios'

export const getUsers = (currentPage, pageSize) => {
  return axiosInstance.get(`/users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)
}

export const getUserProfile = (userId) => {
  return axiosInstance.get(`profile/` + userId)
  .then(response => response.data)
}

export const getStatus = (userId) => {
  return axiosInstance.get(`profile/status/` + userId)
}

export const updateStatus = (status) => {
  return axiosInstance.put(`profile/status/`, { status })
}

export const followUser = (userId) => {
  return authAxiosInstance.post(`follow/${userId}`)
}

export const unfollowUser = (userId) => {
  return authAxiosInstance.delete(`follow/${userId}`)
}

export const authMe = () => {
  return axiosInstance.get(`auth/me`)
}

export const loginToApp = (email, password, rememberMe = false) => {
  return axiosInstance.post(`auth/login`, { email, password, rememberMe })
}

export const logout = () => {
  return axiosInstance.delete(`auth/login`)
}






