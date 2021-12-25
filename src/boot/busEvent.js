import emitter from 'tiny-emitter/instance'

export default ({app}) => {
  app.config.globalProperties.$event = {
    $on: (...args) => emitter.on(...args),
    $once: (...args) => emitter.once(...args),
    $off: (...args) => emitter.off(...args),
    $emit: (...args) => emitter.emit(...args)
  }
  app.provide('$event', app.config.globalProperties.$event)
}