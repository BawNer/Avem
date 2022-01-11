import axios from "axios";

class News {
  constructor ({ id, preview, image, title, annotation, content, options }) {
    this.id = id
    this.preview = preview
    this.image = image
    this.title = title
    this.annotation = annotation
    this.content = content
    this.options = options
  }
}

/* 
***********************without api************************
*/

export const fetchAllNews = async context => {
  if (context.getters.getNews().length === 0) {
    const { data: { data } } = await axios.get('/json/news.json')
    const news = data.map(element => new News(element))
    context.commit('SET_NEWS', news)
  }
}


/*******************************************************/
