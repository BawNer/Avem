<template>

    <q-dialog
      seamless
      position="bottom"
      v-for="(notification, i) in sys"
      :key="i"
      v-model="showDialog"
    >
      <q-card style="width: 450px">
        <q-badge color="red" rounded>{{sys.length}}</q-badge>
        <q-toolbar>
          <q-toolbar-title class="text-subtitle1">
            <span class="text-weight-bold text-info">[Avem]</span> уведомление системы
          </q-toolbar-title>
          <q-btn flat round dense icon="close" @click="closeNotification(notification.id)"></q-btn>
        </q-toolbar>
        <q-card-section>
          {{notification.message}}
        </q-card-section>
      </q-card>
    </q-dialog>

</template>

<script>
import { computed, inject } from 'vue'
import { useStore } from 'vuex'

export default ({
  name: 'Notification',
  setup() {
    const store = useStore()
    const $event = inject('$event')
    const closeNotification = nid => $event.$emit('clear-notification', nid)
    const showDialog = computed(() => store.getters['getNotification'].length > 0)
    return {
      closeNotification,
      sys: computed(() => store.getters['getNotification']),
      showDialog
    }
  },
})
</script>
