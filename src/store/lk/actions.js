import { api } from 'boot/axios'
import cookie from 'boot/cookie'

export const login = async ({commit}, payload) => {
  try {
   const res = await api.post('user/login', {
      user: payload
    })
    commit('SET_USER', res.data.user)
    cookie.setCookie('user', JSON.stringify(res.data.user))
  } catch (err) {
    const error = err.message.split(' ')
    if (error.includes('422')) {
      throw new Error('Пользователь не найден')
    }
    throw err
  }
}

export const checkUser = ({commit}) => {
  const user = cookie.getCookie('user')
  if (user) {
    commit('SET_USER', user)
  }
}

export const publish = async ({commit, getters}, formData) => {
  try {
    const user = getters.getUser

    const res = await api.post('/news', formData, {
      headers: {
        'Authorization': `Token ${user.accessToken.token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(res.data)
  } catch (err) {
    throw err
  }
}
