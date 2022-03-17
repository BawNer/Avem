<template>
  <router-view></router-view>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'
import { computed, onBeforeMount} from 'vue'


export default {
  setup () {
    const $store = useStore()
    const $router = useRouter()
    const user = computed(() => $store.getters.getUser)

    onBeforeMount(() => {
      $store.dispatch('checkUser')
      if (!user.value) {
        $router.push('/auth')
      } else {
        $router.push('/lk/admin')
      }
    })

    onBeforeRouteUpdate((to, from) => {
      if (to.path == '/lk/' && from.path !== '/lk') {
        $router.push('/lk/admin')
      }
    })
  }
}
</script>