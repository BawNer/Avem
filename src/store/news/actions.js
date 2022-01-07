import { HttpClient } from "../helper";

class News {
  #emplUserPublished = [
    { id: 0, name: 'System' },
    { id: 1, name: 'СКФ МТУСИ' }
  ]
  constructor ({ id, title, annotation, content, preview, image, createdBy, publishedBy, publishAt, tags, visible }) {
    this.id = id
    this.title = title
    this.annotation = annotation
    this.content = content
    this.preview = preview
    this.image = image
    this.createdBy = this.#emplUserPublished.filter(a => a.id === createdBy).shift()
    this.publishedBy = this.#emplUserPublished.filter(a => a.id === publishedBy).shift()
    this.publishAt = publishAt
    this.tags = tags
    this.visible = visible
  }
}

/* 
***********************without api************************
*/

const client = new HttpClient()

export const fetchAllNews = async context => {
  if ( context.getters.getAllNews.length == 0 ) {
    const response = await client.get('http://localhost:8080/json/news.json')
    const news = response.data.map(element => new News(element))
    context.commit('SET_NEWS', news)
  }
}


/*******************************************************/
