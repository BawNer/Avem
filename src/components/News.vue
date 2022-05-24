<template>
  <div class="row justify-center">
    <div class="col-md-6 col-lg-5 col-xl-4 col-11 q-my-md">
      <q-card class=" shadow-6">
        <div class="col-12 text-right">

        </div>
        <q-item>
          <q-item-section>
            <q-item-label caption>{{author.username}}, {{ publishedAt }}</q-item-label>
            <q-item-label class="text-h6"><slot name="title">A title</slot></q-item-label>
          </q-item-section>
          <template v-if="access">
            <q-item-section avatar>
              <q-btn flat @click="deleteNews(newsId)">
                <q-icon name="mdi-trash-can" color="red"  />
              </q-btn>
            </q-item-section>
          </template>
        </q-item>
        <q-separator></q-separator>
        <template v-if="preview && !isFullContent">
          <q-img
            height="320px"
            fit="contain"
            :ratio="16/9"
            v-if="!errorLoadImage"
            :src="preview.path"
            @error="err => errorLoadImage = true"
          ></q-img>
          <span class="text-grey-14" v-else>Превью не загружено, ошибка сервера</span>
        </template>
        <q-card-section class="text-subtitle1" v-if="!isFullContent"><slot name="annotation"/></q-card-section>
        <q-card-section v-else class="text-subtitle1">
          <slot name="content">Дополнительная информация отсутсвует</slot>
        </q-card-section>
        <q-card-section v-if="isFullContent && images">
          <image-layout :images="images"></image-layout>
        </q-card-section>
        <q-card-actions>
          <q-btn flat color="primary" v-if="!isFullContent" @click="isFullContent = !isFullContent">Читать полностью</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, computed, inject } from 'vue'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
import ImageLayout from '../layouts/ImageLayout.vue'

export default ({
  name: 'NewsComponent',
  components: {
    ImageLayout
  },
  props: {
    preview: [Object, null],
    images: [Array, null],
    author: Object,
    publishedAt: String,
    tags: [Array, null],
    newsId: Number
  },
  setup() {
    const $store = useStore()
    const $q = useQuasar()
    const $event = inject('$event')
    const errorLoadImage = ref(false)
    const isFullContent = ref(false)

    const user = computed(() => $store.getters.getUser)

    let access = ref(null)
    if (user.value) {
      access.value = user.value.roles.filter(a => a.access.includes('r143'))
    }

    const deleteNews = async id => {
      $store.dispatch('deleteNews', id).then(() => {
        $q.notify({
          color: 'red',
          icon: 'mdi-delete-empty',
          message: 'Новость успешно удалена'
        })
        $event.$emit('updateNewsList')
      }).catch(err => {
        $q.notify({
          color: 'orange',
          icon: 'mdi-cat',
          message: `Что то пошло так, ${err}`
        })
      })
    }

    return {
      errorLoadImage,
      isFullContent,
      user,
      deleteNews,
      access
    }
  }
})

</script>
