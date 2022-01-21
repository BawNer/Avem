export const setNotification = (ctx, message = '') => {
  const id = Math.random() * 5596
  ctx.commit('setNotification', {message, id })
}

export const clearNotification = (ctx, id) => ctx.commit('clearNotification', id)