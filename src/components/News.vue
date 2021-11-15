<template>
  <div class="row cursor-pointer q-mb-lg" @click="preview ? $router.push({ path: `/news/${id}`}) : null">
    <image-layout :images="image" :preview="preview" />

    <div class="col-12 text-h6" v-show="preview">{{title}}</div>
    <div class="col-12 text-primary text-subtitle1" v-show="preview">{{date}}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ImageLayout from '../layouts/ImageLayout.vue'

export default defineComponent({
  name: 'NewsComponent',
  components: {
    ImageLayout
  },
  props: {
    id: {
      type: String,
      required: true
    },
    image: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    heightImage: {
      type: Number
    },
    preview: Boolean
  }
}) 

</script>