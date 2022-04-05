<template>
  <q-page padding>
    <template v-if="isWriteNews">
      <news-uploader />
    </template>
    <div class="row" v-else>
      <q-btn
        class="full-width"
        label="Добавить новость"
        outline
        color="positive"
        @click="isWriteNews = true"
      ></q-btn>
    </div>
    <div class="row">
      <div class="col-12" v-if="news.length">
        <q-scroll-area style="width: 100wv; height: 85vh">
          <news-component
            v-for="n in news"
            :key="n.slug"
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
        </q-scroll-area>
      </div>
      <div v-else>
        Loading....
      </div>
    </div>
  </q-page>
</template>

<script>
import NewsUploader from '../../../components/lk/Admin/NewsUploader.vue'
import NewsComponent from '../../../components/News.vue'

import {ref, computed, inject} from 'vue'
import {useStore} from 'vuex'

export default {
  components: {
    NewsUploader,
    NewsComponent
  },
  setup() {
    const $store = useStore()
    const $event = inject('$event')

    const isWriteNews = ref(false)

    $event.$on('cancelWriteNews', () => isWriteNews.value = false)
    $event.$on('updateNewsList', () => $store.dispatch('fetchAllNews'))

    const news = computed(() => $store.getters.getNews)

    return {
      isWriteNews,
      news
    }
  }
}
</script>
