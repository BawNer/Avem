<template>
  <q-page padding>
    <div class="row q-mx-xl justify-center">
      <div class="col-md-6 col-sm-12 row">
        <div class="col-12 text-h3 q-mb-xl">Новости</div>


          <div class="col-12 q-px-sm">
            <News
              :id="lastNews[0].id"
              :image="lastNews[0].images"
              :title="lastNews[0].title"
              :date="lastNews[0].date"
              :preview="true"
            />
          </div>
          <div class="col-md-6 col-sm-12 q-px-sm">
            <News
              :id="lastNews[1].id"
              :image="lastNews[1].images"
              :title="lastNews[1].title"
              :date="lastNews[1].date"
              :preview="true"
            />
          </div>
          <div class="col-md-6 col-sm-12 q-px-sm">
            <News
              :id="lastNews[2].id"
              :image="lastNews[2].images"
              :title="lastNews[2].title"
              :date="lastNews[2].date"
              :preview="true"
            />
          </div>

        
        <q-btn flat color="primary" icon-right="arrow_right" to="/news" class="q-mt-md">Все новости</q-btn>
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
<!-- 
      <div class="col-md-10 col-sm-12 q-py-xl">
        <q-card class="shadow-10">
          <div class="row q-py-lg">
            <div class="col-md col-sm-12 q-px-lg cursor-pointer">
              <div class="row">
                <div class="col-12 text-center">
                  <q-img src="organization_details.png" width="60px" height="60px"></q-img>
                </div>
                <div class="col-12 text-center text-subtitle1 text-gre-9">
                  Приемная компания
                </div>
              </div>
            </div>
            <div class="col-md col-sm-12 q-px-lg cursor-pointer">
              <div class="row">
                <div class="col-12 text-center">
                  <q-img src="organization_details.png" width="60px" height="60px"></q-img>
                </div>
                <div class="col-12 text-center text-subtitle1 text-gre-9">
                  Подать документы онлайн
                </div>
              </div>
            </div>
            <div class="col-md col-sm-12 q-px-lg cursor-pointer">
              <div class="row">
                <div class="col-12 text-center">
                  <q-img src="organization_details.png" width="60px" height="60px"></q-img>
                </div>
                <div class="col-12 text-center text-subtitle1 text-gre-9">
                  Сведения об образовательной организации
                </div>
              </div>
            </div>
            <div class="col-md col-sm-12 q-px-lg cursor-pointer">
              <div class="row">
                <div class="col-12 text-center">
                  <q-img src="organization_details.png" width="60px" height="60px"></q-img>
                </div>
                <div class="col-12 text-center text-subtitle1 text-gre-9">
                  Рейтинг абитурьентов
                </div>
              </div>
            </div>
            <div class="col-md col-sm-12 q-px-lg cursor-pointer">
              <div class="row">
                <div class="col-12 text-center">
                  <q-img src="organization_details.png" width="60px" height="60px"></q-img>
                </div>
                <div class="col-12 text-center text-subtitle1 text-gre-9">
                  О вузе
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div> -->

      <div class="col-md-10 col-sm-12 q-ma-lg">
        <div class="row">
          <div class="col-12 text-h3">Направления подготовки</div>
          <div class="col-12 q-mt-xl">
            <q-list bordered class="rounded-borders shadow-10">
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
            </q-list>
          </div>
        </div>
      </div>
    </div>
    
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import News from '../components/News.vue'

const events = [
  { title: 'Название мероприятия', date: '20 сентября', time: '20:00 - 21:00', place: 'Актовый зал, 314' },
  { title: 'Название мероприятия', date: '20 сентября', time: '20:00 - 21:00', place: 'Актовый зал, 314' },
  { title: 'Название мероприятия', date: '20 сентября', time: '20:00 - 21:00', place: 'Актовый зал, 314' },
  { title: 'Название мероприятия', date: '20 сентября', time: '20:00 - 21:00', place: 'Актовый зал, 314' },
]

const expansionsList = [
  {
    id: '01',
    title: 'Информатика и вычислительная техника',
    description: 'Северо-Кавказский филиал МТУСИ готовит специалистов, способных разрабатывать программное обеспечение, владеть навыками интернет-технологий создавать системы компьютерного моделирования и автоматического проектирования',
    path: '/',
    isOpen: false
  },
  {
    id: '02',
    title: 'Инфокоммуникационные технологии и системы связи',
    description: 'Вуз готовит специалистов, имеющих знания в области компьютерных наук и телекоомуникаций, включая создание соверемнных электронных средств генерации, передачи, приема, обработки, хранения и защиты информации',
    path: '/',
    isOpen: false
  }
]

export default defineComponent({
  name: 'PageIndex',
  components: {
    News
  },
  computed: {
    lastNews() {
      return this.$store.getters['news/getNewsByCount'](3).news
    }
  },
  setup() {

    return {
      expansionsList,
      events
    }
  }
})
</script>
