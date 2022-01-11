<template>
  <div class="row">
    <div class="col-12">
      <news
        v-for="n in news"
        :key="n.id"
        :preview="n.preview"
        :images="n.image"
        :options="n.options"
        :publishedAt="n.publishedAt"
      >
        <template v-slot:title>{{n.title}}</template>
        <template v-slot:annotation>{{n.annotation}}</template>
        <template v-slot:content>{{n.content}}</template>
      </news>
    </div>
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
      onMounted(() => store.dispatch('fetchAllNews'))

      const news = computed(() => store.getters.getNews())
      return {
        news
      }
    },
  }

</script>
