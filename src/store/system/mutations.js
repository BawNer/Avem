export const setNotification = (state, props) => state.notifications.push(props)

export const clearNotification = (state, props) => {
  const _notifications = state.notifications
  state.notifications = _notifications.filter(a => a.id !== props)
}