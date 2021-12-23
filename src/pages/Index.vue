<template>
  <q-page padding>
    <div class="row q-mx-xl justify-center">
      <div class="col-md-6 col-sm-12 row">
        <div class="col-12 text-h3 q-mb-xl">Новости</div>

        <div class="col-12">
          <q-img
            src="news/covid.png"
            :ratio="16/9"
            fit="cover"
          ></q-img>
          <span class="text-h5">В вузе пройдет плановая вакцинация студентов и преподавателей</span><br/>
          <span class="text-subtitle1 text-blue">28 июля 2021</span>
        </div>

        <div class="col-6">
          <q-img
            src="news/abiturient.png"
            :ratio="16/9"
            fit="cover"
          ></q-img>
          <span class="text-h5">Опубликованы ранжированные списки</span><br/>
          <span class="text-subtitle1 text-blue">22 июля 2021</span>
        </div>

        <div class="col-6">
          <q-img
            src="news/olimpiada.png"
            :ratio="16/9"
            fit="cover"
          ></q-img>
          <span class="text-h5">Областная олимпиада на базе СКФ МТУСИ</span><br/>
          <span class="text-subtitle1 text-blue">14 июля 2021</span>
        </div>

        <q-btn flat color="primary" icon-right="arrow_right" class="q-mt-md" @click="setError('Страница в временно недоступна')">Все новости</q-btn>
      </div>

      <div class="col-md-3 col-sm-12 row self-start q-pl-md">
        <div class="col-12 text-h3 q-mb-xl">Мероприятия</div>
        
        <q-card flat class="q-mb-xs" v-for="(event, i) in events" :key="i">
          <q-card-section>
            <div class="text-h5 q-mb-md">{{event.title}}</div>

            <div class="text-subtitle1 text-primary">{{event.date}}</div>

            <div class="row justify-between">
              <div class="text-subtitle2 text-grey-8">{{event.time}}</div>
              <div class="text-subtitle2 text-grey-8">{{event.place}}</div>
            </div>
          </q-card-section>
          <q-separator></q-separator>
        </q-card>
        <q-btn flat color="primary" icon-right="arrow_right" to="/news" class="q-mt-md">Все мероприятия</q-btn>
      </div>

      <div class="col-md-10 col-sm-12 q-ma-lg">
        <div class="row">
          <div class="col-12 text-h3">Направления подготовки</div>
          <div class="col-12 q-mt-xl">
            <!-- <q-list bordered class="rounded-borders shadow-10">
              <q-expansion-item v-for="l in expansionsList" :key="l.id"
                @show="() => l.isOpen = !l.isOpen"
                @hide="() => l.isOpen = !l.isOpen"
              >
                <template v-slot:header>
                  <div class="col-11 q-px-md">
                    <div class="row text-h6">
                      <div class="col-1" :class="!l.isOpen ? 'text-grey-4': 'text-primary'">{{l.id}}</div>
                      <div class="col-11" v-show="!l.isOpen">{{l.title}}</div>
                    </div>
                  </div>
                  
                </template>
                <q-card>
                  <q-card-section class="q-ma-xl shadow-10">
                    <div class="row q-mb-md">
                      <div class="col-8 text-h3 q-mb-xl">
                        {{l.title}}
                      </div>
                      <div class="col-md-6 text-h5">
                        {{l.description}}
                      </div>
                    </div>
                    <q-btn rounded color="primary">Подробнее</q-btn>
                  </q-card-section>
                  <q-separator></q-separator>
                </q-card>
              </q-expansion-item>
            </q-list> -->
            <q-tabs
              v-model="tabs"
              align="justify"
              class="shadow-2"
              :breakpoint="0"
              active-color="primary"
              active-class="shadow-14"
            >
              <q-tab
                v-for="tabContent in tabsContent"
                :key="tabContent.id"
                :name="tabContent.id"
              ><div><span class="text-h2 q-mr-xl">{{tabContent.id}}</span><span>{{tabContent.title}}</span></div></q-tab>
            </q-tabs>
            <q-separator></q-separator>
            <q-card>
              <q-tab-panels v-model="tabs" animated>
                <q-tab-panel 
                  v-for="tabContent in tabsContent"
                  :key="tabContent.id"
                  :name="tabContent.id">
                  <div class="row justify-center">
                    <div class="col-6 q-pa-xl text-h6">{{tabContent.description}}</div>
                    <div class="col-6 text-center">
                      <q-img
                        :src="tabContent.images"
                        :ratio="16/9"
                        width="460px"
                        height="410px"
                      ></q-img>
                    </div>
                  </div>
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import News from '../components/News.vue'

const events = [
  { title: 'Название мероприятия', date: '20 сентября', time: '20:00 - 21:00', place: 'Актовый зал, 314' },
  { title: 'Название мероприятия', date: '20 сентября', time: '20:00 - 21:00', place: 'Актовый зал, 314' },
  { title: 'Название мероприятия', date: '20 сентября', time: '20:00 - 21:00', place: 'Актовый зал, 314' },
  { title: 'Название мероприятия', date: '20 сентября', time: '20:00 - 21:00', place: 'Актовый зал, 314' },
]

const tabsContent = [
  {
    id: '01',
    title: 'Информатика и вычислительная техника',
    description: 'Северо-Кавказский филиал МТУСИ готовит специалистов, способных разрабатывать программное обеспечение, владеть навыками интернет-технологий создавать системы компьютерного моделирования и автоматического проектирования',
    images: 'images/tabContent1.png'
  },
  {
    id: '02',
    title: 'Инфокоммуникационные технологии и системы связи',
    description: 'Вуз готовит специалистов, имеющих знания в области компьютерных наук и телекоомуникаций, включая создание соверемнных электронных средств генерации, передачи, приема, обработки, хранения и защиты информации',
    images: 'images/tabContent1.png'
  }
]

export default defineComponent({
  name: 'PageIndex',
  components: {
    News
  },
  computed: {
    // lastNews() {
    //   return this.$store.getters['news/getNewsByCount'](3).news
    // }
  },
  setup() {

    const tabs = ref('01')
    const setError = msg => {
      alert(msg)
    }

    return {
      tabs,
      tabsContent,
      events,
      setError
    }
  }
})
</script>
