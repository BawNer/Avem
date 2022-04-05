<template>
  <router-view />
</template>
<script>
import { useStore } from 'vuex'
import { onMounted } from 'vue'

export default ({
  name: 'App',
  setup() {
    const $store = useStore()

    onMounted(() => {
      $store.dispatch('checkUser')
      $store.dispatch('fetchAllNews')
    })
  }
  // preFetch({store}) {
  //   return store.dispatch('news/getNewsByLimit', { limit: 10, page: 1 })
  // },
})
</script>
