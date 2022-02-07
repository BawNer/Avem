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
          v-model="groupId"
          :options="groupsId"
          style="width: 250px"
        />
      </div>
      <div class="col-12" v-if="groupSchedule">
        <div class="row">
          <div class="col-3 q-pa-sm" v-for="(schema, index) in groupSchedule.schema" :key="index">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label class="header">{{new Date(schema.date).toLocaleDateString("ru")}}</q-item-label>
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
<!-- 
                <q-item>

                  <q-item-section>Преподаватель: {{classEdu.lecturer}}</q-item-section>
                  <q-item-section>Предмет: {{classEdu.subject}}</q-item-section>
                  <q-item-section>Тип урока: {{classEdu.subjectType}}</q-item-section>
                </q-item> -->
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { onMounted, computed, ref } from 'vue'
import { useStore} from 'vuex'

export default {
  setup() {

    const store = useStore()

    const groupId = ref('ДВ-11')

    const groupSchedule = computed(() => store.getters.getSchedule.filter(schedule => schedule.group === groupId.value).shift())  

    const groupsId = computed(() => store.getters.getGroupsId)


    onMounted(() => {
      store.dispatch('getSchedule')
    })

    return {
      groupsId,
      groupId,
      groupSchedule
    }
  }
}
</script>
