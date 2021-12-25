export const setSystemMessage = (ctx, {active, message = ''}) => {
  ctx.commit('setSystemMessage', {active, message})
}