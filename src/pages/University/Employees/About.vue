<template>
  <q-page padding>
    <div class="row q-col-gutter-sm justify-center">
      <div class="col-md-3 col-lg-2 col-12">
        <q-card>
          <q-img
            :src="staff.image"
            height="480px"
          ></q-img>
          <q-card-section>
            <span class="text-subtitle1">
              {{staff.name}}
            </span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-8 col-lg-6 col-12">
        <div class="row q-col-gutter-sm">
          <div class="col-md-12 col-12">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Направление</q-item-label>
                  <q-item-label class="text-h6">{{$route.query.direction}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-auto">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Должность</q-item-label>
                  <q-item-label class="text-h6">{{staff.position}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-auto">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Ученая степень, ученое звание</q-item-label>
                  <q-item-label class="text-h6">
                    {{staff.edLevel}}
                    <span v-if="staff.edRank.length">,</span>
                    {{staff.edRank}}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-md-6 col-12">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Образование</q-item-label>
                  <q-item-label class="text-h6">
                    <span v-for="(edu, i) in staff.education">
                      {{edu}}
                      <span v-if="i+1 < staff.education.length">,</span>
                    </span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-md-3 col-12">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Общий стаж работы</q-item-label>
                  <q-item-label class="text-h6">
                    {{staff.generalExp}}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-md-3 col-12">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Стаж работы по специальности</q-item-label>
                  <q-item-label class="text-h6">
                    {{staff.specialityExp}}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-md-12 col-12">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Научные интересы и направления работ</q-item-label>
                  <q-item-label>
                    <template v-for="(interest) in staff.interests">
                      <q-chip color="primary" text-color="white">
                        {{interest}}
                      </q-chip>
                    </template>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-md-12 col-12">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Преподаваемые дисциплины</q-item-label>
                  <q-item-label>
                    <template v-for="(disciplines) in staff.disciplines">
                      <q-chip color="positive" text-color="white">
                        {{disciplines}}
                      </q-chip>
                    </template>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-md-12 col-12">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Образование, квалификация, специальность</q-item-label>
                  <q-item-label>
                    <template v-for="(speciality) in staff.speciality">
                      {{speciality}}
                    </template>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-md-12 col-12">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Повышение квалификации</q-item-label>
                  <q-item-label>
                    <template v-for="(rankUp) in staff.rankUp">
                      <q-chip color="teal" text-color="white">
                        {{rankUp}}
                      </q-chip>
                    </template>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { computed } from "vue";
import { useRoute } from 'vue-router'

import empls from './empl'
export default {
  name: "About",
  setup() {
    const $route = new useRoute()

    const staff = computed(() => {
      let shadow = empls.filter(empl => empl.direction.name == $route.query.direction)[0]
      return shadow.direction.structure.filter(empl => empl.name == $route.query.employees)[0]
    })

    return {
      staff
    }
  }
}
</script>

<style scoped>

</style>
