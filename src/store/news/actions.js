import { api } from 'src/boot/axios'

class News {
  constructor ({ id, preview, photos, title, annonce, content, createdAt, author }) {
    this.id = id
    this.preview = preview
    this.image = photos
    this.title = title
    this.annonce = annonce
    this.content = content
    this.publishedAt = createdAt
    this.author = author
  }
}

export const fetchAllNews = async context => {
  if (context.getters.getNews.length === 0) {
    const { data: { news } } = await api.get('news?limit=10')
    const newsList = news.map(element => {
      const date = new Date(element.createdAt)
      element.createdAt = date.toLocaleDateString("ru")
      return new News(element)
    })
    context.commit('SET_NEWS', newsList)
  }
}
