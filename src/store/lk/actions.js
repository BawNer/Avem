import { api } from 'boot/axios'
import cookie from 'boot/cookie'

export const login = async ({commit}, payload) => {
  try {
   const res = await api.post('user/login', {
      user: payload
    })
    cookie.setCookie('user', JSON.stringify(res.data.user))
    commit('SET_USER', res.data.user)
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

export const deleteNews = async ({getters}, id) => {
  try {
    const token = getters.getUser.accessToken.token
    await api.delete(`/news/${id}`, {
      headers: {
        'Authorization': `Token ${token}`
      }
    })
  } catch (err) {
    throw err
  }
}

export const publish = async ({getters}, formData) => {
  try {
    const user = getters.getUser

    const res = await api.post('/news', formData, {
      headers: {
        'Authorization': `Token ${user.accessToken.token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
  } catch (err) {
    throw err
  }
}
