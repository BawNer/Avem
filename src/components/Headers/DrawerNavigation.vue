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
        <q-separator></q-separator>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-expansion-item
            expand-separator
            :label="menuItem.name"
            :content-inset-level="1"
            group="sidenavigation"
          >
            <template v-for="(menuList, index) in menuItem.menu" :key="index">
              <q-item clickable :to="menuList.route" :disable="!menuList.active">
                {{menuList.name}}
              </q-item>
            </template>
          </q-expansion-item>
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