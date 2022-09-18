const baseURL = 'https://api.unsplash.com/'
import axios from 'axios'
import Swal from 'sweetalert2'


export const apiHelper = axios.create({
  baseURL,
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'center',
})