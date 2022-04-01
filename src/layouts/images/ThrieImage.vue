<template>
  <div class="col-6 q-pa-xs">
    <q-img
      :src="images[0].path"
      fit="cover"
      height="320px"
    ></q-img>
  </div>
  <div class="col-6 q-pa-xs">
    <div class="row">
      <div class="col-12">
        <q-img
          :src="images[1].path"
          height="160px"
          fit="cover"
        ></q-img>
      </div>
      <div class="col-12 q-pa-xs">
        <q-img
          :src="images[2].path"
          height="160px"
          fit="cover"
        ></q-img>
      </div>
    </div>
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
