export const getNews = state => count => {
  if (typeof count !== 'undefined') {
    return state.news.slice(0, count)
  } else {
    return state.news.filter(a => a.id < 20)
  }
}