<template>
  <div v-if="!preview">
    <one-image-temp :images="images" v-if="images.length > 0" />
  </div>
  <div v-else>
    <div class="row">
      <div class="col-12">
        <q-img v-if="listImages.path" :src="listImages.path" ratio="16/9"
          width="340px"
          height="280px"
          fit="contain"
        >
          <template v-slot:error>
            <div class="absolute-full flex flex-center bg-negative text-white">
              Ошибка при загрузке изображения
            </div>
          </template>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script>
  import OneImageTemp from './images/OneImage.vue'

  export default {
    name: 'ImageLayout',
    components: {
      OneImageTemp
    },
    props: {
      images: Array,
      preview: Boolean
    },
    computed: {
      listImages() {
        const ln = this.images.length
        if (ln == 1) {
          return {
            totalLength: ln,
            path: this.images[ln - 1].path
          }
        } else if (ln > 1) {
          const list = []
          this.images.map(v => {
            list.push(v.path)
          })
          return {
            totalLength: list.length,
            path: list[0]
          }
        } else {
          return {
            totalLength: 0,
            path: 'https://2.bp.blogspot.com/-I21AM6VLeeE/WK7lSab8t6I/AAAAAAAAAE4/Gtvevr-hFnwhfoqqsOr2RMBvxgNm9MEoQCK4B/s1600/x_e7576942.jpg'
          }
        }
      }
    },
    setup() {
      return {

      }
    },
  }

</script>
