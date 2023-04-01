import axios from 'axios'

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL
})

export const authAxiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY
  }
})