<template>
  <q-page padding>
    <div class="row">
      <div class="col-3 q-px-sm">
        <q-card>
          <q-item >
            <q-item-section>
              <q-item-label overline>Публикаций всего</q-item-label>
              <q-item-label class="text-h3 q-mx-auto">526</q-item-label>
           </q-item-section>
          </q-item>
        </q-card>
      </div>
      <div class="col-3 q-px-sm">
        <q-card>
          <q-item >
            <q-item-section>
              <q-item-label overline>Публикаций за сегодня</q-item-label>
              <q-item-label class="text-h3 q-mx-auto">1</q-item-label>
           </q-item-section>
          </q-item>
        </q-card>
      </div>
      <div class="col-3 q-px-sm">
        <q-card>
          <q-item >
            <q-item-section>
              <q-item-label overline>Публикаций за неделю</q-item-label>
              <q-item-label class="text-h3 q-mx-auto">7</q-item-label>
           </q-item-section>
          </q-item>
        </q-card>
      </div>
      <div class="col-3 q-px-sm">
        <q-card>
          <q-item >
            <q-item-section>
              <q-item-label overline>Публикаций за месяц</q-item-label>
              <q-item-label class="text-h3 q-mx-auto">22</q-item-label>
           </q-item-section>
          </q-item>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-md">

      <div class="col-6">
        <q-card>
          <q-card-section>
            <q-form
              class="q-gutter-md"
              ref="sendForm"
              @submit="sendData"
            >
              <div class="row q-gutter-sm">
                <div class="col-12">
                  <q-input
                    outlined
                    label="Заголовок"
                    v-model="title"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Введите заголовок' ]"
                  ></q-input>
                </div>
                <div class="col-12">
                  <q-editor 
                    placeholder="Аннонс" 
                    min-height="5rem" 
                    v-model="annonce" 
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Введите анонс' ]"
                  />
                </div>
                <div class="col-12">
                  <q-editor 
                    placeholder="Основной текст"
                    min-height="10rem" 
                    v-model="content" 
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Введите основной текст' ]"
                  />
                </div>
                <div class="col-12">
                  <q-file
                    label="Превью публикации"
                    filled
                    append
                    v-model="preview"
                    accept=".jpg, .jpeg, .png, .bmp"
                  >
                  <template v-slot:prepend>
                    <q-icon name="mdi-upload" />
                  </template></q-file>
                </div>
                <div class="col-12">
                  <q-file
                    label="Изображения для публикации"
                    filled
                    multiple
                    append
                    v-model="photos"
                    accept=".jpg, .jpeg, .png, .bmp"
                  >
                  <template v-slot:prepend>
                    <q-icon name="mdi-upload" />
                  </template></q-file>
                </div>
                <div class="col-12">
                  <span class="text-caption">Теги публикации</span>
                  
                  <div class="q-gutter-sm">
                    <q-checkbox val="attention" v-model="tags" label="Важная информация" color="red"></q-checkbox>
                    <q-checkbox val="performance" v-model="tags" label="Самодеятельность" color="primary"></q-checkbox>
                    <q-checkbox val="event" v-model="tags" label="Внутреннее событие" color="teal"></q-checkbox>
                    <q-checkbox val="students" v-model="tags" label="Студентам" color="orange"></q-checkbox>
                  </div>
                </div>
                <div class="col-12">
                  <q-input
                    outlined
                    label="Мета"
                    v-model="meta"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Введите мета-теги' ]"
                  ></q-input>
                </div>
                <div class="col-12">
                  <span class="text-caption">Кому доступна данная публикация</span>
                  
                  <div class="q-gutter-sm">
                    <q-checkbox val="all" v-model="visible" label="Всем" color="primary"></q-checkbox>
                    <q-checkbox val="authorized" v-model="visible" label="Зарегистрированным пользователям" color="green"></q-checkbox>
                    <q-checkbox val="students" v-model="visible" label="Студентам" color="teal"></q-checkbox>
                    <q-checkbox val="lecturers" v-model="visible" label="Преподавателям" color="orange"></q-checkbox>
                  </div>
                </div>
                <div class="col-12">
                  <q-btn type="submit" color="primary" :loading="isSending">Опубликовать</q-btn>
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-6 text-center">
        <span class="text-h6">Предпросмотр временно недоступен</span>
      </div>

    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  setup() {
    const $store = useStore()
    const $q = useQuasar()

    const title = ref('')
    const annonce = ref('')
    const content = ref('')
    const photos = ref(null)
    const preview = ref(null)
    const visible = ref(['all'])
    const tags = ref([])
    const meta = ref([])
    const news = new FormData()

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
      }).catch(err => {
        $q.notify({
          color: 'red',
          icon: 'mdi-progress-alert',
          message: err.message
        })
      })
      isSending.value = false
    }

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
      sendForm
    }
  },
}
</script>
