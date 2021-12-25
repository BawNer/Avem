<template>
<q-header 
  style="backdrop-filter: blur(7px); background-color: #0000001a;"
  :class="[transparent ? 'transparent' : '', absolute ? 'absolute': '', fixedOnTop ? 'fixed-top': '' ]">
    <q-toolbar class="justify-center wrap">

      <q-list>
        <q-item to="/">
          <q-item-section avatar >
            <img src="images/logo.png" alt="" width="128">
          </q-item-section>
        </q-item>
      </q-list>

      <div class="desktop-only">
        <q-btn 
          flat 
          color="dark"
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
        <q-btn flat color="dark" to="/">Контакты</q-btn>
      </div>
      <q-btn flat color="dark" icon="menu" class="q-gutter-sm mobile-only"></q-btn>
      <q-btn flat color="dark" icon="search" to="/404" class="q-gutter-sm"></q-btn>
      <q-btn flat color="dark" icon="visibility" to="/404" class="q-gutter-sm"></q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>

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
  { name: 'Абитуриенту', menu: [
    { name: 'Общая информация', route: '/p/abiturient' },
    { name: 'Приемная комиссия', route: '/p/abiturient/join' }

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

export default {
  name: 'HeaderSimple',
  props: {
    transparent: Boolean,
    blured: Boolean,
    fixedOnTop: Boolean,
    absolute: Boolean
  },
  setup() {
    return {
      linkList
    }
  }
}
</script>

<style lang="scss" scoped>
  .blured {
    filter: blur(5px);
    background-blend-mode: overlay;
  }
</style>