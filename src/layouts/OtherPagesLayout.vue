<template>
  <q-layout view="lHh Lpr lFf">
    <header-simple />

    <q-page-container>

      <div class="row">
        <div class="col-10 q-ma-md">
          <q-breadcrumbs separator=">">
            <q-breadcrumbs-el
              tag="a"
              v-for="breadcrumb  in $route.meta.breadcrumbs" :key="breadcrumb.name"
              :label="breadcrumb.name"
              @click="() => breadcrumb.link ? $router.push(breadcrumb.link) : null"
              :class="{ 'text-grey-6': !!breadcrumb.link }"
              :style="{ cursor: 'pointer' }"
            />
          </q-breadcrumbs>
        </div>
      </div>

      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script>
import HeaderSimple from '../components/Headers/HeaderSimple.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'OutherPagesLayout',
  components: {
    HeaderSimple,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>
