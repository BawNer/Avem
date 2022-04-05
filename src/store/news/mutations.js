export const SET_NEWS = (state, props) => state.news = props

export const DELETE_NEWS = (state, id) => state.news = state.news.filter(n => n.id !== id)