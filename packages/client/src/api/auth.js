import axios from 'axios'
import {
  setLoginTokens,
  saveUser,
  loginCallback,
  logout,
} from '../auth/authService'

class LoginError extends Error {
  constructor (message) {
    super(message)
    this.name = 'LoginError'
    this.message = message
  }
}

const api = {
  login: async (email, password) => {
    try {
      const res = await axios.post('/api/auth/local', { email, password })
      setLoginTokens(res.data.token)
      saveUser(res.data.id)
      if (loginCallback) {
        loginCallback(res.data.id)
      }
      return res.data
    } catch (err) {
      throw new LoginError('Unsuccessful login')
    }
  },
  logout: async () => {
    try {
      const res = await axios.post('/api/auth/logout')
      window.localStorage.clear()
      logout()
      return res.data
    } catch (err) {
      return err
    }
  },
  verify: async (userAttributes) => {
    try {
      const res = await axios.post('/api/auth/verify', userAttributes)
      return res.data
    } catch (err) {
      return err
    }
  },
  forgot: async (userAttributes) => {
    try {
      const res = await axios.post('/api/auth/forgot', userAttributes)
      return res.data
    } catch (err) {
      return err
    }
  },
  checkToken: async () => {
    try {
      const res = await axios.get('/api/auth/checkToken')
      saveUser(res.data.id)
      if (loginCallback) {
        loginCallback(res.data.id)
      }
      return res.data
    } catch (err) {
      window.localStorage.clear()
      return err
    }
  },
}
export default api
