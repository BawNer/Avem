<template>
  <q-page padding class="dinamic-margin">
    <div class="row q-col-gutter-sm justify-center" :class="!$q.screen.lt.sm ? 'q-mx-xl': 'q-mx-xs'">
      <div class="col-md-6 col-sm-12 row">
        <div class="col-12 text-h3 q-mb-xl">Новости</div>

        <div
          v-for="(n, i) in news"
          :key="i"
          :class="!$q.screen.lt.sm ? i > 0 ? 'col-6' : 'col-12' : 'col-12'"
          class="q-pa-sm"
        >
          <q-img v-if="n.preview"
            :src="n.preview.path"
            :ratio="16/9"
            fit="cover"
            class="q-mb-lg"
          ></q-img>
          <span class="text-h5">{{n.title}}</span><br/>
          <span class="text-subtitle1 text-blue">
            {{ n.publishedAt }}
          </span>
          <q-btn flat color="primary" to="/news">Подробнее</q-btn>
        </div>

        <q-btn flat color="primary" icon-right="arrow_right" class="q-mt-md" to="/news">Все новости</q-btn>
      </div>

      <div class="col-md-3 col-12 row self-start">
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
        <q-btn flat color="primary" icon-right="arrow_right" class="q-mt-md" @click="createNotification('Модуль событий в данный момент недоступен')">Все мероприятия</q-btn>
      </div>

      <div class="col-md-12 col-lg-10 col-12 q-ma-lg">
        <div class="row">
          <div class="col-12 text-h3">Направления подготовки</div>
          <div class="col-12 q-mt-xl">
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
              >
                <div v-if="!$q.screen.lt.sm"><span class="text-h2 q-mr-xl">{{tabContent.id}}</span><span>{{tabContent.title}}</span></div>
                <div v-else><span class="text-subtitle2 q-mr-xs">{{tabContent.id}}</span><br/><span>{{tabContent.title}}</span></div>
              </q-tab>
            </q-tabs>
            <q-separator></q-separator>
            <q-card>
              <q-tab-panels v-model="tabs" animated>
                <q-tab-panel
                  v-for="tabContent in tabsContent"
                  :key="tabContent.id"
                  :name="tabContent.id">
                  <div class="row justify-center">
                    <div class="col-6" :class="!$q.screen.lt.sm ? 'q-pa-xl text-h6' : ''">{{tabContent.description}}</div>
                    <div class="col-6 text-center">
                      <q-img
                        :src="tabContent.images"
                        :ratio="16/9"
                        :width="!$q.screen.lt.sm ? '460px' : '170px'"
                        :height="!$q.screen.lt.sm ? '410px' : '140px'"
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
import { ref, inject, computed, onMounted } from 'vue';
import { useStore } from 'vuex'
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

export default {
  name: 'PageIndex',
  components: {
    News
  },
  setup() {
    const $event = inject('$event')
    const store = useStore()
    onMounted(() => store.dispatch('fetchAllNews') )

    const createNotification = msg => $event.$emit('set-notification', msg)

    const tabs = ref('01')

    const news = computed(() => store.getters.getNews.slice(0, 3))

    return {
      tabs,
      tabsContent,
      events,
      createNotification,
      news
    }
  }
}
</script>

<style lang="scss" scoped>
  .dinamic-margin {
    margin-top: 150px;
  }

  @media screen and (min-width: 1px) and (max-width: 400px) {
    .dinamic-margin {
      margin-top: 550px;
    }
  }
</style>
