<template>
    <q-header class="transparent absolute">
      <q-toolbar class="justify-center wrap">

        <q-list>
          <q-item>
            <q-item-section avatar >
              <img src="icons/logo_light.png" alt="" width="128">
            </q-item-section>
          </q-item>
        </q-list>

        <div class="desktop-only">
          <q-btn 
            flat 
            color="text-white"
            v-for="link in linkList"
            :key="link.name"
            :label="link.name"
          >
            <q-menu>
              <q-list style="min-width: 50px" class="row">
                <q-item
                  clickable
                  v-for="menu in link.menu"
                  :key="menu.name"
                  :to="menu.route"
                  class="col-sm-12 col-md-4"
                >
                  <q-item-section>{{menu.name}}</q-item-section>
                </q-item>
              </q-list>
          </q-menu>
          </q-btn>
          <q-btn flat color="text-white" to="/">Контакты</q-btn>
        </div>
        <q-btn flat icon="menu" class="q-gutter-sm mobile-only"></q-btn>
        <q-btn flat icon="search" to="/404" class="q-gutter-sm"></q-btn>
        <q-btn flat icon="visibility" to="/404" class="q-gutter-sm"></q-btn>
      </q-toolbar>
    </q-header>
    <q-carousel
      swipeable
      animated
      infinite
      autoplay
      v-model="slide"
      ref="carousel"
      :height="getHeight"
    >
      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[128, 200]"
          class="q-gutter-xs"
        >
          <q-btn
            push round dense color="white" text-color="primary" icon="keyboard_arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push round dense color="white" text-color="primary" icon="keyboard_arrow_right"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>

      <q-carousel-slide
        v-for="slide in slides"
        :key="slide.id"
        :name="slide.id"
        class="row wrap items-center text-white"
        :img-src="slide.src"
        style="background-blend-mode: overlay; background-color: rgba(0,0,0,.5)"
      >
        <div class="offset-lg-2 col-md-5 col-12">
          <p class="text-h2">
            {{slide.text}}
          </p>

        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="row q-mx-xl relative-position" style="top: -150px">
      <div class="col-6 no-gutters">
        <q-card>
          <q-card-section>
            <div class="text-h3 text-grey-10">Примемная кампания 2021</div>
          </q-card-section>
          <q-card-section>
            <q-list>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon name="link"></q-icon>
                </q-item-section>
                <q-item-section>Подать документы онлайн</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon name="link"></q-icon>
                </q-item-section>
                <q-item-section>Рейтинги абитуриентов</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon name="link"></q-icon>
                </q-item-section>
                <q-item-section>Порядок приёма документов</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon name="link"></q-icon>
                </q-item-section>
                <q-item-section>День открытых дверей</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6 no-gutters">
        <q-card class="bg-primary text-white">
          <q-card-section>
            <div class="text-h3">Важная информация</div>
          </q-card-section>
          <q-card-section>
            <q-list>
              <q-item clickable to="/p/about">
                <q-item-section avatar>
                  <q-icon name="link"></q-icon>
                </q-item-section>
                <q-item-section>О вузе</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon name="link"></q-icon>
                </q-item-section>
                <q-item-section>Вопросы и ответы</q-item-section>
              </q-item>
              <q-item clickable to="/p/infoeducation">
                <q-item-section avatar>
                  <q-icon name="link"></q-icon>
                </q-item-section>
                <q-item-section>Сведения об образовательной организации</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon name="link"></q-icon>
                </q-item-section>
                <q-item-section>Направления подготовки</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

const linkList = [
  { name: 'Университет', menu: [
    { name: 'О вузе', route: '/p/about' },
    { name: 'Структура', route: '/p/structure' },
    { name: 'Контакты', route: '/p/contact' },
    { name: 'Образование', route: '/p/education' },
    { name: 'Доступная среда', route: '' },
    { name: 'Документы', route: '/p/documents' },
    { name: 'Руководство', route: '' },
    { name: 'Сотрудники', route: '/p/employee' },
    { name: 'Партнеры', route: '' },
    { name: 'Оснащенность университета', route: '' },
    { name: 'Работа в СКФ МТУСИ', route: '' },
    { name: 'Международное сотрудничество', route: '' },
    { name: 'Финансовая деятельность', route: '' },
    { name: 'Платные образовательные услуги', route: '' },
    { name: 'Противодействие коррупции', route: '' },
    { name: 'Сведения об образовательной организации', route: '/p/infoeducation' }
  ]},
  { name: 'Абитурьенту', menu: [
    { name: 'Почему СКФ МТУСИ?', route: '' },
    { name: 'Приемная компания 2021', route: '' },
    { name: 'Порядок приема документов', route: '' },
    { name: 'Дни открытых дверей', route: '' },
    { name: 'Документы', route: '' },
    { name: 'Стоимость обучения', route: '' },
    { name: 'Формы обучения', route: '' },
    { name: 'Довузовская подготовка', route: '' },
    { name: 'Часто задаваемые вопросы', route: '' },
    { name: 'Задать вопрос', route: '' }
  ]},
  { name: 'Студенту', menu: [
    { name: 'Студентам', route: '' },
    { name: 'Стипендии', route: '' },
    { name: 'График консультаций', route: '' },
    { name: 'Работа', route: '' },
    { name: 'Модульно-рейтинговая система', route: '' },
    { name: 'Электронное портфолио', route: '' },
    { name: 'Методические указания по подготовке ВКР', route: '' },
    { name: 'Расписание занятий', route: '' },
    { name: 'Внеучебная деятельность', route: '' },
    { name: 'Вакантные места для перевода', route: '' },
    { name: 'Электронная образовательная среда', route: '' },
    { name: 'Документы', route: '' },
    { name: 'Научная работа', route: '' },
    { name: 'Оплата обучения', route: '' }
  ]},
  { name: 'Медиа', menu: [
    { name: 'Видео', route: '' },
    { name: 'Новости', route: '/news' },
    { name: 'События', route: '' },
    { name: 'Газета "Спектр"', route: '' }
  ]},
  { name: 'Атмосфера', menu: [
    { name: 'Клуб выпускников', route: '' },
    { name: 'Музей СКФ МТУСИ', route: '' },
    { name: 'Внеучебная деятельность', route: '' }
  ]},
]

const slides = [
  { id: 0, src: 'slider/1.png', text: 'Почему я выбираю СКФ МТУСИ' },
  { id: 1, src: 'slider/2.png', text: 'На базе вуза организована стевая академия CISCO' },
  { id: 2, src: 'slider/3.png', text: 'На базе вуза работает учебный центр "Academy for Professional Training Unify Communications"' },
  { id: 3, src: 'slider/4.png', text: 'Лабаратория цифровых систем коммутации и сетей связи' },
  { id: 4, src: 'slider/5.png', text: 'Возможность перевода в Москву на тех же условиях с предоставлением общежития' },
  { id: 5, src: 'slider/6.png', text: 'Лаборатория систем радиосвязи и телевещания' },
  { id: 6, src: 'slider/7.png', text: 'Huawei' }
]


export default defineComponent({
  name: 'HeaderComponent',
  computed: {
    getHeight() {
      return this.$q.screen.lt.md ? '400px' : '600px'
    }
  },
  setup () {
    return {
      linkList,
      slide: ref(0),
      slides
    }
  }
})
</script>
