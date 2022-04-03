<template>
  <div class="row">
    <div class="col-12" v-if="news.length">
      <news-component
        v-for="n in news"
        :key="n.id"
        :newsId="n.id"
        :preview="n.preview"
        :images="n.image"
        :publishedAt="n.publishedAt"
        :author="n.author"
      >
        <template v-slot:title>{{n.title}}</template>
        <template v-slot:annotation>
          <div v-html="n.annonce" />
        </template>
        <template v-slot:content>
          <div v-html="n.content" />
        </template>
      </news-component>
    </div>
    <div v-else>
      Loading....
    </div>
  </div>
</template>

<script>
import {
  useStore 
} from 'vuex'
import { computed, onBeforeMount } from 'vue'
import NewsComponent from '../components/News.vue'

export default {
  components: {
    'news-component': NewsComponent
  },
  setup() {
    const $store = useStore()
    onBeforeMount(() => $store.dispatch('fetchAllNews'))

    const news = computed(() => $store.getters.getNews)
    return {
      news
    }
  }
}

</script>
