export function getAllNews(state) {
  return {
    news: state.news,
    nextPage: state.nextPage,
    prevPage: state.prevPage,
    currentPage: state.currentPage
  }
}

export const getNewsByCount = ({ news, nextPage, prevPage, currentPage }) => count => {
  return {
    news: [...news.filter((element, index) => { return ++index <= count ? element : false })].sort((a, b) => a.createdAt < b.createdAt),
    nextPage,
    prevPage,
    currentPage
  }
}