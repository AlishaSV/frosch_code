import { axiosInstance } from '../axios'

export const getUsers = (currentPage, pageSize) => {
  return axiosInstance.get(`/users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)
}

export const getUserProfile = (userId) => {
  return axiosInstance.get(`profile/` + userId)
  .then(response => response.data)
}

