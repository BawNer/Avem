<template>
  <div class="col-12">
    <div class="row">
      <component :is="renderImageComponent" :images="images"></component>
    </div>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue'

  import OneImageTemp from './images/OneImage.vue'
  import TwoImageTemp from './images/TwoImage.vue'
  import ThrieImageTemp from './images/ThrieImage.vue'
  import FourImageTemp from './images/FourImage.vue'
  import MultipleImageTemp from './images/MultipleImage.vue'

  export default {
    name: 'ImageLayout',
    components: {
      OneImageTemp,
      TwoImageTemp,
      ThrieImageTemp,
      FourImageTemp,
      MultipleImageTemp
    },
    props: {
      images: Array
    },
    setup(props) {
      const renderImageComponent = ref("miltiple-image-temp")

      const getTemplate = props => {
        switch(props.images.length) {
          case 1: return 'one-image-temp'; break;
          case 2: return 'two-image-temp'; break;
          case 3: return 'thrie-image-temp'; break;
          case 4: return 'four-image-temp'; break;
          default: return 'miltiple-image-temp';
        }
      }
      onMounted(() => {
        renderImageComponent.value = getTemplate(props)
      })

      return {
        renderImageComponent
      }
    },
  }

</script>
