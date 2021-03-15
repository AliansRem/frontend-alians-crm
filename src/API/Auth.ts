import Axios from 'axios'
import { Credentials } from './types'


const authAPI = Axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL + 'auth/',
  responseType: 'json'
})

const signIn = async (credentials: Credentials) => authAPI
  .post<{ token: string }>('/', credentials)
  .then(res => res.data)

const saveToken = (token: string) => localStorage.setItem('token', token)

const getToken = () => localStorage.getItem('token')

const signOut = () => localStorage.removeItem('token')

export {
  signIn,
  saveToken,
  getToken,
  signOut
}
