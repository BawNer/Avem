<template>
  <notification />
  <router-view />
</template>
<script>
import Notification from './components/system/Notification.vue'
import {  mapActions } from 'vuex'

export default ({
  name: 'App',
  components: {
    Notification
  },
  setup() {
    return {
      ...mapActions(['setNotification', 'clearNotification'])
    }
  },
  mounted() {
    this.$event.$on('clear-notification', props => this.clearNotification(props))
    this.$event.$on('set-notification', props => this.setNotification(props))
  }
  // preFetch({store}) {
  //   return store.dispatch('news/getNewsByLimit', { limit: 10, page: 1 })
  // },
})
</script>
