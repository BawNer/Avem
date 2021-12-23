<template>
  <div class="q-pa-md q-gutter-sm">

    <q-dialog v-model="sys.active" seamless position="bottom">
      <q-card style="width: 350px">
        <q-toolbar>
          <q-toolbar-title>
            <span class="text-weight-bold">Avem</span> notifications
          </q-toolbar-title>
          <q-btn flat round dense icon="close"></q-btn>
        </q-toolbar>
        <q-card-section>
          {{sys.message}}
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default ({
  name: 'systemAlert',
  setup() {
    const store = useStore()

    return {
      sys: computed(() => store.getters['system/getSystemMessage'])
    }
  },
})
</script>
