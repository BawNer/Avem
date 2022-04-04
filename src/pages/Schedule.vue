<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <span class="text-h3 text-grey-10">Расписание занятий</span>
      </div>
      <div class="col-12 q-my-xl">
        <q-select
          label="Выберите группу"
          transition-show="scale"
          transition-hide="scale"
          outlined
          v-model="selectedGroup"
          :options="groups"
          style="width: 250px"
          @update:model-value="getCurrentSchema"
        />
      </div>
      <div class="col-12" v-if="selectedGroup">
        <div class="row">
          <template v-if="currentSchema">
            <div class="col-12 q-mb-md row justify-center">
              <q-card style="width: 340px">
                <q-item  class="bg-primary text-white">
                  <q-item-section>
                    <q-item-label class="text-body1">Сегодня, 
                      {{new Date().toLocaleDateString("ru")}}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-card-section>
                  <span class="text-overline">Занятия:</span>

                  <q-list v-for="(classEdu, ic) in currentSchema" :key="ic">
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-progress-clock" color="positive"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Пара: {{classEdu.lesson}}</q-item-label>
                        <q-item-label caption>{{classEdu.subjectType}}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-home-map-marker" color="primary"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Аудитория: {{classEdu.audience}}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-school" color="orange"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Преподаватель: {{classEdu.lecturer}}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-book-education" color="negative"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Предмет: {{classEdu.subject}}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator></q-separator>
                  </q-list>
                </q-card-section>
              </q-card>
            </div>
          </template>
          <template v-for="(schema, index) in schedule" :key="index">
            <div class="col-md-3 col-12 q-pa-sm">
              <q-card>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-body1">{{new Date(schema.date).toLocaleDateString("ru")}}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-card-section>
                  <span class="text-overline">Занятия:</span>

                  <q-list v-for="(classEdu, ic) in schema.classes" :key="ic">
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-progress-clock" color="positive"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Пара: {{classEdu.lesson}}</q-item-label>
                        <q-item-label caption>{{classEdu.subjectType}}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-home-map-marker" color="primary"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Аудитория: {{classEdu.audience}}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-school" color="orange"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Преподаватель: {{classEdu.lecturer}}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar>
                        <q-icon name="mdi-book-education" color="negative"></q-icon>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Предмет: {{classEdu.subject}}</q-item-label>
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
        <span class="text-h5 text-grey-10">Выберите группу...</span>
      </div>
    </div>
  </q-page>
</template>

<script>
import { onMounted, computed, ref } from 'vue'
import { useStore} from 'vuex'

export default {
  setup() {
    const $store = useStore()

    onMounted(() => {
      $store.dispatch('getSchedule')
    })

    const groups = computed(() => $store.getters.getGroups)
    const selectedGroup = ref(null)
    const schedule = computed(() => $store.getters.getSchema(selectedGroup.value))
    const currentSchema = ref(null)

    const getCurrentSchema = group => {
      $store.dispatch('getCurrentSchema', group).then(response => {
        currentSchema.value = response[0].classes
      })
    }


    return {
      groups,
      selectedGroup,
      schedule,
      getCurrentSchema,
      currentSchema
    }
  }
}
</script>
