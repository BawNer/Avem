<template>
  <div class="col-6 q-pa-xs">
    <q-img
      :src="images[0].path"
      fit="cover"
      height="240px"
    ></q-img>
  </div>
  <div class="col-6 q-pa-xs">
    <q-img
      :src="images[1].path"
      fit="cover"
      height="240px"
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
