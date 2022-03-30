import axios from 'axios'

axios.defaults.responseType = 'json'

const API = axios.create({
  baseURL: process.env.REACT_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

API.interceptors.request.use(
  async config => {
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

API.interceptors.response.use(
  response => {
    return response?.data
  },
  error => {
    return Promise.reject(error.response)
  },
)

export { API }
