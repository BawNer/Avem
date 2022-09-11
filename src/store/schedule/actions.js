import { api } from 'src/boot/axios'

const getSchedule = async (ctx, params) => {
  try {
    const { data: { schedule } } = await api.get('/schedule', { params })
    ctx.commit('SET_SCHEDULE', schedule)
  } catch (error) {
    throw new Error(error)
  }
}

const getCurrentSchema = async (ctx, group) => {
  try {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const {data: {schedule: {schema}}} = await api.get(`/schedule?group=${group}&date=${year}-${month}-${day}`)
    return schema
    return
  } catch (error) {
    throw new Error(error)
  }
}

export { getSchedule, getCurrentSchema }
