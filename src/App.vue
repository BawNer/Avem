<template>
  <notification />
  <router-view />
</template>
<script>
import Notification from './components/system/Notification.vue'
import {  useStore } from 'vuex'
import { onMounted } from 'vue'

export default ({
  name: 'App',
  components: {
    Notification
  },
  setup() {
    const $store = useStore()
    onMounted(() => {
      $store.dispatch('checkUser')
    })
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
