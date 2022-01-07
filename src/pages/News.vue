<template>
  <div class="row justify-center">
    <news
      v-for="n in news"
      :key="n.id"
      :preview="n.preview"
      :tags="n.tags"
    >
      <template v-slot:title>{{n.title}}</template>
      <template v-slot:caption>{{n.publishedBy.name}}, {{n.publishAt}}</template>
      <template v-slot:annotation>{{n.annotation}}</template>
    </news>
  </div>
</template>

<script>
  import {
    useStore 
  } from 'vuex'
  import { computed, onMounted } from 'vue'
  import News from '../components/News.vue'

  export default {
    components: {
      News
    },
    setup() {
      const store = useStore()

      onMounted(() => {
        store.dispatch('fetchAllNews')
      })
      const news = computed(() => store.getters.getAllNews)
      return {
        news
      }
    },
  }

</script>
