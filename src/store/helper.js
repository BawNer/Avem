import axios from "axios";

class HttpClient {
  async get(url) {
    const request = await axios.get(url)
    return await request.data
  }
  post() {}
  put() {}
  delete() {}
}

export { HttpClient }