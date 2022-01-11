<template>
  <div class="row justify-center">
    <div class="col-6 q-my-md shadow-6">
      <q-card flat bordered>
        <div class="col-12 text-right">
          <q-badge
            v-for="t in options.tags"
            :key="t"
            :color="t.color"
            class="q-mx-xs"
          >
            {{t.title}}
          </q-badge>
        </div>
        <q-item>
          <q-item-section>
            <q-item-label caption>{{options.createdBy.name}}, {{ publishedAt }}</q-item-label>
            <q-item-label class="text-h6"><slot name="title">A title</slot></q-item-label>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-card-section v-if="preview && !isFullContent">
          <q-img
            v-if="!errorLoadImage"
            :src="preview"
            @error="err => errorLoadImage = true"
          ></q-img>
          <span class="text-grey-14" v-else>Превью не загружено, ошибка сервера</span>
        </q-card-section>
        <q-card-section class="text-subtitle1" v-if="!isFullContent"><slot name="annotation"/></q-card-section>
        <q-card-section v-else class="text-subtitle1">
          <slot name="content">Дополнительная информация отсутсвует</slot>
        </q-card-section>
        <q-card-section v-if="isFullContent && images">
          <image-layout :images="images"></image-layout>
        </q-card-section>
        <q-card-actions>
          <q-btn flat color="primary" v-if="!isFullContent" @click="isFullContent = !isFullContent">Чистать полностью</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import ImageLayout from '../layouts/ImageLayout.vue'

export default ({
  name: 'NewsComponent',
  components: {
    ImageLayout
  },
  props: {
    preview: [Boolean, String],
    images: [Boolean, Array],
    options: Object
  },
  setup(props) {
    const errorLoadImage = ref(false)
    const isFullContent = ref(false)
    const publishedAt = computed(() => {
      const date = new Date(props.options.publishedAt)
      return date.toLocaleString("ru", {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      })
    })
    return {
      errorLoadImage,
      isFullContent,
      publishedAt
    }
  }
}) 

</script>