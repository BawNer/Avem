<template>
  <div class="col-7 q-my-md shadow-6">
    <q-card flat bordered>
      <div class="col-12 text-right">
        <q-badge
          color="red"
          v-for="t in tags"
          :key="t"
          class="q-mx-xs"
        >
          {{t}}
        </q-badge>
      </div>
      <q-item>
        <q-item-section>
          <q-item-label caption><slot name="caption">A Caption!</slot></q-item-label>
          <q-item-label class="text-h6"><slot name="title">A title</slot></q-item-label>
        </q-item-section>
      </q-item>
      <q-separator></q-separator>
      <q-card-section v-if="preview">
        <q-img
          v-if="!errorLoadImage"
          :src="preview"
          @error="err => errorLoadImage = true"
        ></q-img>
        <span class="text-grey-14" v-else>Превью не загружено, ошибка сервера</span>
      </q-card-section>
      <q-card-section class="text-subtitle1" v-if="!isFullContent"><slot name="annotation"/></q-card-section>
      <q-card-section v-else class="text-subtitle1">
        {{fullText}}
      </q-card-section>
      <q-card-section v-if="isFullContent && images">
        <image-layout :images="images"></image-layout>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" v-if="!isFullContent" @click="isFullContent = !isFullContent">Чистать полностью</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import ImageLayout from '../layouts/ImageLayout.vue'

export default ({
  name: 'NewsComponent',
  components: {
    ImageLayout
  },
  props: {
    preview: [Boolean, String],
    tags: Array,
    fullText: String,
    images: [Boolean, Array]
  },
  setup() {
    const errorLoadImage = ref(false)
    const isFullContent = ref(false)
    return {
      errorLoadImage,
      isFullContent
    }
  }
}) 

</script>