<template>

    <q-dialog v-model="sys.active" seamless position="bottom">
      <q-card style="width: 450px">
        <q-toolbar>
          <q-toolbar-title class="text-subtitle1">
            <span class="text-weight-bold text-info">[Avem]</span> уведомление системы
          </q-toolbar-title>
          <q-btn flat round dense icon="close" @click="closeNotification"></q-btn>
        </q-toolbar>
        <q-card-section>
          {{sys.message}}
        </q-card-section>
      </q-card>
    </q-dialog>

</template>

<script>
import { computed, inject } from 'vue'
import { useStore } from 'vuex'

export default ({
  name: 'systemAlert',
  setup() {
    const store = useStore()
    const $event = inject('$event')
    const closeNotification = () => {
      $event.$emit('system-alert', {active: false})
    }
    return {
      closeNotification,
      sys: computed(() => store.getters['getSystemMessage'])
    }
  },
})
</script>
