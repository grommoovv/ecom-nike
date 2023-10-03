import axios from 'axios'

const __API__ = process.env.REACT_APP_API as string

const $axios = axios.create({
  baseURL: __API__,
  headers: {
    'Content-Type': 'application/json',
  },
})

export { $axios }
