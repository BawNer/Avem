import {api as axios} from "src/boot/axios";

export async function getAllNews(context) {
  try {
    const news = await axios.get('news/all')
    context.commit('setNews', await news.data.result)
  } catch (err) {
    console.error('Error getAllNews', err)
  }
}

export async function getNewsByLimit(context, {limit=10, page=1}) {
  try {
    const news = await axios.get(`news?limit=${limit}&page=${page}`)
    const { result } = await news.data
    context.commit('setNews', result)
  } catch (err) {
    console.error('Error getNewsByLimit', err)
  }
}

