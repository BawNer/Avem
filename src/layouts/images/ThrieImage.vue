<template>
  <div class="col-6">
    <q-img
      :src="images[0]"
      fit="cover"
      height="320px"
    ></q-img>
  </div>
  <div class="col-6">
    <div class="row">
      <div class="col-12">
        <q-img
          :src="images[1]"
          height="160px"
          fit="cover"
        ></q-img>
      </div>
      <div class="col-12">
        <q-img
          :src="images[2]"
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
