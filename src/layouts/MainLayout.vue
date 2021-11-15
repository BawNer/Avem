<template>
  <q-layout view="lHh Lpr lFf">

    <Header />

    <q-page-container>
      <router-view />
    </q-page-container>
    
    <Footer />
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Header,
    Footer
  },
  setup () {
    return {

    }
  }
})
</script>
