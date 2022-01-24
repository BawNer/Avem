<template>
  <q-drawer
    v-model="drawer"
    class="bg-grey-3"
  >
    <q-scroll-area class="fit">
      <q-list class="text-black">
        <q-item>
          <q-item-section>
            <q-item-label header class="text-h4">Меню</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn rounded @click="drawer = false">Х</q-btn>
          </q-item-section>
        </q-item>

        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-list padding>

            <q-separator spaced></q-separator>
            <q-item-label header>{{menuItem.name}}</q-item-label>

            <q-item v-for="(menu, index) in menuItem.menu" :key="index" :to="menu.route" :disable="!menu.active">
              <q-item-section>{{menu.name}}</q-item-section>
            </q-item>

          </q-list>
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { ref, inject, onMounted } from 'vue'
import menuList from './links'

export default {
  setup() {
    const drawer = ref(false)
    const $event = inject('$event')

    onMounted(() => $event.$on('set-drawer-state', prop => drawer.value = prop))

    return {
      drawer,
      menuList
    }
  },
}
</script>