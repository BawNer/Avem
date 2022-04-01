<template>
  <div class="col-12">
    <q-img
      :src="images[0].path"
    ></q-img>
  </div>
</template>

<script>

export default ({
  props: {
    images: Array
  },
  setup() {
    
  },
})
</script>
