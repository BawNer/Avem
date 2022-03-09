<template>
<!-- <q-header 
  style="backdrop-filter: blur(7px); background-color: #0000001a;"
  :class="[transparent ? 'transparent' : '', absolute ? 'absolute': '', fixedOnTop ? 'fixed-top': '' ]"
  > -->
  <q-header class="bg-white shadow-6">
    <q-toolbar class="justify-center wrap">

      <q-list>
        <q-item to="/">
          <q-item-section avatar >
            <img src="icons/logo_light.svg" alt="" width="64">
          </q-item-section>
        </q-item>
      </q-list>

      <div v-if="!$q.screen.lt.sm">
        <q-btn 
          flat 
          color="dark"
          v-for="link in linkList"
          :key="link.name"
          :label="link.name"
        >
          <q-menu>
            <q-list style="min-width: 50px" class="row">
              <q-item
                clickable
                v-for="menu in link.menu"
                :key="menu.name"
                :to="menu.route"
                class="col-sm-12 col-md-4"
                :disable="!menu.active"
              >
                <q-item-section>{{menu.name}}</q-item-section>
              </q-item>
            </q-list>
        </q-menu>
        </q-btn>
        <q-btn flat color="dark" to="/sveden/contact">Контакты</q-btn>
      </div>
      <q-btn v-else flat color="dark" icon="menu" class="q-gutter-sm" @click="setStateDrawer(true)"></q-btn>
      <q-btn flat color="dark" icon="search" class="q-gutter-sm" @click="createNotification('Модуль временно недоступен')"></q-btn>
      <q-btn flat color="dark" icon="visibility" class="q-gutter-sm" @click="createNotification('Модуль временно недоступен')"></q-btn>
    </q-toolbar>
  </q-header>
  <drawer-navigation></drawer-navigation>
</template>

<script>
import { inject } from 'vue'
import drawerNavigation from './DrawerNavigation.vue'

import linkList from './links'

export default {
  name: 'HeaderSimple',
  components: {
    drawerNavigation
  },
  props: {
    transparent: Boolean,
    blured: Boolean,
    fixedOnTop: Boolean,
    absolute: Boolean
  },
  setup() {
    const $event = inject('$event')
    const createNotification = msg => $event.$emit('set-notification', msg)
    const setStateDrawer = prop => $event.$emit('set-drawer-state', prop)
    return {
      createNotification,
      linkList,
      setStateDrawer
    }
  }
}
</script>

<style lang="scss" scoped>
  .blured {
    filter: blur(5px);
    background-blend-mode: overlay;
  }
</style>