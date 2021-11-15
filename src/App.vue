<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  preFetch({store}) {
    return store.dispatch('news/getNewsByLimit', { limit: 10, page: 1 })
  },
})
</script>
