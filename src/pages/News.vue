<template>
  <div class="row">
    <div class="col-12" v-for="news in getAllNews.news" :key="news.id">
      <div class="row justify-center">
        <div class="col-md-5 q-mb-md">
          <q-card bordered class="shadow-15">
            <q-item v-show="!preview">
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>СКФ МТУСИ</q-item-label>
                <q-item-label caption>{{news.date}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-card-section>
              <News :id="news.id" :image="news.images" :title="news.title" :date="news.date"
                :description="news.introText" :preview="preview" />
                {{news.fullText}}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import News from '../components/News.vue'

  export default {
    computed: {
      ...mapGetters('news', [
        'getAllNews'
      ])
    },
    props: {
      preview: Boolean
    },
    components: {
      News
    },
    setup() {
      return {

      }
    },
  }

</script>
