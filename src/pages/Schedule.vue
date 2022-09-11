<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-12">
        <q-card>
          <q-card-section>
            <span class="text-overline">Фильтры</span>
            <div class="row q-col-gutter-sm">
              <q-select
                class="col-12 col-md"
                label="Выберите группу"
                transition-show="scale"
                transition-hide="scale"
                outlined
                menu-anchor="top right"
                v-model="filterGroup"
                :options="groups"
              />

              <q-input
                class="col-12 col-md"
                label="Введите имя преподавателя"
                outlined
                v-model="filterLecturer"
              ></q-input>
              <q-input
                class="col-12 col-md"
                label="Введите аудиторию"
                type="number"
                outlined
                v-model="filterAudience"
              ></q-input>
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn @click="getSchedule" flat color="primary">Применить</q-btn>
            <q-space></q-space>
            <q-btn @click="resetFilters" flat color="black">Сбросить</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-12" v-if="isFilterSelected">
        <div class="row q-col-gutter-sm">
          <template v-for="schema in schedule" :key="schema.id">
            <div class="col-md-3 col-12">
              <q-card>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-body1">
                      {{new Date(schema.date).toLocaleDateString("ru")}},
                      {{new Date(schema.date).toLocaleDateString("ru", { weekday: 'long' })}}
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side>{{schema.group}}</q-item-section>
                </q-item>
                <q-card-section>
                  <span class="text-overline">Занятия:</span>
                  <q-list v-for="(classes, id) in schema.classes" :key="id">
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-progress-clock" color="positive"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Пара: {{classes.lesson}}, {{times[classes.lesson - 1]}}</q-item-label>
                        <q-item-label caption>{{classes.subjectType}}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-home-map-marker" color="primary"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Аудитория: {{classes.audience}}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-school" color="orange"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Преподаватель: {{classes.lecturer}}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-book-education" color="negative"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Предмет: {{classes.subject}}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator></q-separator>
                  </q-list>
                </q-card-section>
              </q-card>
            </div>
          </template>
        </div>
      </div>
      <div v-else>
        <span class="text-h5 text-grey-10">Установите параметры поиска</span>
      </div>
    </div>
  </q-page>
</template>

<script>
import { onMounted, computed, ref } from 'vue'
import { useStore} from 'vuex'

const times = ['08.00 - 09.35', '09.45 - 11.20', '11.30 - 13.05', '14.00 - 15.35', '15.45 - 17.20', '17.30 - 19.05']

export default {
  setup() {
    const $store = useStore()

    onMounted(() => {
      $store.dispatch('getSchedule')
    })

    const currentSchema = ref(null)
    const filterLecturer = ref(null)
    const filterAudience = ref(null)
    const filterGroup = ref(null)
    const isFilterSelected = ref(false)

    const schedule = computed(() => $store.getters.getSchema)
    const groups = computed(() => $store.getters.getGroups)

    const resetFilters = () => {
      filterGroup.value = null
      filterAudience.value = null
      filterLecturer.value = null
      currentSchema.value = null
      isFilterSelected.value = false
    }

    const getSchedule = () => {
      const params = {}

      if (filterGroup.value) {
        params.group = filterGroup.value
        $store.dispatch('getCurrentSchema', params.group).then(response => {
          currentSchema.value = response[0].classes
        })
      }

      if (filterAudience.value) {
        params.audience = filterAudience.value
      }

      if (filterLecturer.value) {
        params.lecturer = filterLecturer.value
      }

      $store.dispatch('getSchedule', params)
      isFilterSelected.value = true
    }


    return {
      groups,
      schedule,
      currentSchema,
      filterGroup,
      filterLecturer,
      filterAudience,
      resetFilters,
      getSchedule,
      isFilterSelected,
      times
    }
  }
}
</script>
