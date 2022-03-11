<template>
    <q-header class="transparent absolute">
      <q-toolbar class="justify-center wrap">

        <q-list>
          <q-item>
            <q-item-section avatar >
              <img src="icons/logo_dark.svg" alt="" width="64">
            </q-item-section>
          </q-item>
        </q-list>

        <div v-if="!$q.screen.lt.sm">
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
                  :disable="!menu.active"
                >
                  <q-item-section>{{menu.name}}</q-item-section>
                </q-item>
              </q-list>
          </q-menu>
          </q-btn>
          <q-btn flat color="text-white" to="/sveden/contact">Контакты</q-btn>
        </div>
        <q-btn v-else flat icon="menu" class="q-gutter-sm" @click="setStateDrawer(true)"></q-btn>
        <drawer-navigation></drawer-navigation>
        <q-btn flat icon="search" class="q-gutter-sm" @click="createNotification('Модуль временно недоступен')"></q-btn>
        <q-btn flat icon="visibility" class="q-gutter-sm" @click="createNotification('Модуль временно недоступен')"></q-btn>
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
          :offset="$q.screen.lt.sm ? [40, 40] : [128, 150]"
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
        <div class="offset-lg-2 col-md-offset-2 col-md-8 col-lg-5 col-12">
          <p :class="$q.screen.lt.md ? 'text-h4' : 'text-h2'">
            {{slide.text}}
          </p>

        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row q-mx-xl floating-banner">
      <div class="col-12 col-md-6 no-gutters">
        <q-card>
          <q-card-section>
            <div class="text-h3 text-grey-10" v-if="!$q.screen.lt.lg">Приёмная компания 2021</div>
            <div class="text-h5 text-grey-10" v-else>Приёмная кампания 2021</div>
          </q-card-section>
          <q-card-section>
            <q-list>
              <q-item clickable to="/p/abiturient">
                <q-item-section avatar>
                  <q-icon name="ion-open"></q-icon>
                </q-item-section>
                <q-item-section>Подать документы онлайн</q-item-section>
              </q-item>
              <q-item clickable to="/p/abiturient">
                <q-item-section avatar>
                  <q-icon name="ion-open"></q-icon>
                </q-item-section>
                <q-item-section>Рейтинги абитуриентов</q-item-section>
              </q-item>
              <q-item clickable to="/sveden/abiturient/join">
                <q-item-section avatar>
                  <q-icon name="ion-open"></q-icon>
                </q-item-section>
                <q-item-section>Порядок приёма документов</q-item-section>
              </q-item>
              <q-item clickable to="/sveden/abiturient/openDoor">
                <q-item-section avatar>
                  <q-icon name="ion-open"></q-icon>
                </q-item-section>
                <q-item-section>День открытых дверей</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6 no-gutters">
        <q-card class="bg-primary text-white">
          <q-card-section>
            <div class="text-h3" v-if="!$q.screen.lt.lg">Важная информация</div>
            <div class="text-h5" v-else>Важная информация</div>
          </q-card-section>
          <q-card-section>
            <q-list>
              <q-item clickable to="/sveden/common">
                <q-item-section avatar>
                  <q-icon name="ion-open"></q-icon>
                </q-item-section>
                <q-item-section>О вузе</q-item-section>
              </q-item>
              <q-item clickable to="/sveden/abiturient">
                <q-item-section avatar>
                  <q-icon name="ion-open"></q-icon>
                </q-item-section>
                <q-item-section>Вопросы и ответы</q-item-section>
              </q-item>
              <q-item clickable to="/sveden/common">
                <q-item-section avatar>
                  <q-icon name="ion-open"></q-icon>
                </q-item-section>
                <q-item-section>Сведения об образовательной организации</q-item-section>
              </q-item>
              <q-item clickable to="/sveden/education">
                <q-item-section avatar>
                  <q-icon name="ion-open"></q-icon>
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
import { ref, inject } from 'vue'

import linkList from './links'
import drawerNavigation from './DrawerNavigation.vue'

const slides = [
  { id: 0, src: 'slider/1.webp', text: 'Почему я выбираю СКФ МТУСИ' },
  { id: 1, src: 'slider/3.webp', text: 'На базе вуза организована сетевая академия CISCO' },
  { id: 2, src: 'slider/2.webp', text: 'На базе вуза работает учебный центр "Academy for Professional Training Unify Communications"' },
  { id: 3, src: 'slider/5.webp', text: 'Лаборатория цифровых систем коммутации и сетей связи' },
  { id: 4, src: 'slider/4.webp', text: 'Возможность перевода в Москву на тех же условиях с предоставлением общежития' },
  { id: 5, src: 'slider/6.webp', text: 'Лаборатория систем радиосвязи и телевещания' },
  { id: 6, src: 'slider/7.webp', text: 'Huawei' }
]

export default ({
  name: 'HeaderComponent',
  components: {
    drawerNavigation
  },
  computed: {
    getHeight() {
      return this.$q.screen.lt.md ? '500px' : '700px'
    }
  },
  setup () {
    const $event = inject('$event')
    const createNotification = msg => $event.$emit('set-notification', msg)
    const setStateDrawer = prop => $event.$emit('set-drawer-state', prop)
    return {
      createNotification,
      linkList,
      slide: ref(0),
      slides,
      setStateDrawer
    }
  }
})
</script>


<style scoped>
  .floating-banner {
    position: absolute;
    top: 550px;
    left: 45%;
    transform: translateX(-50%);
    width: 1400px;
  }

  @media screen and (min-width: 728px) and (max-width: 1367px) {
    .floating-banner {
      position: absolute;
      top: 550px;
      left: 45%;
      transform: translateX(-50%);
      width: 1100px;
    }
  }
  
  @media screen and (min-width: 1px) and (max-width: 450px) {
    .floating-banner {
      position: absolute;
      top: 480px;
      left: 37%;
      width: 95%;
    }
  }
</style>