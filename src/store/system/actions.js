export const setSystemMessage = (ctx, {active, message}) => {
  console.log(message)
  ctx.commit('setSystemMessage', {active, message})
}