class News {
  constructor ({ _id, images, title, introText, fullText, date, views }) {
    this.id = _id
    this.images = images
    this.title = title
    this.introText = introText
    this.fullText = fullText
    this.date = new Date(date).toLocaleDateString("RU")
    this.createdAt = date
    this.views = views
  }
}

const apiUrl = 'http://188.93.210.205:3000/'

export function setNews(state, props) {
  state.currentPage = props.page
  state.nextPage = props.nextPage
  state.prevPage = props.prevPage
  props.docs.map(v => {
    if (v.images.length > 0) {
      v.images.map(i => i.path = apiUrl+i.path)
      state.news.push(new News(v))
    } else {
      state.news.push(new News(v))
    }
  })
}