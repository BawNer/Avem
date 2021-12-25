<template>
  <system-alert />
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import systemAlert from './components/system/alert.vue'
import {  mapActions } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    systemAlert
  },
  setup() {
    return {
      ...mapActions('system', ['setSystemMessage'])
    }
  },
  mounted() {
    this.$event.$on('system-alert', props => {
      this.setSystemMessage(props)
    })
  }
  // preFetch({store}) {
  //   return store.dispatch('news/getNewsByLimit', { limit: 10, page: 1 })
  // },
})
</script>
