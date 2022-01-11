import axios from "axios";

class News {
  constructor ({ id, preview, image, title, annotation, content, options, publishedAt }) {
    this.id = id
    this.preview = preview
    this.image = image
    this.title = title
    this.annotation = annotation
    this.content = content
    this.options = options
    this.publishedAt = publishedAt
  }
}

/* 
***********************without api************************
*/

export const fetchAllNews = async context => {
  if (context.getters.getNews().length === 0) {
    const { data: { data } } = await axios.get('/json/news.json')
    const news = data.map(element => {
      const date = new Date(element.options.publishedAt)
      element.publishedAt = date.toLocaleDateString("ru")
      return new News(element)
    })
    context.commit('SET_NEWS', news)
  }
}


/*******************************************************/
