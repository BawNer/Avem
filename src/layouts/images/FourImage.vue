<template>
  <div class="col-12 row">
    <div class="col-6 row q-pr-sm q-pb-sm">
      <div class="col-12 q-pb-sm">
        <q-img
          :src="images[0].path"
          fit="cover"
          height="160px"
        ></q-img>
      </div>
      <div class="col-12">
        <q-img
          :src="images[1].path"
          fit="cover"
          height="160px"
        ></q-img>
      </div>
    </div>
    <div class="col-6">
      <q-img
        :src="images[2].path"
        fit="cover"
        height="328px"
      ></q-img>
    </div>
  </div>
  <div class="col-12">
    <q-img
      :src="images[3].path"
      fit="cover"
      height="320px"
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