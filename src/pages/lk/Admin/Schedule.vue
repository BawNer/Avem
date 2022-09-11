<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <q-uploader
          style="width: 100%;"
          :url="url"
          :headers="[{name: 'Authorization', value: `Token ${user.accessToken.token}`}]"
          label="Только DBF файлы"
          field-name="schedule"
          :filter="checkFileType"
          @rejected="onRejected"
          @failed="onFail"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'


export default {
  setup() {
    const $store = useStore()
    const $q = useQuasar()

    const checkFileType = files => files.filter(file => file.name.split('.')[1] === 'DBF')

    const onRejected = rejectedEntries => {
      $q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    }

    const onFail = info => {
      $q.notify({
        type: 'negative',
        message: `Error: ${JSON.parse(info.xhr.response).message}`
      })
    }

    const user = $store.getters.getUser

    return {
      checkFileType,
      onRejected,
      onFail,
      user,
      url: process.env.DEV ? 'http://localhost:3000/schedule' : 'http://194.58.122.68:3000/schedule'
    }
  },
}
</script>
