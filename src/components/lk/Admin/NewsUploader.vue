<template>
  <div class="row">
    <div class="col-12">
      <q-card>
        <q-card-section>
          <q-form ref="sendForm" @submit="sendData">
            <div class="row q-col-gutter-sm">
              <div class="col-12">
                <q-input outlined label="Заголовок" v-model="title" lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Введите заголовок' ]"></q-input>
              </div>
              <div class="col-12">
                <q-editor placeholder="Аннонс" min-height="5rem" v-model="annonce" lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Введите анонс' ]" />
              </div>
              <div class="col-12">
                <q-editor
                  placeholder="Основной текст"
                  min-height="10rem"
                  v-model="content"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Введите основной текст' ]"
                  :toolbar="[
                    ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                    ['token', 'hr', 'link', 'custom_btn'],
                    ['print', 'fullscreen'],
                    ]"
                />
              </div>
              <div class="col-3">
                <q-file label="Превью публикации" filled append v-model="preview" accept=".jpg, .jpeg, .png, .bmp">
                  <template v-slot:prepend>
                    <q-icon name="mdi-upload" />
                  </template></q-file>
              </div>
              <div class="col-4">
                <q-file label="Изображения для публикации" filled multiple append v-model="photos"
                  accept=".jpg, .jpeg, .png, .bmp">
                  <template v-slot:prepend>
                    <q-icon name="mdi-upload" />
                  </template></q-file>
              </div>
              <div class="col-5">
                <q-input outlined label="Мета" v-model="meta"></q-input>
              </div>
              <div class="col-6">
                <span class="text-caption">Теги публикации</span>

                <div class="q-gutter-sm">
                  <q-checkbox val="attention" v-model="tags" label="Важная информация" color="red"></q-checkbox>
                  <q-checkbox val="performance" v-model="tags" label="Самодеятельность" color="primary"></q-checkbox>
                  <q-checkbox val="event" v-model="tags" label="Внутреннее событие" color="teal"></q-checkbox>
                </div>
              </div>
              <div class="col-6">
                <span class="text-caption">Кому доступна данная публикация</span>

                <div class="q-gutter-sm">
                  <q-checkbox val="all" v-model="visible" label="Всем" color="primary"></q-checkbox>
                  <q-checkbox val="students" v-model="visible" label="Студентам" color="teal"></q-checkbox>
                  <q-checkbox val="lecturers" v-model="visible" label="Преподавателям" color="orange"></q-checkbox>
                </div>
              </div>
              <div class="col-12 q-mt-sm row q-gutter-sm justify-center">
                <q-btn
                  class="col-5"
                  color="negative"
                  outline
                  label="Отмена"
                  @click="cancelWriteNews"
                ></q-btn>
                <q-btn class="col-5" type="submit" color="primary" :loading="isSending">Опубликовать</q-btn>
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { inject, ref } from 'vue'

export default {
  setup() {
    const $store = useStore()
    const $q = useQuasar()
    const $event = inject('$event')

    const title = ref('')
    const annonce = ref('')
    const content = ref('')
    const photos = ref(null)
    const preview = ref(null)
    const visible = ref(['all'])
    const tags = ref([])
    const meta = ref([])
    let news = new FormData()

    const sendForm = ref(null)
    const isSending = ref(false)

    const clearData = () => {
      title.value = ''
      annonce.value = ''
      content.value = ''
      photos.value = null
      preview.value = null
      visible.value = ['all']
      tags.value = []
      meta.value = []
      news = null
      news = new FormData()
    }

    const sendData = async () => {
      news.append('title', title.value)
      news.append('annonce', annonce.value)
      news.append('content', content.value)
      news.append('visible', visible.value)
      news.append('tags', tags.value)
      news.append('meta', meta.value.split(','))

      if (preview.value) {
        news.append('preview', preview.value)
      }

      if (photos.value) {
        photos.value.forEach(photo => {
          news.append('photo', photo)
        })
      }

      isSending.value = true

      await $store.dispatch('publish', news).then(success => {
        $q.notify({
          color: 'teal',
          icon: 'mdi-progress-alert',
          message: 'Новость успешно опубликована'
        })
        clearData()
        $event.$emit('updateNewsList')
        cancelWriteNews()
      }).catch(err => {
        $q.notify({
          color: 'red',
          icon: 'mdi-progress-alert',
          message: err.message
        })
      })
      isSending.value = false
    }

    const cancelWriteNews = () => $event.$emit('cancelWriteNews')

    return {
      title,
      annonce,
      content,
      photos,
      preview,
      visible,
      tags,
      meta,
      sendData,
      isSending,
      sendForm,
      cancelWriteNews
    }
  },
}
</script>
