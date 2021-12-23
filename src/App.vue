<template>
  <router-view />
  <system-alert />
</template>
<script>
import { defineComponent } from 'vue';
import systemAlert from './components/system/alert.vue'

export default defineComponent({
  name: 'App',
  components: {
    systemAlert
  }
  // preFetch({store}) {
  //   return store.dispatch('news/getNewsByLimit', { limit: 10, page: 1 })
  // },
})
</script>
