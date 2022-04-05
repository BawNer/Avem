<template>
  <q-layout view="lHh lpR lFf" v-if="user">

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" behavior="desktop" bordered>
      <q-list bordered separator>
        <q-item>
          <q-item-section class="text-center">
            <div>
              <span class="text-h4 text-primary">СКФ </span>
              <span class="text-h4">МТУСИ</span>
            </div>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-avatar size="64px">
              <q-icon color="grey" name="mdi-account-tie"></q-icon>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label lines="">{{user.username}}</q-item-label>
            <q-item-label caption lines="1">
              <span v-for="(role, index) in user.roles" :key="index">{{role.name}}; </span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list>
        <q-item v-for="app in apps" :key="app.name" clickable v-ripple :to="`/lk/${app.path}`">
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              <q-icon :name="app.icon"></q-icon>
            </q-avatar>
          </q-item-section>

          <q-item-section class="text-grey-8">{{app.name}}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { useStore } from 'vuex'
import { ref, computed} from 'vue'

import apps from './apps'

export default {
  setup () {
    const $store = useStore()
    const leftDrawerOpen = ref(false)
    const user = computed(() => $store.getters.getUser)


    return {
      leftDrawerOpen,
      user,
      apps,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>