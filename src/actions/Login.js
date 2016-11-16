import { LOGIN } from './actionTypes'

function login(user) {
  return {
    type: LOGIN,
    user
  }
}
