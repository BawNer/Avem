<template>
  <q-layout view="lHh Lpr lFf">

    <Header
      fixedOnTop
      blured
    />

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/Headers/HeaderSimple.vue'
export default {
  name: 'NewsLayout',
  components: {
    Header
  }
}
</script>