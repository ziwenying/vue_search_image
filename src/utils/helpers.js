const baseURL = 'https://api.unsplash.com/'
import axios from 'axios'

export const apiHelper = axios.create({
  baseURL,
})