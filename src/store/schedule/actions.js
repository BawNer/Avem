const { default: axios } = require("axios")

const getSchedule = async ctx => {
  try {
    const { data } = await axios.get('/schema.json')
    ctx.commit('SET_SCHEDULE', data)
  } catch (error) {
    throw new Error(error)
  }
}

export { getSchedule }