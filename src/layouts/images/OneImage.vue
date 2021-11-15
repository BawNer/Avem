<template>
  <q-img
    :src="Image.path"
    ratio="16/9"
    width="590px"
    height="440px"
  >
    <template v-slot:error>
      <div class="absolute-full bg-negative flex flex-center">
        Something went wrong
      </div>
    </template>
  </q-img>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'images/OneImage',
  props: {
    images: Array
  },
  computed: {
    Image() {
      return {
        path: this.images[0].path
      }
    }
  }
}
</script>
