import { api } from 'src/boot/axios'

const getSchedule = async ctx => {
  try {
    const { data } = await api.get('/schedule')

    ctx.commit('SET_SCHEDULE', data.schedule)
  } catch (error) {
    throw new Error(error)
  }
}

const getCurrentSchema = async (ctx, group) => {
  try {
    const {data: {schedule: {schema}}} = await api.get(`/schedule?group=${group}&date=today`)
    return schema[0].schema
  } catch (error) {
    throw new Error(error)
  }
}

export { getSchedule, getCurrentSchema }