<template>
  <q-layout view="lHh Lpr lFf">
    <header-simple />

    <q-page-container>
      <router-view />
    </q-page-container>
    
    <Footer />
  </q-layout>
</template>

<script>
import HeaderSimple from '../components/HeaderSimple.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'OutherPagesLayout',
  components: {
    HeaderSimple,
    Footer
  }
}
</script>